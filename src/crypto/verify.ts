import { sign } from 'tweetnacl'
import { Signed } from '../messages/index'

export interface Decodable<T> {
  decode(reader: Uint8Array, length?: number): T
}

export interface Valid<T> {
  signature: Uint8Array
  publicKey: Uint8Array
  message: T
}

export async function verify<T extends Decodable<T>>(
  message: Signed,
  type: T,
): Promise<Valid<T>> {
  const signed = sign.detached.verify(
    message.body,
    message.signature,
    message.publicKey,
  )

  if (!signed) throw new Error('invalid signature')

  return {
    signature: message.signature,
    publicKey: message.publicKey,
    message: type.decode(message.body),
  }
}
