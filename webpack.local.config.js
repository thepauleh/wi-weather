var path = require('path');
var webpack = require('webpack');

var config = require('./webpack.config');

config.devtool = 'cheap-module-eval-source-map';
config.entry.app = [
  'webpack-hot-middleware/client',
  path.join(__dirname, 'index'),
];
config.plugins = config.plugins.concat([
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
]);

module.exports = config;