import { box, sign } from 'tweetnacl'
import { encodeBase64, decodeBase64 } from 'tweetnacl-util'

export interface Config {
  version: number,
  curve25519: nacl.BoxKeyPair,
  ed25519: nacl.SignKeyPair
}

type Stringify<T> = {
  [K in keyof T]: string
}

interface EncodedConfig {
  version: number,
  curve25519: Stringify<nacl.BoxKeyPair>,
  ed25519: Stringify<nacl.SignKeyPair>
}

function encodeConfig(config: Config): EncodedConfig {
  return {
    ...config,
    curve25519: {
      publicKey: encodeBase64(config.curve25519.publicKey),
      secretKey: encodeBase64(config.curve25519.secretKey)
    },
    ed25519: {
      publicKey: encodeBase64(config.ed25519.publicKey),
      secretKey: encodeBase64(config.ed25519.secretKey)
    }
  }
}

function decodeConfig(encoded: EncodedConfig): Config {
  return {
    ...encoded,
    curve25519: {
      publicKey: decodeBase64(encoded.curve25519.publicKey),
      secretKey: decodeBase64(encoded.curve25519.secretKey)
    },
    ed25519: {
      publicKey: decodeBase64(encoded.ed25519.publicKey),
      secretKey: decodeBase64(encoded.ed25519.secretKey)
    }
  }
}


export function newConfig(): Config {
  return {
    version: 1,
    curve25519: box.keyPair(),
    ed25519: sign.keyPair()
  }
}

export function getConfig(): Promise<Config> {
  return new Promise<Config>((resolve, reject) => {
    chrome.storage.local.get("config", items => {
      const config = items.config as EncodedConfig | undefined

      if (config === undefined) {
        resolve(setConfig(newConfig()))
      } else {
        resolve(decodeConfig(config))
      }
    })
  })
}

export function setConfig(config: Config): Promise<Config> {
  return new Promise<Config>((resolve) => {
    const encoded = encodeConfig(config)
    chrome.storage.local.set({ config: encoded }, () => resolve(config))
  })
}
