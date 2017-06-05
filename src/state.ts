import { box, sign } from 'tweetnacl'
import { createStore, Store, Action, combineReducers } from 'redux'
import idb, { UpgradeDB } from 'idb'

export interface State {
  config: Config
}

type Stringify<T> = { [K in keyof T]: string }

export interface Config {
  curve25519: nacl.BoxKeyPair
  ed25519: nacl.SignKeyPair
  server: string
}

function reducer(state: State, action: any): State {
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

export function newStore(server: string): Store<State> {
  const state = {
    config: {
      curve25519: box.keyPair(),
      ed25519: sign.keyPair(),
      server,
    },
  }

  return createStore(reducer, state)
}

export async function loadStore(): Promise<Store<State>> {
  const db = await getDB()
  const tx = db.transaction('state', 'readonly')

  const state = await tx.objectStore('state').get(0)

  return createStore(reducer, state)
}

export async function saveStore(store: Store<State>) {
  const db = await getDB()
  const tx = db.transaction('state', 'readwrite')

  return tx.objectStore('state').put(store.getState(), 0)
}
