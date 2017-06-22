import { util } from 'protobufjs'
import { sign } from 'tweetnacl'
import { ILink, Link, NewDevice, ServerInfo, Signed } from '../messages'
import { Config } from '../state'
import { HMACSign } from './crypto'
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

export async function registerUser(config: Config): Promise<any> {
  const newDevice = new NewDevice({
    FCMToken: 'f',
    name: 'moo',
    publicKey: config.ed25519.publicKey,
  })

  const link = Link.create({
    newDevice,
    prev: undefined,
    index: 0,
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

export async function login(config: Config, secret: BufferSource) {
  const sessionID = await HMACSign(secret, 'clipboard-sync-invite')
  const sessionString = util.utf8.read(new Uint8Array(sessionID), 0, 0)

  const target = new URL(`/invite/${sessionString}`, config.server.href)
  target.protocol = 'wss'

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
}
