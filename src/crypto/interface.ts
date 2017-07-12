export interface Response {
  success: boolean
  value: any
}

export interface Request {
  operation: Operation
  value: any
}

export const enum Operation {
  // valid.ts
  verfify,
  sign,

  // primitives.ts
  PBKDF2,
  SHA256,
  HMACSign,
}
