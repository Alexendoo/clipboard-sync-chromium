import { util } from 'protobufjs'

export async function PBKDF2(string: string) {
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

export function SHA256(data: BufferSource) {
  return crypto.subtle.digest(
    {
      name: 'SHA-256',
    },
    data,
  )
}

export async function HMACSign(key: BufferSource, message: string) {
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
