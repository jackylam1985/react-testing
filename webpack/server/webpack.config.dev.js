const base = require('../webpack.config.base')
const merge = require('webpack-merge')
const path = require('path')
const nodeExternals = require('webpack-node-externals')

const config = merge(base, {
  name: 'ssr',
  context: path.join(__dirname, '..', '..', 'src', 'server'),
  entry: './index.js',
  output: {
    filename: 'server-bundle.js',
    libraryTarget: 'commonjs2',
  },
  target: 'node',
})

module.exports = config
