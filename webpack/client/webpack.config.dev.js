const base = require('../webpack.config.base')
const merge = require('webpack-merge')
const path = require('path')
const nodeExternals = require('webpack-node-externals')

const config = merge(base, {
  name: 'client',
  context: path.join(__dirname, '..', '..', 'src', 'client'),
  entry: './index.js',
  output: {
    filename: 'bundle.js',
  },
  target: 'node',
  externals: nodeExternals(),
})

module.exports = config
