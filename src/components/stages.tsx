import { Component, ComponentConstructor, FunctionalComponent, h } from 'preact'

type AnyComponentConstructor<Props> =
  | ComponentConstructor<Props, any>
  | FunctionalComponent<Props>

export interface StageProps {
  continue<Props>(
    nextComponent: AnyComponentConstructor<Props>,
    nextProps?: Props,
  ): void
}

interface StagesProps {
  initial: AnyComponentConstructor<StageProps>
}

interface StagesState {
  component: AnyComponentConstructor<StageProps>
  lastProps?: object
}

export class Stages extends Component<StagesProps, StagesState> {
  constructor() {
    super()
    this.state = {
      component: this.props.initial,
      lastProps: {},
    }
    this.onContinue = this.onContinue.bind(this)
  }

  onContinue(
    nextComponent: AnyComponentConstructor<StageProps>,
    nextProps?: object,
  ) {
    this.setState({
      component: nextComponent,
      lastProps: nextProps,
    })
  }

  render() {
    return (
      <this.state.component
        {...this.state.lastProps}
        continue={this.onContinue}
      />
    )
  }
}
