import { Component, h } from 'preact'

import { getInfo, registerUser } from '../api/registration'
import { newStore, ServerConfig, saveStore } from '../state'
import { assertNever } from '../util'
import { ErrorView } from './error'

const enum Stage {
  GetInfo,
  ChooseMethod,
  Method,
}

interface StageGetInfo {
  stage: Stage.GetInfo
}

interface StageChooseMethod {
  stage: Stage.ChooseMethod
  config: ServerConfig
}

interface StageMethod {
  stage: Stage.Method
  method: JSX.Element
}

type RegisterState = StageGetInfo | StageChooseMethod | StageMethod

export class Register extends Component<{}, RegisterState> {
  constructor() {
    super()
    this.onConfig = this.onConfig.bind(this)
    this.onSelect = this.onSelect.bind(this)
    this.state = {
      stage: Stage.GetInfo,
    }
  }

  onConfig(config: ServerConfig) {
    const state = {
      stage: Stage.ChooseMethod,
      config,
    }

    this.setState(state)
  }

  onSelect(method: JSX.Element) {
    const state = {
      stage: Stage.Method,
      method,
    }

    this.setState(state)
  }

  render() {
    const state = this.state
    switch (state.stage) {
      case Stage.GetInfo:
        return <GetInfo onConfig={this.onConfig} />
      case Stage.ChooseMethod:
        return <ChooseMethod config={state.config} onSelect={this.onSelect} />
      case Stage.Method:
        return state.method
      default:
        throw assertNever(state)
    }
  }
}

interface GetInfoProps {
  onConfig: (info: ServerConfig) => void
}

interface GetInfoState {
  config?: ServerConfig
  error?: Error
  resolving: boolean
  value: string
}

class GetInfo extends Component<GetInfoProps, GetInfoState> {
  constructor() {
    super()

    this.state = {
      value: 'http://localhost:8080',
      resolving: false,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e: Event) {
    const input = e.target as HTMLInputElement
    this.setState({
      value: input.value,
    })
  }

  async handleSubmit(e: Event) {
    e.preventDefault()

    if (this.state.resolving) return

    this.setState({
      resolving: true,
    })

    try {
      const info = await getInfo(this.state.value)
      this.props.onConfig({
        info,
        href: this.state.value,
      })
    } catch (error) {
      this.setState({
        error,
        resolving: false,
      })
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ErrorView error={this.state.error} />
        <input
          autofocus
          disabled={this.state.resolving}
          onChange={this.handleChange}
          type="text"
          value={this.state.value}
        />
      </form>
    )
  }
}

interface ChooseMethodProps {
  config: ServerConfig
  onSelect: (method: JSX.Element) => void
}

class ChooseMethod extends Component<ChooseMethodProps, {}> {
  render() {
    return (
      <div>
        <a
          onClick={() =>
            this.props.onSelect(<NewUser config={this.props.config} />)}
        >
          New User
        </a>
        <a onClick={() => {}}>
          Login
        </a>
      </div>
    )
  }
}

interface NewUserProps {
  config: ServerConfig
}

interface NewUserState {
  error?: Error
}

class NewUser extends Component<NewUserProps, NewUserState> {
  async componentWillMount() {
    try {
      const store = newStore(this.props.config)
      const state = store.getState()
      await registerUser(state.config)
      await saveStore(store)
      location.reload(true)
    } catch (error) {
      this.setState({ error })
    }
  }

  render() {
    return <ErrorView error={this.state.error} />
  }
}
