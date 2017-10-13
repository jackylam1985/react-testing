import * as React from 'react'
import { renderRoutes, RouteConfig } from 'react-router-config'

import Header from '../components/Header'

export default class App extends React.Component {
  render () {
    const { route } = this.props

    return (
      <div>
        <Header />
        {route && renderRoutes(route.routes)}
      </div>
    )
  }
}
