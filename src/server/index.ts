import * as express from 'express'
import * as path from 'path'
import * as serveStatic from 'serve-static'

import routes from './routes'
import setupDevMiddlewares from './setup/setup-dev-middlewares'

const app = express()
const port = process.env.PORT || 3000
const publicPath = path.join(__dirname, '..', '..', 'build')
const isProd = process.env.NODE_ENV === 'production'

// Add Development middleware
if (!isProd) {
  setupDevMiddlewares(app)
}

app.use('/static', serveStatic(publicPath))
app.get('*', routes)

app.listen(port, (error: any) => {
  if (error) {
    console.log(error) /* tslint:disable-line:no-console TOFIX: */
  } else {
    console.log(`node environment: ${process.env.NODE_ENV}`) /* tslint:disable-line:no-console TOFIX: */
    console.log(`Listening on port ${port}`) /* tslint:disable-line:no-console TOFIX: */
  }
})
