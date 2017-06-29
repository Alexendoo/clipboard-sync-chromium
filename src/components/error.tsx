import { h } from 'preact'

export function ErrorView(props: {
  error?: Error
  class?: string
  children?: JSX.Element[]
}) {
  const className = props.class || 'error'

  const body = props.children && props.children.length > 0
    ? <div class={className + '__body'}>
        {props.children}
      </div>
    : undefined

  return props.error !== undefined
    ? <div class={className}>
        <div class={className + '__message'}>{props.error.message}</div>
        {body}
      </div>
    : null
}
