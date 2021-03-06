var path = require('path');
var webpack = require('webpack');

var config = require('./webpack.config');

config.plugins = config.plugins.concat([
  // new webpack.optimize.DedupePlugin(), // https://github.com/webpack/webpack/issues/1082
  new webpack.optimize.UglifyJsPlugin(),
  new webpack.ProvidePlugin({
    'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
  })
]);

module.exports = config;
