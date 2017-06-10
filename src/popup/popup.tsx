import { h, render, Component } from 'preact'
import { Router, Route } from 'preact-router'

import { State } from '../state'

require('./popup.html')

class Popup extends Component<{}, State> {
  render() {
    return <p>hello</p>
  }
}

render(<Popup />, document.body)
