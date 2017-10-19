const path = require('path')
const webpack = require('webpack')
const isProd = process.env.NODE_ENV === 'production'
const _include = require('lodash/include')

module.exports = {
  devtool: isProd
    ? false
    : '#cheap-module-source-map',
  entry: {
    // styles: path.join(__dirname, 'src', 'client', 'assets', 'scss', 'main.scss'),
    main: path.join(__dirname, 'src', 'client', `index`),
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath: '/',
    libraryTarget: 'commonjs2',
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
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js',
      minChunks (module) {
        const context = module.context
        return context && _include(context, 'node_modules')
      },
    }),
  ],
}
