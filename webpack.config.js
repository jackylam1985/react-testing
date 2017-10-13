const path = require('path')
const webpack = require('webpack')
const isProd = process.env.NODE_ENV === 'production'

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
    libraryTarget: 'commonjs',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        include: /src/,
        exclude: /node_modules/,
      },
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
      minChunks(module) {
        const context = module.context;
        return context && context.indexOf('node_modules') >= 0;
      },
    }),
  ],
}
