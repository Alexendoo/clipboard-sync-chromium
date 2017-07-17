import { Component, h } from 'preact'

type syncCallback = (render: (element: JSX.Element) => void) => void

class AsyncRenderer extends Component<
  {
    set: syncCallback
  },
  {
    element: JSX.Element
  }
> {
  constructor(props: any) {
    super(props)
    this.props.set(element => {
      console.log(element)
      this.setState({ element })
    })
  }

  render() {
    return this.state.element
  }
}

export function asyncRender(renderer: syncCallback) {
  return <AsyncRenderer set={renderer} />
}
