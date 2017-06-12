import { Config } from './state'
import { get, post } from './http'
import { messages } from './messages'

import { sign } from 'tweetnacl'

export async function getInfo(config: Config) {
  const json = await get(config, '/about')
  console.log(json)
}

export async function registerUser(config: Config) {
  const newDevice = new messages.NewDevice({
    FCMToken: 'f',
    name: 'moo',
    publicKey: config.ed25519.publicKey,
  })

  const link = messages.Link.create({
    newDevice,
    prev: undefined,
    sequenceNumber: 0,
  })

  const body = messages.Link.encode(link as messages.ILink).finish()

  const signed = new messages.Signed({
    body,
    publicKey: config.ed25519.publicKey,
    signature: sign.detached(body, config.ed25519.secretKey),
  })

  const payload = messages.Signed.encode(signed).finish()

  return post(config, '/chain', payload)
}
