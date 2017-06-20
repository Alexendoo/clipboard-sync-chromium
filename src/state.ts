import idb, { UpgradeDB } from 'idb'
import { createStore, Store } from 'redux'
import { box, sign } from 'tweetnacl'
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

function reducer(state: State): State {
  return state
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

export function newStore(serverConfig: ServerConfig): Store<State> {
  const state = {
    config: {
      curve25519: box.keyPair(),
      ed25519: sign.keyPair(),
      server: serverConfig,
    },
  }

  return createStore(reducer, state)
}

export async function loadStore(): Promise<Store<State>> {
  const db = await getDB()
  const tx = db.transaction('state', 'readonly')

  const state = await tx.objectStore('state').get(0)
  if (state === undefined) {
    throw new Error('State not found')
  }

  return createStore(reducer, state)
}

export async function saveStore(store: Store<State>) {
  const db = await getDB()
  const tx = db.transaction('state', 'readwrite')

  return tx.objectStore('state').put(store.getState(), 0)
}
