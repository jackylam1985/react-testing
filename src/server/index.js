import express from 'express'
import routes from './routes'
import path from 'path'
import serveStatic from 'serve-static'

// import webpack from 'webpack'
// import webpackConfig from '../webpack/client/webpack.config.dev'

const publicPath = path.join(__dirname, '..', '..', 'public')
const app = express()

// const compiler = webpack(webpackConfig)
// app.use(require('webpack-dev-middleware')(compiler, {
//   noInfo: true,
//   publicPath: webpackConfig.output.publicPath,
// }))blicPath: webpackConfig.output.publicPath,
// }))

app.use('/static', serveStatic(publicPath))
app.use('/', routes)

const port = process.env.PORT || 3000
app.listen(port, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.log('node environment:', process.env.NODE_ENV)
    console.log(`Listening on port ${port}`)
  }
})
