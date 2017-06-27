import { getConfig } from '../state/config'

async function http(path: string, method: 'GET' | 'POST', body?: Uint8Array) {
  const config = getConfig()
  const target = new URL(path, config.server.href)

  const response = await fetch(target.href, {
    body,
    method,
  })
  if (!response.ok) {
    throw new HTTPError(response)
  }

  const buffer = await response.arrayBuffer()

  return new Uint8Array(buffer)
}

export class HTTPError extends Error {
  response: Response
  constructor(response: Response) {
    super(`Response: ${response.status} ${response.statusText}`)

    this.response = response
  }
}

export async function get(path: string) {
  return http(path, 'GET')
}

export async function post(path: string, body: Uint8Array) {
  return http(path, 'POST', body)
}
