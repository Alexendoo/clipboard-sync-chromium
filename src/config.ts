import { box, sign } from 'tweetnacl'
import { encodeBase64, decodeBase64 } from 'tweetnacl-util'

export interface Config  {
  curve25519: nacl.BoxKeyPair,
  ed25519: nacl.SignKeyPair,
  server: string,
  version: 1
}

type Stringify<T> = {
  [K in keyof T]: string
}

interface EncodedConfig {
  curve25519: Stringify<nacl.BoxKeyPair>,
  ed25519: Stringify<nacl.SignKeyPair>,
  server: string,
  version: 1
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

// TODO: pluck all needed config data from a server invite/registration

export function newConfig(server: string): Config {
  return {
    version: 1,
    curve25519: box.keyPair(),
    ed25519: sign.keyPair(),
    server
  }
}

export function getConfig(): Promise<Config> {
  return new Promise<Config>((resolve, reject) => {
    chrome.storage.local.get("config", items => {
      const config = items.config as EncodedConfig | undefined

      if (config === undefined) {
        reject("config undefined")
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
