import { StaticRouterContext } from 'common'
import { Request, Response } from 'express'
import * as React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import { StaticRouter } from 'react-router-dom'

import store from '../../client/redux/store'
import routes from '../../client/routes'

import * as fs from 'fs'
import { template as _template } from 'lodash'

const baseTemplate = fs.readFileSync('./src/index.template.html')
const template = _template(baseTemplate.toString())

export default (req: Request, res: Response) => {
  const context: StaticRouterContext = {}

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
