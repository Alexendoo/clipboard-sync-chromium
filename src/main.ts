/// <reference path="../node_modules/@types/chrome/index.d.ts" />

import { getConfig, setConfig, newConfig } from './config'
import { getInfo } from './registration'

declare var require: (path: string) => void

require('./manifest')

declare global {
  interface Window {
    [key: string]: any
  }
}

window.newConfig = newConfig
window.getConfig = getConfig
window.setConfig = setConfig
window.getInfo = getInfo

chrome.runtime.onStartup.addListener(() => {
  chrome.storage.local.get('registered', result => {
    if (result['registered']) return

    const senderIds = ['303334042045']
    chrome.gcm.register(senderIds, registrationCallback)
  })
})

chrome.gcm.onMessage.addListener(message => {
  console.log(message)
})

function registrationCallback(id: string) {
  if (chrome.runtime.lastError) {
    console.error(chrome.runtime.lastError)
  }

  console.log(id)
}
