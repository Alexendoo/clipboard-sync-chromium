import { h, render } from 'preact'

import { Pending } from '../components/pending'
import { Register } from '../components/register'
import { loadStore } from '../state'

import './popup.html'

async function main(): Promise<JSX.Element> {
  const store = await loadStore()
  console.log(store)
  return <div>done - main</div>
}

render(
  <Pending
    component={main()}
    loading={<div class="loading" />}
    fallback={<Register />}
  />,
  document.body,
)
