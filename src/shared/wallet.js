import fs from 'fs'
const fse = require('fs-extra')
const path = require('path')
import {exec, execFile, spawn, fork} from 'child_process'

import axios from 'axios'
require('promise.prototype.finally').shim();

import log from './logger'
import {platform, mugleWalletPath, muglePath, seedPath, mugleNode, mugleNode2, chainType, chainDataPath, 
    nodeApiSecretPath, ownerApiSecretPath, walletTOMLPath, walletPath, walletConfigPath,
    tempTxDir, gnodeOption, slatepackDir} from './config'
import { messageBus } from '../renderer/messagebus'
import GnodeService from './gnode'
import dbService from '../renderer/db'
import {stopTor} from './tor'

let ownerAPI
let listenProcess
let checkProcess
let infoProcess
let initProcess
let processes = {}
let client
let password_
const walletHost = 'http://localhost:6820'
const jsonRPCUrl = 'http://localhost:6820/v2/owner'
const jsonRPCForeignUrl = 'http://localhost:6820/v2/foreign'

function enableForeignApi(){
    const re = /owner_api_include_foreign(\s)*=(\s)*false/
    if(fs.existsSync(walletTOMLPath)){
        let c = fs.readFileSync(walletTOMLPath).toString()
        if(c.search(re) != -1){
            log.debug('Enable ForeignApi to true')
            c = c.replace(re, 'owner_api_include_foreign = true')
            fs.writeFileSync(walletTOMLPath, c)
        }
    }
}

function execPromise(command) {
    return new Promise(function(resolve, reject) {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(stdout.trim());
        });
    });
}

function addQuotations(s){
    return '"' + s +'"'
}
class WalletService {
    static checkVersion(){
        let cmd = `${mugleWalletPath} --version`
        execPromise(cmd).then(
            res=>{log.debug('check mugle-wallet version:', res)}
        ).catch(err=>{
            log.debug('check mugle-wallet version error:', err)
        })

        cmd = `${muglePath} --version`
        execPromise(cmd).then(
            res=>{log.debug('check mugle node version:', res)}
        ).catch(err=>{
            log.debug('check mugle node version error:', err)
        })
    }

    static initClient() {
        if(fs.existsSync(ownerApiSecretPath)){
            client = axios.create({
                baseURL: walletHost,
                auth: {
                    username: 'mugle',
                    password: fs.readFileSync(ownerApiSecretPath).toString()
                },
            })
        }else{
            client = axios.create({baseURL: walletHost})
        }
    }
    
    static ensureDir(){
        log.debug('it is time to ensuredir.')
        fse.ensureDir(walletPath)
        fse.ensureDirSync(slatepackDir)

    }
    static setPassword(password){
        password_ = password
    }

    static passwordUndefined(){
        if(!password_)return true
        return false
    }

    static jsonRPC(method, params, isForeign){
        const headers = {
            'Content-Type': 'application/json'
        }
        const body = {
            jsonrpc: "2.0",
            id: +new Date(),
            method: method,
            params: params,
        }
        const url = isForeign?jsonRPCForeignUrl:jsonRPCUrl
        return client.post(url, body, headers)
    }
    
    static getNodeHeight(){
        if(client){
            return WalletService.jsonRPC('node_height', [], false)
        }
    }

    static getAccounts(){
        if(client){
            return WalletService.jsonRPC('accounts', [], false)
        }
    }
    
    static getSummaryInfo(minimum_confirmations){
        return WalletService.jsonRPC('retrieve_summary_info', [true, minimum_confirmations], false)
    }

    static getTransactions(toRefresh, tx_id, tx_salte_id){
        return WalletService.jsonRPC('retrieve_txs', [toRefresh, tx_id, tx_salte_id], false)
    }

    static getCommits(include_spent, toRefresh, tx_id){
        return WalletService.jsonRPC('retrieve_outputs', [include_spent, toRefresh, tx_id], false)
    }

    static cancelTransactions(tx_id, tx_salte_id){
        return WalletService.jsonRPC('cancel_tx', [tx_id, tx_salte_id])
    }

