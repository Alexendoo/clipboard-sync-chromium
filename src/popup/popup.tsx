import './popup.css'
import './popup.html'

import createHistory from 'history/createHashHistory'
import { h, render } from 'preact'
import { Route, Router } from 'preact-router'
import { Home } from '../components/home'
import { Register } from '../components/register'
import { loadConfig } from '../state/config'

const Main = () =>
  <Router history={createHistory()}>
    <Route default component={Home} />
  </Router>

loadConfig()
  .then(() => <Main />)
  .catch(() => <Register />)
  .then(element => render(element, document.body))
