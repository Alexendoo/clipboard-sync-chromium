import { Component, h } from 'preact'

export class Home extends Component<{}, {}> {
  render() {
    return (
      <div>
        <p>home</p>
        <a href="#/invite">Add a new device</a>
      </div>
    )
  }
}
