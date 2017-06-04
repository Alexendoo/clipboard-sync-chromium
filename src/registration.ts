import { Config } from './config'

export async function getInfo(config: Config) {
  const resp = await fetch('http://localhost:8080/about')
  console.log(await resp.json())
}