    static receiveTransaction(slate, account, message){
        return WalletService.jsonRPC('receive_tx', [slate, account, message], true)
    }

    static receiveTransaction2(slate, account, dest){
        return WalletService.jsonRPC('receive_tx', [slate, account, dest], true)
    }

    static issueSendTransaction(tx_data){
        return WalletService.jsonRPC('init_send_tx',  {'args': tx_data})
    }

    static lockOutputs(slate, participant_id){
        return WalletService.jsonRPC('tx_lock_outputs',  [slate, participant_id])
    }

    static finalizeTransaction(slate){
        return WalletService.jsonRPC('finalize_tx',  [slate])
    }

    static postTransaction(tx, isFluff){
        return WalletService.jsonRPC('post_tx',  [tx, isFluff])
    }
 
    static startOwnerApi(password, mugleNodeToConnect){
        //WalletService.stopProcess('ownerAPI')
        
        let cmd

        if(!password){
            if(platform === 'linux'){
                ownerAPI = execFile(mugleWalletPath, ['owner_api']) 
            }else{
                cmd = `${mugleWalletPath}  owner_api`
                ownerAPI =  exec(cmd)
            }
        }else{
            log.debug('mugleNodeToConnect:' + mugleNodeToConnect)
            enableForeignApi()
            
            if(platform === 'linux'){
                ownerAPI = execFile(mugleWalletPath, ['-r', mugleNodeToConnect, 'owner_api']) 
            }else{
                cmd = platform==='win'? `${mugleWalletPath} -r ${mugleNodeToConnect} --pass ${addQuotations(password)} owner_api`:
                                            `${mugleWalletPath} -r ${mugleNodeToConnect} owner_api`
                //log.debug(`platform: ${platform}; start owner api cmd: ${cmd}`)
                ownerAPI =  exec(cmd)
            }
        }
        
        processes['ownerAPI'] = ownerAPI
        log.debug('ownerAPIProcessPID: ' + ownerAPI.pid)
        if(platform==='win'){
            localStorage.setItem('ownerAPIProcessPID', ownerAPI.pid)
        }

        ownerAPI.stdout.on('data', (data)=>{
            if(platform!='win'){ownerAPI.stdin.write(password+'\n')}
            localStorage.setItem('ownerAPIProcessPID', ownerAPI.pid)
        })
        ownerAPI.stderr.on('data', (data) => {
            log.error('start owner_api got stderr: ' + data)
        })
    }

    static restartOwnerApi(password, mugleNodeToConnect){
        WalletService.stopProcess(ownerAPI)
        setTimeout(()=>{
            WalletService.startOwnerApi(password, mugleNodeToConnect)
        }, 500)
    }
    
    
    static startListen(gnode, password=password_, noTor=true){
        WalletService.stopProcess('listen')
        if(platform==='linux'){
            if(noTor){
                listenProcess =  execFile(mugleWalletPath, ['-r', gnode, 'listen', '-n'])
            }else{
                listenProcess =  execFile(mugleWalletPath, ['-r', gnode, , 'listen'])
            }
        }else{
            let cmd
            if(noTor){
                cmd = platform==='win'? `${mugleWalletPath} -r ${gnode} --pass ${addQuotations(password)} listen -n`:
                                        `${mugleWalletPath} -r ${gnode} listen -n`
            //log.debug(`platform: ${platform}; start listen cmd: ${cmd}`)
            }else{
                cmd = platform==='win'? `${mugleWalletPath} -r ${gnode} --pass ${addQuotations(password)} listen`:
                                        `${mugleWalletPath} -r ${gnode} listen`
            }
            listenProcess =  exec(cmd)
        }
        processes['listen'] = listenProcess
        if(platform==='win'){
            localStorage.setItem('listenProcessPID', listenProcess.pid)
        }

        listenProcess.stdout.on('data', (data)=>{
            if(platform!='win'){
                listenProcess.stdin.write(password+'\n')
            }
            localStorage.setItem('listenProcessPID', listenProcess.pid)
        })
        listenProcess.stderr.on('data', (data) => {
            log.error('start wallet listen got stderr: ' + data)
        })
    }

