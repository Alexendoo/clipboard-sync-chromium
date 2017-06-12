import { Component, h } from 'preact'

import { getInfo } from '../api/registration'
import { ServerInfo } from '../messages/index'

export interface RegisterState {
  value: string
  resolving: boolean
  info?: ServerInfo
}

export class Register extends Component<{}, RegisterState> {
  constructor() {
    super()

    this.state = {
      value: 'http://localhost:8080',
      resolving: false,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e: Event) {
    const input = e.target as HTMLInputElement
    this.setState({
      value: input.value,
    })
  }

  async handleSubmit(e: Event) {
    e.preventDefault()

    this.setState({
      resolving: true,
    })
    const info = await getInfo(this.state.value)
    this.setState({ info })
  }

  render() {
    const { info, resolving, value } = this.state

    if (info !== undefined) {
      return <p>{info.senderId}</p>
    }

    if (resolving) {
      return <div class="resolving">resolving</div>
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={value} onChange={this.handleChange} />
      </form>
    )
  }
}
