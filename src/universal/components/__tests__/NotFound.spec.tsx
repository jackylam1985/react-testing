// tslint:disable-next-line no-unused-variable
import * as React from 'react'
import { createRenderer } from 'react-test-renderer/shallow'

import NotFound from '../NotFound'

describe('components/NotFound', () => {

  it('renders', () => {
    const renderer = createRenderer()
    expect(renderer.render(
      <NotFound />,
    )).toMatchSnapshot()
  })
})
