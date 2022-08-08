const fs = require('fs');
import path from 'path';
import { app, remote } from 'electron';
import os from 'os'

let appRootDir = require('app-root-dir').get().replace('app.asar', '').replace(/(\s+)/g, '\\$1');
export const rootDir = require('app-root-dir').get()
function getPlatform(){
    switch (os.platform()) {
        case 'aix':
        case 'freebsd':
        case 'linux':
        case 'openbsd':
        case 'android':
          return 'linux';
        case 'darwin':
        case 'sunos':
          return 'mac';
        case 'win32':
          return 'win';
      }
}

export const platform = getPlatform()

const IS_PROD = process.env.NODE_ENV === 'production';
const root = process.cwd();
const APP = process.type === 'renderer' ? remote.app : app

const binariesPath =
  IS_PROD || APP.isPackaged
    ? path.join(process.resourcesPath, 'bin', platform)
    : path.join(root, 'resources', 'bin', platform);

const mugleWalletBinaries = platform==='win'?'mugle-wallet.exe':'mugle-wallet'
const mugleBinaries = platform==='win'?'mugle.exe':'mugle'
//const torBinaries = platform==='win'?'tor.exe':'tor'

export let mugleWalletPath = path.join(binariesPath, mugleWalletBinaries)
export let muglePath = path.join(binariesPath, mugleBinaries)
//export let torPath = path.join(binariesPath, torBinaries)

if(platform=='win'){
  mugleWalletPath = '"' + path.resolve(mugleWalletPath) + '"' 
  muglePath = '"' + path.resolve(muglePath) + '"' 
}

export const chainType = 'main'
export const chain = 'Mainnet'
export const walletTOMLPath = path.join(APP.getPath('home'), '.mugle', chainType, 'mugle-wallet.toml')
export const nodeTOMLPath = path.join(APP.getPath('home'), '.mugle', chainType, 'mugle-server.toml')

function getOwnerApiSecret(){
  if(fs.existsSync(walletTOMLPath)){
      const re = /api_secret_path\s*=\s*"(.\S+)"/
      let c = fs.readFileSync(walletTOMLPath).toString()
      const found = c.match(re)
      if(found)return found[1]
  }
  return path.join(APP.getPath('home'), '.mugle', chainType, '.owner_api_secret')
}

function getNodeApiSecret(){
  if(fs.existsSync(nodeTOMLPath)){
      const re = /api_secret_path\s*=\s*"(.\S+)"/
      let c = fs.readFileSync(nodeTOMLPath).toString()
      const found = c.match(re)
      if(found)return found[1]
  }
  return path.join(APP.getPath('home'), '.mugle', chainType, '.api_secret')
}

export const mugleDIR = path.join(APP.getPath('home'), '.mugle')
export const seedPath = path.join(APP.getPath('home'), '.mugle', chainType, 'wallet_data/wallet.seed')
export const walletPath = path.join(APP.getPath('home'), '.mugle', chainType)
export const walletDataPath = path.join(APP.getPath('home'), '.mugle', chainType, 'wallet_data')
export const walletConfigPath = path.join(APP.getPath('home'), '.mugle', chainType, 'mugle-wallet.toml')
export const walletLogPath = path.join(APP.getPath('home'), '.mugle', chainType, 'mugle-wallet.log')
export const nodeApiSecretPath = getNodeApiSecret()
export const ownerApiSecretPath = getOwnerApiSecret()
export const mugleNodeLog = path.join(APP.getPath('home'), '.mugle', chainType, 'mugle-server.log')
export const chainDataPath = path.join(APP.getPath('home'), '.mugle', chainType, 'chain_data')

export const thestralPath = path.join(APP.getPath('home'), '.thestral')
export const logDir = path.join(thestralPath, 'log')
export const tempTxDir = path.join(thestralPath, 'temp_tx')
export const configPath = path.join(thestralPath, 'config.json')
export const torDir = path.join(thestralPath, 'tor')
export const torConfigPath = path.join(thestralPath, 'tor', 'torrc')
export const torDataPath = path.join(thestralPath, 'tor', 'data')
export const torHSDataPath = path.join(thestralPath, 'tor', 'hs_data')
export const torLogPath = path.join(thestralPath, 'tor', 'tor.log')
export const slatepackDir = path.join(thestralPath, 'slatepack')

export const releaseUrl = 'https://api.github.com/repos/muglefans/thestral/releases/latest'
export const downloadUrl = 'https://github.com/muglefans/thestral/releases/latest'

export function getConfig(){
  try{
    return JSON.parse(fs.readFileSync(configPath))
  }catch (e) {
    return {}
  }
}

function setConfig(options){
  return fs.writeFileSync(configPath, JSON.stringify(options))
}

export function updateConfig(options){
  let options_ = getConfig()
  for(var key in options){
    options_[key] = options[key]
  }
  setConfig(options_)
}

//export const logLevel = getConfig()['debug']?'debug':'info'
export const logLevel = 'debug'

export const hedwigServer = 'https://v1.hedwig.im'
export const hedwigClient =  
  IS_PROD || APP.isPackaged
    ? path.resolve(path.join(process.resourcesPath, 'bin', 'hedwig', 'client.js'))
    : path.resolve(path.join(root, 'hedwig', 'client.js'))

export const hedwigApp = 'Thestral'

function getLocale(){
  let locale = getConfig()['locale']
  if(locale)return locale
  locale = APP.getLocale().toLowerCase()
  if(locale.startsWith('zh'))return 'zh'
  if(locale.startsWith('ru'))return 'ru'
  if(locale.startsWith('fr'))return 'fr'
  if(locale.startsWith('nl'))return 'nl'  
  return 'en'
}
export function setLocale(locale){
  updateConfig({'locale':locale})
}
export const locale = getLocale()
export const langs = {'zh':'简体中文', 'en':'English', 'fr':'Français', 'nl':'Nederlands'}

import pkg from '../../package.json'
export const version = pkg.version

export const defaultGnodeOptions= {
  'useLocalGnode': true,
  //connnectMethod: localFirst, remoteFirst, localAllTime, remoteAllTime
  'connectMethod':'localFirst',
  'remoteAddr': 'http://mainnet.seed.mugle.org:6813',
  'localAddr': 'http://127.0.0.1:6813',
  'background': false
}

let gnodeOption_
function upgradeGnodeOption(){
  let c = getConfig()
  if(c && c.gnode){
    let remote = c.gnode.remoteAddr
    if(remote && remote.search('mugle3')!==-1){
      gnodeOption_ = defaultGnodeOptions
      c['gnode'] = defaultGnodeOptions
      setConfig(c)
    }
  }
}
upgradeGnodeOption()
if(!gnodeOption_){
  gnodeOption_ = getConfig()['gnode']?getConfig()['gnode']: defaultGnodeOptions
}
export const gnodeOption = gnodeOption_

export const mugleNode = gnodeOption.remoteAddr
export const mugleNode2 = gnodeOption.remoteAddr
export const mugleLocalNode = gnodeOption.localAddr

export const defaultTorOptions= {
  'startWhenLaunch': true,
  'proxyHost':'',
  'proxyType': '',
  'proxyUser': '',
  'proxyPassword': '',
  'connectedOnce': false
}
export const torOptions = getConfig()['tor']?getConfig()['tor']: defaultTorOptions

export const darkMode = getConfig()['darkMode']?getConfig()['darkMode']: false
