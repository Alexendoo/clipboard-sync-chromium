import { h } from 'preact'
import { asyncRender } from './async-render'

export const Invite = () =>
  asyncRender(async render => {
    const secret = new Uint8Array(20)
    crypto.getRandomValues(secret)
    render(<div>foo</div>)
    render(<div>bar</div>)
  })
