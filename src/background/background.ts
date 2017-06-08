/// <reference path="../../node_modules/@types/chrome/index.d.ts" />

import { getInfo, registerUser } from '../registration'
import { loadStore, saveStore, newStore } from '../state'

declare var require: (path: string) => void

require('../manifest.json')

declare global {
  interface Window {
    [key: string]: any
  }
}

window.getInfo = getInfo
window.registerUser = registerUser
window.loadStore = loadStore
window.saveStore = saveStore
window.newStore = newStore

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
