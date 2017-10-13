import * as Express from 'express'
import * as React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import { StaticRouter } from 'react-router-dom'

import routes from '../../client/routes'
import store from '../../client/redux/store'

import _template from 'lodash/template'
import fs from 'fs'

const baseTemplate = fs.readFileSync('./src/index.template.html')
const template = _template(baseTemplate)

export default (req, res) => {
  const context = {}

  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        {renderRoutes(routes)}
      </StaticRouter>
    </Provider>,
  )

  if (context.status === 404) {
    res.status(404)
  }

  res.status(200).send(template({ content }))
}
