// const webpack = require('webpack')
// const AssetsPlugin = require('assets-webpack-plugin')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const path = require('path')

// export default {
//   context: 'src',
//   entry: {
//     app: [
//       'babel-polyfill/dist/polyfill.js',
//       './client/client.js',
//     ],
//     vendor: [
//       'react',
//       'react-dom',
//       'react-router',
//       'react-redux',
//       'redux',
//     ],
//   },
//   output: {
//     filename: '[name]_[chunkhash].js',
//     chunkFilename: '[name]_[chunkhash].js',
//     path: path.join(__dirname, 'public'),
//     publicPath: '/static/',
//   },
//   resolve: {
//     extensions: ['.js'],
//     modules: ['src', 'node_modules'],
//     unsafeCache: true,
//   },
//   node: {
//     dns: 'mock',
//     net: 'mock',
//   },
//   plugins: [
//     new webpack.NamedModulesPlugin(),
//     new ExtractTextPlugin('[name].css'),
//     new webpack.NormalModuleReplacementPlugin(/\.\.\/routes\/static/, '../routes/async'),
//     new webpack.optimize.CommonsChunkPlugin({
//       names: ['vendor', 'manifest'],
//       minChunks: Infinity,
//     }),
//     new webpack.optimize.AggressiveMergingPlugin(),
//     /* minChunkSize should be 50000 for production apps
//     * 10 is for this example */
//     new webpack.optimize.MinChunkSizePlugin({minChunkSize: 10}),
//     new webpack.optimize.UglifyJsPlugin({compressor: {warnings: false}, comments: /(?:)/}),
//     new AssetsPlugin({path: 'public', filename: 'assets.json'}),
//     new webpack.NoEmitOnErrorsPlugin(),
//     new webpack.DefinePlugin({
//       '__CLIENT__': true,
//       '__PRODUCTION__': true,
//       'process.env.NODE_ENV': JSON.stringify('production')
//     }),
//   ],
//   module: {
//     loaders: [
//       {test: /\.(png|j|jpeg|gif|svg|woff|woff2)$/,
//         use: {
//           loader: 'url-loader',
//           options: {
//             limit: 10000,
//           },
//         },
//       },
//       {
//         test: /\.tsx$/,
//         loader: 'babel-loader',
//         include: 'src',
//       },
//     ],
//   },
// }
