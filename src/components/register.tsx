import { Component, h } from 'preact'
import { Store } from 'redux'

import { getInfo } from '../api/registration'
import { ServerConfig, State } from '../state'
import { ErrorView } from './error'

export interface RegisterState {
  config?: ServerConfig
  error?: Error
  resolving: boolean
  value: string
}

export interface RegisterProps {
  onStore: (store: Store<State>) => void
}

export class Register extends Component<RegisterProps, RegisterState> {
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
      this.setState({
        config: {
          info,
          href: this.state.value,
        },
      })
    } catch (error) {
      this.setState({
        error,
        resolving: false,
      })
    }
  }

  render() {
    if (this.state.config !== undefined) {
      return <div>done</div>
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <ErrorView error={this.state.error} />
        <input
          autofocus
          disabled={this.state.resolving}
          onChange={this.handleChange}
          type="text"
          value={this.state.value}
        />
      </form>
    )
  }
}

// TODO: negotiate registration with remote device
