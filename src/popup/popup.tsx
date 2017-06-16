import { h, render } from 'preact'
import { Provider } from 'preact-redux'
import { Route, Router } from 'preact-router'

import { Home } from '../components/home'
import { Pending } from '../components/pending'
import { Register } from '../components/register'
import { loadStore } from '../state'

import './popup.html'

async function main(): Promise<JSX.Element> {
  const store = await loadStore()
  return (
    <Provider store={store}>
      <Router>
        <Route default component={Home} />
      </Router>
    </Provider>
  )
}

render(
  <Pending
    component={main()}
    loading={<div class="loading" />}
    fallback={<Register />}
  />,
  document.body,
)
