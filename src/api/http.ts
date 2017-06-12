import { Config } from '../state'

async function http(
  config: Config,
  path: string,
  method: 'GET' | 'POST',
  body?: Uint8Array,
) {
  const target = new URL(path, config.server)

  const response = await fetch(target.href, {
    body,
    method,
  })
  if (!response.ok) {
    throw new TypeError(`Response: ${response.status} ${response.statusText}`)
  }

  const buffer = await response.arrayBuffer()

  return new Uint8Array(buffer)
}

export async function get(config: Config, path: string) {
  return http(config, path, 'GET')
}

export async function post(config: Config, path: string, body: Uint8Array) {
  return http(config, path, 'POST', body)
}