    static stopAll(){
        stopTor()

        for(var ps in processes){
            log.debug('stopall ps: '+ ps)
            if(processes[ps]){
                log.debug('stopall try to kill '+ ps)
                WalletService.stopProcess(ps)
            }
        }
        
        if(!gnodeOption.useLocalGnode || (!gnodeOption.background)){
            log.debug('Try to stop local gnode.')
            GnodeService.stopGnode2()
        }
    }
    
    static isExist(){
        return fs.existsSync(seedPath)?true:false
    }

    static isWalletConfigExist(){
        return fs.existsSync(walletConfigPath)?true:false
    }

    static new(password){
        const cmd = platform==='win'? `${mugleWalletPath} --pass ${addQuotations(password)} init`:
                                      `${mugleWalletPath} init`
        log.debug(`function new: platform: ${platform}; mugle bin: ${mugleWalletPath}`); 
        let createProcess = exec(cmd)
        createProcess.stdout.on('data', (data) => {
            let output = data.toString()
            //log.debug('init process return: '+output)
            if (output.includes("Please enter a password for your new wallet")){
                log.debug('function new: time to entry password.')
                createProcess.stdin.write(password + "\n");
                createProcess.stdin.write(password + "\n");
            }
            if(output.includes("Invalid Arguments: Not creating wallet - Wallet seed file exists")){
                log.debug('function new: walletExisted')
                return messageBus.$emit('walletExisted')
            }
            if(output.includes("Please back-up these words in a non-digital format.")){
                var wordSeed = data.toString();
                
                wordSeed = wordSeed.replace("Your recovery phrase is:","");
                wordSeed = wordSeed.replace("Please back-up these words in a non-digital format.","");
                
                wordSeed = wordSeed.replace(/(\r\n|\n|\r)/gm, "");
                wordSeed = wordSeed.replace("wallet.seed","wallet.seed ==   ");
                var wordSeedWithLog = wordSeed;
                var wordSeedWithoutLog = wordSeedWithLog.substring(wordSeedWithLog.indexOf("==")+1);
                wordSeedWithoutLog = wordSeedWithoutLog.trim();
                wordSeedWithoutLog = wordSeedWithoutLog.replace("= ","").trim();
                //log.debug(`wordSeed: ${wordSeed}; wordSeedWithoutLog: ${wordSeedWithoutLog}`)
                //log.debug(`function new: walletCreated with seed of length ${wordSeedWithoutLog.length}.`)
                return messageBus.$emit('walletCreated', wordSeedWithoutLog)
            }
        })
        createProcess.stderr.on('data', (data) => {
            log.error('Process:init new wallet got stderr: ' + data)
            return messageBus.$emit('walletCreateFailed', data)
        })
    }

    static createSlate(amount, version){
        fse.ensureDirSync(tempTxDir)

        return new Promise(function(resolve, reject) {
            let fn = path.join(tempTxDir, String(Math.random()).slice(2) + '.temp.tx')
            WalletService.send(amount, 'file', fn, version).then((data)=>{
                fs.readFile(fn, function(err, buffer) {
                    if (err) return reject(err)
                    //fse.remove(fn)
                    return resolve(JSON.parse(bffer.toString()))
                });
            }).catch((err)=>{
                return reject(err)
            })
        })
    }

    static finalizeSlate(slate){
        let fn = path.join(tempTxDir, String(Math.random()).slice(2) + '.temp.tx.resp')
        fs.writeFileSync(fn, JSON.stringify(slate))
        return WalletService.finalize(fn)
    }

    static ouputFinalizedSlate(tx_id, slate){
        let fn = path.join(slatepackDir, tx_id + '.finalized.slatepack')
        fs.writeFileSync(fn, JSON.stringify(slate))
    }

    static createSlatepackFile(slatepack){
        let fn = path.join(slatepackDir, String(Math.random()).slice(2) + '.slatepack')
        fs.writeFileSync(fn, slatepack)
        return fn
    }

