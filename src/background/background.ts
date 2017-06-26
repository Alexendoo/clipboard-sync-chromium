import '../manifest.json'
import './background.html'

declare global {
  interface Window {
    [key: string]: any
  }
}

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
