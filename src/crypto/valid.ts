import { Writer } from 'protobufjs'
import { sign as naclSign } from 'tweetnacl'
import { Signed } from '../../generated/messages'

export class InvalidSignatureError extends Error {
  constructor() {
    super('Invalid Signature')
    this.name = 'InvalidSignatureError'
  }
}

export interface Valid<T> {
  body: Uint8Array
  message: T
  publicKey: Uint8Array
  signature: Uint8Array
}

export interface Decodable<T> {
  decode(reader: Uint8Array): T
}

export interface Encodable<T> {
  encode(message: T): Writer
}

/**
 * Checks the signed body's signature is valid for the publicKey,
 * decodes the body and returns a validated message
 *
 * @throws {InvalidSignatureError} Throws on invalid signatures
 */
export function verify<T extends Decodable<T>>(
  message: Signed,
  decoder: T,
): Valid<T> {
  const signed = naclSign.detached.verify(
    message.body,
    message.signature,
    message.publicKey,
  )

  if (!signed) throw new InvalidSignatureError()

  return {
    body: message.body,
    message: decoder.decode(message.body),
    publicKey: message.publicKey,
    signature: message.signature,
  }
}

/**
 * Encodes message with encoder, signs the result with keys.secretKey,
 * returns a validated message
 */
export function sign<Message, Encoder extends Encodable<Message>>(
  message: Message,
  keys: nacl.SignKeyPair,
  encoder: Encoder,
): Valid<Message> {
  const body = encoder.encode(message).finish()
  const signature = naclSign.detached(body, keys.secretKey)

  return {
    body,
    message,
    publicKey: keys.publicKey,
    signature,
  }
}
