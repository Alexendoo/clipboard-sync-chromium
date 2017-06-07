import { Config } from './state'

export async function get(config: Config, path: string) {
  const target = config.server + path
  return fetch(target)
}

export async function post(config: Config, path: string, body: Uint8Array) {
  const target = config.server + path
  return fetch(target, {
    body,
    method: 'POST',
  })
}
