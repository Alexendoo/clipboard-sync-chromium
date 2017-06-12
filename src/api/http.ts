import { Config } from '../state'

export async function get(config: Config, path: string) {
  const target = new URL(path, config.server)
  return fetch(target.href)
}

export async function post(config: Config, path: string, body: Uint8Array) {
  const target = new URL(path, config.server)
  return fetch(target.href, {
    body,
    method: 'POST',
  })
}
