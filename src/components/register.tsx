import { Component, h } from 'preact'

export interface RegisterState {
  value: string
  resolving: boolean
}

export class Register extends Component<{}, RegisterState> {
  constructor() {
    super()

    this.state = {
      value: '',
      resolving: false,
    }

    this.input = this.input.bind(this)
  }

  input(e: KeyboardEvent) {
    const input = e.target as HTMLInputElement
    this.setState({
      value: input.value,
    })
    if (e.key === 'Enter') {
      this.setState({
        resolving: true,
      })
    }
  }

  render() {
    console.log('render')
    return <input type="text" onKeyDown={this.input} />
  }
}
