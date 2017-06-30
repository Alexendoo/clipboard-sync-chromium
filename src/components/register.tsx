import { Component, h } from 'preact'
import { getInfo, registerUser } from '../api/registration'
import { Config, newConfig, saveConfig, ServerConfig } from '../state/config'
import { ErrorView } from './error'
import { Choice, Selector } from './select'
import { stages } from './stages'

class GetInfo extends Component<
  {
    next: (config: ServerConfig) => void
  },
  {
    error?: Error
    resolving: boolean
    value: string
  }
> {
  constructor(props: any) {
    super(props)

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
      this.props.next({
        href: this.state.value,
        info,
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

class NewUser extends Component<
  {
    config: ServerConfig
    next: () => void
  },
  {
    error?: Error
  }
> {
  async componentWillMount() {
    try {
      const config = newConfig(this.props.config)
      await saveConfig(config)
      await registerUser()
      this.props.next()
    } catch (error) {
      this.setState({ error })
    }
  }

  render() {
    return <ErrorView error={this.state.error} />
  }
}

class Login extends Component<
  {
    config: Config
    next: () => void
  },
  {}
> {
  render() {
    return <div />
  }
}

export const Register = () =>
  stages(function*(next) {
    const Method = yield (
      <Selector select={next}>
        <Choice choice={NewUser}>New User</Choice>
        <Choice choice={Login}>Login</Choice>
      </Selector>
    )

    const serverConfig = yield <GetInfo next={next} />

    yield <Method next={next} config={serverConfig} />

    location.reload(true)
  })

window.Register = Register