    static finalizeByCli(fn, gnode){
        let mugle = mugleWalletPath
        if(platform==='win'){
            mugle = mugleWalletPath.slice(1,-1)
        }
        let cmd = `${mugle} -r ${gnode} -p ${password_} finalize -i ${fn}`
        log.debug('finalize by cli cmd is : ' + cmd)

        return execPromise(cmd)
    }

    static check(cb, gnode, password){
        let mugle = mugleWalletPath
        if(platform==='win'){
            mugle = mugleWalletPath.slice(1,-1)
        }
        if(password){
            checkProcess = spawn(mugle, ['-r', gnode, '-p', password, 'scan', '-d'])
        }else{
            checkProcess = spawn(mugle, ['-r', gnode, '-p', password_, 'scan', '-d'])
        }
        let ck = checkProcess
        processes['check'] = checkProcess
        localStorage.setItem('checkProcessPID', checkProcess.pid)
        
        messageBus.$emit('scaning')

        ck.stdout.on('data', function(data){
            let output = data.toString()
            cb(output)
        })
        ck.stderr.on('data', function(data){
            let output = data.toString()
            cb(output)
        })
        ck.on('close', function(code){
            messageBus.$emit('scaned')
            log.debug('mugle wallet check exists with code: ' + code);
            if(code==0){return messageBus.$emit('walletCheckFinished')}
        });
    }

    static info(cb, gnode, password){
        let mugle = mugleWalletPath
        if(platform==='win'){
            mugle = mugleWalletPath.slice(1,-1)
        }
        if(password){
            infoProcess = spawn(mugle, ['-r', gnode, '-p', password, 'info'])
        }else{
            infoProcess = spawn(mugle, ['-r', gnode, '-p', password_, 'info'])
        }
        log.debug('mugle wallet using mugle node: ' + gnode );
        let info = infoProcess
        processes['info'] = infoProcess
        localStorage.setItem('infoProcessPID', infoProcess.pid)

        info.stdout.on('data', function(data){
            let output = data.toString()
            cb(output)
        })
        info.stderr.on('data', function(data){
            let output = data.toString()
            log.debug('error for mugle-wallet info:' + data)
            cb(output)
        })
        info.on('close', function(code){
            log.debug('mugle wallet info exits with code: ' + code);
            if(code==0){messageBus.$emit('walletInfoFinished')}else{
                messageBus.$emit('walletInfoFailed')
            }
        });
    }

    static info2(gnode){
        let mugle = mugleWalletPath
        if(platform==='win'){
            mugle = mugleWalletPath.slice(1,-1)
        }
        if(password_){
            spawn(mugle, ['-r', gnode, '-p', password_, 'info'])
        }
    }
    
    static stopProcess(processName){
        let pidName = `${processName}ProcessPID`
        const pid = localStorage.getItem(pidName)
        log.debug(`try to kill ${processName} with pid (get from ${pidName}) : ${pid}`)
        localStorage.removeItem(pidName)

        if(platform==='win'&&pid){
            return exec(`taskkill /pid ${pid} /f /t`)
        }
        
        if(processes[processName]){
            processes[processName].kill('SIGKILL')
            log.debug(`kill ${processName}`)
        }
        if(pid) {
            try{
                process.kill(pid, 'SIGKILL')
            }catch(e){
                log.error(`error when kill ${processName} ${pid}: ${e}` )
            }
        }
    }

    static killMugleWallet(){
        if(platform!=='win'){
            exec('pkill mugle-wallet')
        }else{
            exec('taskkill -f /im mugle-wallet.exe')
        }
    }
    
    static init(){
        const cmd = `${mugleWalletPath} init`
        initProcess = exec(cmd)
        processes['init'] = initProcess
        localStorage.setItem('initProcessPID', initProcess.pid)
    }

    static removeChainData(){
        fse.removeSync(chainDataPath)
    }
}
WalletService.checkVersion()
WalletService.initClient()
WalletService.ensureDir()
export default WalletService