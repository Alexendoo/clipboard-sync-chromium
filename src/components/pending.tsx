import { Component, h } from 'preact'
import { assertNever } from '../util'

const enum Status {
  Done,
  Loading,
  NotFound,
}

export interface PendingProps {
  component: Promise<JSX.Element>
  loading?: JSX.Element
  fallback: JSX.Element
}

interface PendingState {
  result?: JSX.Element
  status: Status
}

export class Pending extends Component<PendingProps, PendingState> {
  constructor(props: PendingProps) {
    super(props)
    this.state.status = Status.Loading
    this.load(props.component)
  }

  async load(component: Promise<JSX.Element>) {
    try {
      const result = await component
      this.setState({
        result,
        status: Status.Done,
      })
    } catch (e) {
      this.setState({
        status: Status.NotFound,
      })
    }
  }

  render(props: PendingProps, state: PendingState) {
    switch (state.status) {
      case Status.Done:
        return state.result!

      case Status.Loading:
        return props.loading || <div class="pending" />

      case Status.NotFound:
        return props.fallback

      default:
        return assertNever(state.status)
    }
  }
}
