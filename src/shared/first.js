var fs = require('fs');
import {defaultGnodeOptions, thestralPath, logDir, getConfig, updateConfig, tempTxDir, slatepackDir} from './config';

export function checkFirstTime(){
    console.log(thestralPath)
    const isFirstTime = fs.existsSync(thestralPath)?false:true
    if(isFirstTime){
        fs.mkdirSync(thestralPath)
        fs.mkdirSync(logDir)
        fs.mkdirSync(tempTxDir)
        fs.mkdirSync(slatepackDir)
        updateConfig({'firstTime':true})
        updateConfig({'gnode': defaultGnodeOptions})
    }
    else{
        updateConfig({'firstTime':false})
    }
}

export function isFirstTime(){
    return getConfig()['firstTime']
}

