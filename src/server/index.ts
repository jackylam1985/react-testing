import * as express from 'express'
import * as path from 'path'
import * as serveStatic from 'serve-static'

import appConfig from '../config/'
import { isProd } from '../universal/constants'
import setupDevMiddlewares from './setup/setup-dev-middlewares'
import ssr from './ssr'

const app = express()
const port = appConfig.server.port
const publicPath = path.join(__dirname, '..', '..', 'build')

// Add Development middleware
if (!isProd) {
  setupDevMiddlewares(app)
}

app.use('/static', serveStatic(publicPath))
app.get('*', ssr)

app.listen(port, (error: any) => {
  if (error) {
    console.log(error) /* tslint:disable-line:no-console TOFIX: */
  } else {
    console.log(`node environment: ${process.env.NODE_ENV}`) /* tslint:disable-line:no-console TOFIX: */
    console.log(`Listening on port ${port}`) /* tslint:disable-line:no-console TOFIX: */
  }
})
