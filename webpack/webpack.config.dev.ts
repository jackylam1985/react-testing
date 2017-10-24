const path = require('path')
const webpack = require('webpack')
const isProd = process.env.NODE_ENV === 'production'
const _include = require('lodash/includes')
const root = process.cwd()
const src = path.join(root, 'src')

module.exports = {
  context: src,
  devtool: '#cheap-module-source-map',
  entry: {
    main: [
      'webpack-hot-middleware/client?noInfo=false',
      './client/index',
    ],
  },
  output: {
    filename: '[name].js',
    path: path.join(root, 'build'),
    chunkFilename: '[name]_[chunkhash].js',
    publicPath: '/static/',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      { test: /\.tsx?$/, use: [{ loader: 'ts-loader' }] },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js',
      minChunks (module: any) {
        const context = module.context
        return context && _include(context, path.join(__dirname, 'node_modules'))
      },
    }),
    new webpack.DefinePlugin({
      '__CLIENT__': true,
      '__PRODUCTION__': false,
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  ],
}
