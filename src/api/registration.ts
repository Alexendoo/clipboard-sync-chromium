import { util } from 'protobufjs'
import { secretbox, sign } from 'tweetnacl'
import { Boxed, ILink, Link, NewDevice, ServerInfo, Signed } from '../messages'
import { Config } from '../state'
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

export async function login(config: Config, secret: string) {
  const target = new URL(secret, config.server.href)
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

async function pbkdf2(string: string) {
  const buffer = new Uint8Array(util.utf8.length(string))
  util.utf8.write(string, buffer, 0)

  const key = await crypto.subtle.importKey(
    'raw',
    buffer,
    { name: 'PBKDF2' },
    false,
    ['deriveKey'],
  )

  const derived = await crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt: new ArrayBuffer(0),
      iterations: 10000,
      hash: 'SHA-256',
    },
    key,
    /* does nothing */ { name: 'AES-CBC', length: 256 },
    true,
    ['encrypt'],
  )

  return crypto.subtle.exportKey('raw', derived)
}

function box(message: Uint8Array, key: Uint8Array) {
  const nonce = new Uint8Array(secretbox.nonceLength)
  crypto.getRandomValues(nonce)

  const boxed = new Boxed({
    body: secretbox(message, nonce, key),
    nonce,
  })

  return Boxed.encode(boxed).finish()
}

window.login = login
