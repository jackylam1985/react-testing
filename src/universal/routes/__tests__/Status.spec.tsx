// tslint:disable-next-line no-unused-variable
import * as React from 'react'
import { createRenderer } from 'react-test-renderer/shallow'

import Status from '../../routes/Status'

describe('../routes/Status', () => {
  it('renders', () => {
    const renderer = createRenderer()
    expect(renderer.render(
      <Status status={404}/>,
    )).toMatchSnapshot()
  })
})
