import { h } from 'preact'

// type syncCallback = (render: (element: JSX.Element) => void) => void

export interface Render {
  render: (element: JSX.Element) => void
}

// class AsyncRenderer extends Component<
//   {
//     renderer: Render
//   },
//   {
//     element: JSX.Element
//   }
// > {
//   constructor(props: any) {
//     super(props)
//     this.props.renderer.render(element => {
//       console.log(element)
//       this.setState({ element })
//     })
//   }

//   render() {
//     return this.state.element
//   }
// }

export function asyncRender(renderer: (render: Render) => void) {
  // return <AsyncRenderer set={renderer} />
  console.log(renderer)
  return <div />
}
