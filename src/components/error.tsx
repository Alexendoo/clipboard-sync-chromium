import { h } from 'preact'

export function ErrorView(props: { error?: Error }) {
  return props.error !== undefined
    ? <div class="error">{props.error.message}</div>
    : null
}
