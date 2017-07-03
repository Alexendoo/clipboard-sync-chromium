import { util } from 'protobufjs'
import {
  Link,
  NewDevice,
  ParentHello,
  ServerInfo,
  Signed,
} from '../../generated/messages'
import { HMACSign } from '../crypto/primitives'
import { sign, Valid } from '../crypto/valid'
import { config } from '../state/config'
import { HTTPError, post } from './http'
import { WebSocketStream } from './websocket'

export async function getInfo(server: string): Promise<ServerInfo> {
  const target = new URL('/about', server)

  const response = await fetch(target.href)
  if (!response.ok) {
    throw new HTTPError(response)
  }

  const buffer = await response.arrayBuffer()

  return ServerInfo.decode(new Uint8Array(buffer))
}

export async function registerDevice(
  newDevice: NewDevice,
  lastLink: Valid<Link>,
) {
  const link = new Link({
    newDevice,
    prev: lastLink.signature,
    index: lastLink.message.index + 1,
  })

  const signed = sign(link, config.ed25519, Link)
  const payload = Signed.encode(signed).finish()

  await post('/chain', payload)
}

export async function registerUser() {
  const newDevice = new NewDevice({
    FCMToken: 'f',
    name: 'moo',
    publicKey: config.ed25519.publicKey,
  })

  const link = Link.create({
    newDevice,
    index: 0,
  })

  const signed = sign(link, config.ed25519, Link)
  const payload = Signed.encode(signed).finish()

  await post('/chain', payload)
}

export async function login(secret: BufferSource) {
  const config = getConfig()
  const sessionID = await HMACSign(secret, 'clipboard-sync-invite')
  const sessionString = util.utf8.read(new Uint8Array(sessionID), 0, 0)

  const target = new URL(`/invite/${sessionString}`, config.server.href)
  target.protocol = 'ws'

  const ws = new WebSocketStream(target.href)
  console.log(ws)
  await ws.open
  console.log('open')

  const newDevice = new NewDevice({
    FCMToken: 'e',
    name: 'bar',
    publicKey: config.ed25519.publicKey,
  })

  ws.send(NewDevice.encode(newDevice).finish())

  const bytes = await ws.read()
  console.log(bytes)
}

window.l = login
