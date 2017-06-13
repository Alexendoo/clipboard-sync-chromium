import { h, render } from 'preact'
import { Store } from 'redux'

import { Pending } from '../components/pending'
import { Register } from '../components/register'
import { loadStore, saveStore, State } from '../state'

import './popup.html'

async function onStore(store: Store<State>) {
  await saveStore(store)
  location.reload(true)
}

async function main(): Promise<JSX.Element> {
  const store = await loadStore()
  console.log(store)
  return <div>done</div>
}

render(
  <Pending
    component={main()}
    loading={<div class="loading" />}
    fallback={<Register onStore={onStore} />}
  />,
  document.body,
)
