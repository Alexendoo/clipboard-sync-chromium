import { h, render, Component } from 'preact'
import { Router, Route } from 'preact-router'
import { Store } from 'redux'

import { State, loadStore } from '../state'

require('./popup.html')

const enum LoaderStatus {
  Done,
  Loading,
  NotFound,
}

interface LoaderState {
  store?: Store<State>
  status: LoaderStatus
}

function assertNever(x: never): never {
  throw new Error('Unexpected object: ' + x)
}

class Loader extends Component<{}, LoaderState> {
  constructor() {
    super()
    this.state = { status: LoaderStatus.Loading }
    this.fetchStore()
  }

  async fetchStore() {
    try {
      const store = await loadStore()
      this.setState({
        store,
        status: LoaderStatus.Done,
      })
    } catch (e) {
      this.setState({
        status: LoaderStatus.NotFound,
      })
    }
  }

  render() {
    switch (this.state.status) {
      case LoaderStatus.Done:
        return <p>done</p>

      case LoaderStatus.Loading:
        return <div class="loading" />

      case LoaderStatus.NotFound:
        return <p>not found</p>

      default:
        return assertNever(this.state.status)
    }
  }
}

class Popup extends Component<Store<State>, {}> {
  render(props: Store<State>) {
    return <p>hello</p>
  }
}

render(<Loader />, document.body)
