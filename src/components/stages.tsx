import { Component } from 'preact'

export class Stages extends Component<
  {
    stepper(
      next: (nextProps: any) => void,
      error: (e: any) => void,
    ): IterableIterator<JSX.Element>
  },
  {
    element: JSX.Element
  }
> {
  constructor() {
    super()
    this.next = this.next.bind(this)
    this.error = this.error.bind(this)
    this.iter = this.props.stepper(this.next, this.error)
  }

  private iter: IterableIterator<JSX.Element>

  private next(nextProps: any) {
    this.setState({
      element: this.iter.next(nextProps).value,
    })
  }

  private error(e: any) {
    this.setState({
      element: this.iter.throw!(e).value,
    })
  }

  render() {
    return this.state.element
  }
}
