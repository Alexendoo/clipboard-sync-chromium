import './popup.html'

import createHistory from 'history/createHashHistory'
import { h, render } from 'preact'
import { Route, Router } from 'preact-router'
import { Home } from '../components/home'
import { Pending } from '../components/pending'
import { Register } from '../components/register'

async function main(): Promise<JSX.Element> {
  throw 'foo'

  return (
    <Router history={createHistory()}>
      <Route default component={Home} />
    </Router>
  )
}

render(<Pending component={main()} fallback={<Register />} />, document.body)
