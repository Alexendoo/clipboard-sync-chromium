import idb, { UpgradeDB } from 'idb'
import { box, sign } from 'tweetnacl'
import { IServerInfo } from '../../generated/messages'

export interface Config {
  readonly curve25519: Readonly<nacl.BoxKeyPair>
  readonly ed25519: Readonly<nacl.SignKeyPair>
  readonly server: ServerConfig
}

export interface ServerConfig {
  readonly href: string
  readonly info: IServerInfo
}

const DB_NAME = 'config'

function upgradeDB(db: UpgradeDB) {
  switch (db.oldVersion) {
    case 0:
      db.createObjectStore(DB_NAME)
  }
}

function getDB() {
  return idb.open(DB_NAME, 1, upgradeDB)
}

export function newConfig(serverConfig: ServerConfig): Config {
  return {
    curve25519: box.keyPair(),
    ed25519: sign.keyPair(),
    server: serverConfig,
  }
}

let loaded: Config | undefined

/**
 * Returns the current application Config, must first be loaded with
 * {@link loadConfig}
 */
export function getConfig(): Config {
  if (loaded === undefined) {
    throw new Error('Config not loaded')
  }
  return loaded
}

export async function loadConfig(): Promise<Config> {
  const db = await getDB()
  const tx = db.transaction(DB_NAME, 'readonly')

  const config = await tx.objectStore(DB_NAME).get(0)
  if (config === undefined) {
    throw new Error('Config not found')
  }

  loaded = config
  return config
}

export async function saveConfig(config: Config) {
  const db = await getDB()
  const tx = db.transaction(DB_NAME, 'readwrite')

  return tx.objectStore(DB_NAME).put(config, 0)
}
