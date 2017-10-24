// const webpack = require('webpack')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const path = require('path')

// export default {
//   context: 'src',
//   entry: {
//     prerender: './server/routes/index',
//   },
//   target: 'node',
//   output: {
//     path: path.join(__dirname, 'public'),
//     chunkFilename: '[name]_[chunkhash].js',
//     filename: '[name].js',
//     libraryTarget: 'commonjs2',
//     publicPath: '/static/',
//   },
//   resolve: {
//     extensions: ['.js', '.jsx', '.ts', '.tsx'],
//     modules: ['src', 'node_modules'],
//   },
//   plugins: [
//     new webpack.NoEmitOnErrorsPlugin(),
//     new ExtractTextPlugin('[name].css'),
//     new webpack.optimize.UglifyJsPlugin({compressor: {warnings: false}}),
//     new webpack.optimize.LimitChunkCountPlugin({maxChunks: 1}),
//     new webpack.DefinePlugin({
//       '__CLIENT__': false,
//       '__PRODUCTION__': true,
//       'process.env.NODE_ENV': JSON.stringify('production'),
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
//         test: /\.tsx?$/,
//         loader: 'babel-loader',
//         include: ['src'],
//       },
//     ],
//   },
// }
