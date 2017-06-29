import './popup.css'
import './popup.html'

import createHistory from 'history/createHashHistory'
import { h, render } from 'preact'
import { Home } from '../components/home'
import { Route, Router } from 'preact-router'
import { RegisterRouter } from '../components/register'
import { loadConfig } from '../state/config'

const MainRouter = () =>
  <Router history={createHistory()}>
    <Route default component={Home} />
  </Router>

loadConfig()
  .then(() => <MainRouter />)
  .catch(() => <RegisterRouter />)
  .then(router => render(router, document.body))
