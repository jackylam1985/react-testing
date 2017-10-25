import { StaticRouterContext } from 'common'
import { Request, Response } from 'express'
import * as React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import { StaticRouter } from 'react-router-dom'

import { isProd } from '../universal/constants'
import store from '../universal/redux/store'
import routes from '../universal/routes'

import * as fs from 'fs'
import { template as _template } from 'lodash'

const baseTemplate = fs.readFileSync('./src/index.template.html')
const template = _template(baseTemplate.toString())

export default (req: Request, res: Response) => {
  const context: StaticRouterContext = {}

  // Need to run this on dev too to get the context for correct 404 status code
  let content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        {renderRoutes(routes)}
      </StaticRouter>
    </Provider>,
  )

  // SSR the content on production only
  if (!isProd) { content = '' }

  const html = template({ content })

  res.status(context.status || 200).send(html)
}
