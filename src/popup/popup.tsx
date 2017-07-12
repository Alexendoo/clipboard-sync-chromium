import './popup.css'
import './popup.html'

import createHistory from 'history/createHashHistory'
import { h, render } from 'preact'
import { Route, Router } from 'preact-router'
import { Home } from '../components/home'
import { Invite } from '../components/invite'
import { Register } from '../components/register'
import '../crypto'
import { loadConfig } from '../state/config'

const Main = () =>
  <Router history={createHistory()}>
    <Route default component={Home} />
    <Route path="/invite" component={Invite} />
  </Router>

loadConfig()
  .then(() => <Main />)
  .catch(() => <Register />)
  .then(element => render(element, document.body))
