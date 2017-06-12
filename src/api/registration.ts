import { sign } from 'tweetnacl'

import { ILink, Link, NewDevice, ServerInfo, Signed } from '../messages'
import { Config } from '../state'
import { HTTPError, post } from './http'

export async function getInfo(server: string): Promise<ServerInfo> {
  const target = new URL('/about', server)

  const response = await fetch(target.href)
  if (!response.ok) {
    throw new HTTPError(response)
  }

  const buffer = await response.arrayBuffer()

  return ServerInfo.decode(new Uint8Array(buffer))
}

export async function registerUser(config: Config): Promise<any> {
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
