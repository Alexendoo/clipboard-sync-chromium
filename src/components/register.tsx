import { Component, h } from 'preact'

export interface RegisterState {
  input: string
}

export class Register extends Component<{}, RegisterState> {
  constructor() {
    super()

    this.input = this.input.bind(this)
  }

  input(e: Event) {
    const input = e.target as HTMLInputElement
    this.setState({
      input: input.value,
    })
  }

  render() {
    return <input type="text" onInput={this.input} />
  }
}
