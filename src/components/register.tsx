import { Component, h } from 'preact'

import { getInfo } from '../api/registration'
import { ServerInfo } from '../messages/index'
import { ErrorView } from './error'

export interface RegisterState {
  value: string
  resolving: boolean
  info?: ServerInfo
  error?: Error
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

    if (this.state.resolving) return

    this.setState({
      resolving: true,
    })

    try {
      const info = await getInfo(this.state.value)
      this.setState({ info })
    } catch (error) {
      this.setState({ error })
    } finally {
      this.setState({
        resolving: false,
      })
    }
  }

  render() {
    const { error, info, resolving, value } = this.state

    if (info !== undefined) {
      return <p>{info.senderId}</p>
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <ErrorView error={error} />
        <input
          autofocus
          disabled={resolving}
          onChange={this.handleChange}
          type="text"
          value={value}
        />
      </form>
    )
  }
}
