import * as React from 'react'
import Status from '../routes/Status'

export default class NotFound extends React.Component<object, object> {
  render () {
    return (
      <Status status={404}>
        <div>Not found</div>
      </Status>
    )
  }
}
