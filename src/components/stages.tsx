import { Component, h } from 'preact'

type stepper = (
  next: (value: any) => void,
  error: (e: any) => void,
) => IterableIterator<JSX.Element>

class Stages extends Component<
  {
    stepper: stepper
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

  private next(value: any) {
    this.setState({
      element: this.iter.next(value).value,
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

export function stages(stepper: stepper) {
  return <Stages stepper={stepper} />
}
