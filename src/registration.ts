import { Config } from './config'
import { get, post } from './http'

import { sign } from 'tweetnacl'
import { encodeBase64, decodeUTF8 } from 'tweetnacl-util'

export async function getInfo(config: Config) {
  const json = await get(config, '/about')
  console.log(json)
}

export async function register(config: Config) {
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
  const sig = encodeBase64(sign(decodeUTF8(linkJSON), config.ed25519.secretKey))

  const linkRequest = {
    link,
    sig,
    pkey,
  }

  console.log(await post(config, '/chain', JSON.stringify(linkRequest)))
}
