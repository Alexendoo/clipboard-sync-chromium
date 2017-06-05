import { Config } from './state'
import { get, post } from './http'

import { sign } from 'tweetnacl'
import { encodeBase64, decodeUTF8 } from 'tweetnacl-util'

export async function getInfo(config: Config) {
  const json = await get(config, '/about')
  console.log(json)
}

export async function registerUser(config: Config) {
  const pkey = encodeBase64(config.ed25519.publicKey)
  const link = {
    type: 'root',
    body: {
      name: 'foo',
      pkey,
      fcm: 'f',
    },
    seqno: 0,
    prev: null,
  }

  const linkJSON = JSON.stringify(link)
  const linkBytes = decodeUTF8(linkJSON)
  const sig = encodeBase64(sign.detached(linkBytes, config.ed25519.secretKey))

  const linkRequest = {
    link: encodeBase64(linkBytes),
    sig,
    pkey,
  }

  console.log(await post(config, '/chain', JSON.stringify(linkRequest)))
}

export async function registerDevice(config: Config) {
  const signerPkey = encodeBase64(config.ed25519.publicKey)
  const link = {
    type: 'new_device',
    body: {
      name: 'bar',
    },
    seqno: 1,
    prev: null,
  }
}
