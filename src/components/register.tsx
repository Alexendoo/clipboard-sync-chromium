import { Component, h } from 'preact'
import { Link, route, Route } from 'preact-router'
import { getInfo, registerUser } from '../api/registration'
import { newConfig, saveConfig, ServerConfig } from '../state/config'
import { ErrorView } from './error'

let serverConfig: ServerConfig

interface GetInfoState {
  error?: Error
  resolving: boolean
  value: string
}

class GetInfo extends Component<{}, GetInfoState> {
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
      serverConfig = {
        href: this.state.value,
        info,
      }
      route('/register/method')
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

const ChooseMethod = () =>
  <div>
    <p>choose method</p>

    <Link href="/register/new-user">New User</Link>
    {' '}
    <Link href="/register/login">Login</Link>
  </div>

interface NewUserState {
  error?: Error
}

class NewUser extends Component<{}, NewUserState> {
  async componentWillMount() {
    try {
      const config = newConfig(serverConfig)
      await saveConfig(config)
      await registerUser()
      route('/home')
    } catch (error) {
      this.setState({ error })
    }
  }

  render() {
    return <ErrorView error={this.state.error} />
  }
}

export const RegisterRoutes = [
  <Route path="/register/" component={GetInfo} />,
  <Route path="/register/method" component={ChooseMethod} />,
  <Route path="/register/new-user" component={NewUser} />,
]
