import * as Express from 'express'
import * as webpack from 'webpack'
import * as webpackDevMiddleware from 'webpack-dev-middleware'
import * as webpackHotMiddleware from 'webpack-hot-middleware'

export default function setupDevMiddlewares (app: Express.Application) {
  const webpackConfig = require('../../../webpack/webpack.config.dev')

  const compiler = webpack(webpackConfig)
  const devMiddleware = webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output!.publicPath || '',
    quiet: true,
    stats: {
      assets: false,
      colors: true,
      version: false,
      hash: false,
      timings: false,
      chunks: false,
      chunkModules: false,
    },
    serverSideRender: true,
  })
  const hotMiddleware = webpackHotMiddleware(compiler, {
    log: console.log,
  })

  app.use(devMiddleware)
  app.use(hotMiddleware)

  return app
}
