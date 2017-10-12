import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { Provider } from 'react-redux'
import { store } from './client/redux/store'
// import Layout from '../client/components/layouts'
// import Routes from '../client/components/Router/CompiledRoutes'
import fs from 'fs'
import _template from 'lodash/template'
import express from 'express'

const baseTemplate = fs.readFileSync('./src/index.template.html')
const template = _template(baseTemplate)


// import webpack from 'webpack'
// import webpackConfig from '../webpack/client/webpack.config.dev'

const app = express()

// const compiler = webpack(webpackConfig)
// app.use(require('webpack-dev-middleware')(compiler, {
//   noInfo: true,
//   publicPath: webpackConfig.output.publicPath,
// }))

/**
 * Handles server requests, and serves per-rendered context-aware
 * React markup based on the url
 */
app.get('*', (req, res) => {
  const context = {}
  const body = renderToString(
    React.createElement(
      Provider,
      { store },
      React.createElement(
        StaticRouter,
        { location: req.url, context: context },
        // React.createElement(Layout, null, React.createElement(Routes))
      )
    )
  )

  if (context.url) {
    res.redirect(context.url)
  } else {
    res.status(200).send(template({ body }))
  }
})

const port = process.env.PORT || 3000
app.listen(port)

console.log('node environment:', process.env.NODE_ENV)
console.log(`Listening on port ${port}`)
