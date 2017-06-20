import { util } from 'protobufjs'
import { secretbox } from 'tweetnacl'
import { Boxed } from '../messages/index'

export async function pbkdf2(string: string) {
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
    [],
  )

  return crypto.subtle.exportKey('raw', derived)
}

export async function hmac(key: BufferSource, message: string) {
  const buffer = new Uint8Array(util.utf8.length(message))
  util.utf8.write(message, buffer, 0)

  const importedKey = await crypto.subtle.importKey(
    'raw',
    key,
    {
      name: 'HMAC',
      hash: { name: 'SHA-256' },
    },
    false,
    ['sign'],
  )

  return crypto.subtle.sign('HMAC', importedKey, buffer)
}

export function box(message: Uint8Array, key: Uint8Array) {
  const nonce = new Uint8Array(secretbox.nonceLength)
  crypto.getRandomValues(nonce)

  const boxed = new Boxed({
    body: secretbox(message, nonce, key),
    nonce,
  })

  return Boxed.encode(boxed).finish()
}
