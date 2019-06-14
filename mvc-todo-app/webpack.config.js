const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const workboxPlugin = require('workbox-webpack-plugin');
const path = require('path');

// /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// * Workbox
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
// const workPlugin = new workboxPlugin.GenerateSW({
//   swDest: 'service-worker.js',
//   clientsClaim: true,
//   skipWaiting: true,
// })

module.exports = (env, { mode }) => ({
  entry: './src/client',

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },

  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Relay • TodoMVC penis',
      template: './public/index.html',
    }),
    new CopyWebpackPlugin(['src/assets']),

    new workboxPlugin.GenerateSW({
      swDest: 'service-worker.js',
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
  devtool: mode === 'production' ? 'source-map' : 'cheap-module-source-map',
});
