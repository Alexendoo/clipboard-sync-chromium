import { Config } from '../state'
import { get, post } from './http'
import { NewDevice, Link, ILink, Signed } from '../messages'

import { sign } from 'tweetnacl'

export async function getInfo(config: Config) {
  const json = await get(config, '/about')
  console.log(json)
}

export async function registerUser(config: Config) {
  const newDevice = new NewDevice({
    FCMToken: 'f',
    name: 'moo',
    publicKey: config.ed25519.publicKey,
  })

  const link = Link.create({
    newDevice,
    prev: undefined,
    sequenceNumber: 0,
  })

  const body = Link.encode(link as ILink).finish()

  const signed = new Signed({
    body,
    publicKey: config.ed25519.publicKey,
    signature: sign.detached(body, config.ed25519.secretKey),
  })

  const payload = Signed.encode(signed).finish()

  return post(config, '/chain', payload)
}
