import { Component, h } from 'preact'
import { Store } from 'redux'

import { getInfo } from '../api/registration'
import { newStore, State } from '../state'
import { ErrorView } from './error'

export interface RegisterState {
  value: string
  resolving: boolean
  error?: Error
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
      const store = newStore(this.state.value, info)
      this.props.onStore(store)
    } catch (error) {
      this.setState({
        error,
        resolving: false,
      })
    }
  }

  render() {
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
