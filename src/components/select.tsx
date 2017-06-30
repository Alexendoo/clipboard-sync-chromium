import { Component, h } from 'preact'

interface SelectorProps extends JSX.HTMLAttributes {
  select(value: any): void
}

export class Selector extends Component<SelectorProps, {}> {
  getChildContext() {
    return {
      select: this.props.select,
    }
  }
  render() {
    return (
      <div class="selector" {...this.props}>
        {this.props.children}
      </div>
    )
  }
}

interface ChoiceProps extends JSX.HTMLAttributes {
  choice: any
}

export class Choice extends Component<ChoiceProps, {}> {
  render() {
    return (
      <button
        type="button"
        class="choice"
        {...this.props}
        onClick={() => this.context.select(this.props.choice)}
      >
        {this.props.children}
      </button>
    )
  }
}
