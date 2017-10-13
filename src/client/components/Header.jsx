import * as React from 'react'
import { Link } from 'react-router-dom'

export default class Header extends React.Component {
  shouldComponentUpdate () {
    return false
  }

  render () {
    return (
      <div className="site-header">
        <div className="branding-container">
          <a href="/" className="branding" />
        </div>
        <nav className="site-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}
