import './popup.html'

import createHistory from 'history/createHashHistory'
import { Component, h, render } from 'preact'
import { Route, route, Router } from 'preact-router'
import { Home } from '../components/home'
import { Register } from '../components/register'
import { loadConfig } from '../state/config'

class InitialRoute extends Component<{}, {}> {
  async componentWillMount() {
    try {
      await loadConfig()
      route('/foo')
    } catch (e) {
      route('/register')
    }
  }

  render() {
    return <div />
  }
}

const Main = () =>
  <Router history={createHistory()}>
    <Route default component={InitialRoute} />
    <Route path="/foo" component={Home} />
    <Route path="/register" component={Register} />
  </Router>

render(<Main />, document.body)
