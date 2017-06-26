import idb, { UpgradeDB } from 'idb'
import { IServerInfo } from './messages/index'

export interface State {
  readonly config: Config
}

export interface Config {
  readonly curve25519: Readonly<nacl.BoxKeyPair>
  readonly ed25519: Readonly<nacl.SignKeyPair>
  readonly server: ServerConfig
}

export interface ServerConfig {
  readonly href: string
  readonly info: IServerInfo
}

function upgradeDB(db: UpgradeDB) {
  switch (db.oldVersion) {
    case 0:
      db.createObjectStore('state')
  }
}

function getDB() {
  return idb.open('state', 1, upgradeDB)
}

export async function loadState(): Promise<State> {
  const db = await getDB()
  const tx = db.transaction('state', 'readonly')

  const state = await tx.objectStore('state').get(0)
  if (state === undefined) {
    throw new Error('State not found')
  }

  return state
}

export async function saveState(state: State) {
  const db = await getDB()
  const tx = db.transaction('state', 'readwrite')

  return tx.objectStore('state').put(state, 0)
}
