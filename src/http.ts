import { Config } from './state'

export async function get(config: Config, path: string) {
  const target = config.server + path
  const req = await fetch(target)
  return req.json()
}

export async function post(config: Config, path: string, body: string) {
  const target = config.server + path
  const req = await fetch(target, {
    body,
    method: 'POST',
  })
  return req.json()
}
