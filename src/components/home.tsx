import { Component, h } from 'preact'
import { connect } from 'preact-redux'
import { State } from '../state'

class Home extends Component<State, {}> {
  render() {
    console.log(this)
    return <div>home</div>
  }
}

export default connect((state: State) => state)(Home)
