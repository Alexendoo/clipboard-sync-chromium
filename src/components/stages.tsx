import { Component, ComponentConstructor, FunctionalComponent, h } from 'preact'

export interface StageProps {
  continue(nextProps?: object): void
}

interface StagesProps {
  stages: Array<
    ComponentConstructor<StageProps, any> | FunctionalComponent<StageProps>
  >
  initial?: object
}

interface StagesState {
  index: number
  lastProps?: object
}

export class Stages extends Component<StagesProps, StagesState> {
  constructor() {
    super()
    this.state = {
      index: 0,
    }
    this.onContinue = this.onContinue.bind(this)
  }

  onContinue(nextProps?: object) {
    if (this.state.index + 1 === this.props.stages.length) {
      throw new Error('Out of stages')
    }
    this.setState({
      index: this.state.index + 1,
      lastProps: nextProps,
    })
  }

  render() {
    const Stage = this.props.stages[this.state.index]
    return (
      <Stage
        {...this.props.initial}
        {...this.state.lastProps}
        continue={this.onContinue}
      />
    )
  }
}
