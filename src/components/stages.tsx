import { Component } from 'preact'

export class Stages extends Component<
  {
    stepper(
      next: (nextProps?: object) => void,
    ): IterableIterator<JSX.Element | undefined>
  },
  {
    element: JSX.Element
  }
> {
  private pending: Promise<object>
  private resolve: (nextProps: object) => void

  constructor() {
    super()
    this.callback = this.callback.bind(this)
    this.pending = Promise.resolve({})
  }

  private callback(nextProps: object = {}) {
    this.resolve(nextProps)
    this.pending = new Promise(resolve => {
      this.resolve = resolve
    })
  }

  async componentWillMount() {
    const iter = this.props.stepper(this.callback)

    while (true) {
      const props = await this.pending
      const element = iter.next(props).value
      if (element === undefined) break

      this.setState({ element })
    }
  }

  render() {
    return this.state.element
  }
}
