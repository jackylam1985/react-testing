import * as React from 'react'
import { Link } from 'react-router-dom'

export default class Header extends React.Component<object, object> {
  render () {
    return (
      <div>
        <div>
          <a href="/" />
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/node">Node</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}
