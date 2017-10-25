import * as React from 'react'
import { Route, RouteComponentProps } from 'react-router-dom'

interface Props {
  status?: number
  children?: React.ReactNode
}

const render = (props: Props) => {
  return ({ staticContext }: RouteComponentProps<any>) => {
    if (staticContext) {
      staticContext.status = props.status
    }

    return props.children
  }
}

export default ({ status, children }: Props) => (
  <Route render={render({status, children})} />
)
