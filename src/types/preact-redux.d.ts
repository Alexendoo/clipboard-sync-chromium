declare module 'preact-redux' {
  import { Store, Dispatch } from 'redux'
  import { Component } from 'preact'

  type MapStateToProps<Props> = (state: any, ownProps?: Props) => Partial<Props>

  export function connect<OwnProps, OwnState, State>(
    mapStateToProps?: (state: State, ownProps?: OwnProps) => Partial<OwnProps>,
    mapDispatchToProps?: (
      dispatch: Dispatch<State>,
      ownProps?: OwnProps,
    ) => Partial<OwnProps>,
  ): (
    component: new () => Component<OwnProps, OwnState>,
  ) => new () => Component<Partial<OwnProps>, OwnState>

  export function Provider(props: { store: Store<any> }): JSX.Element
}
