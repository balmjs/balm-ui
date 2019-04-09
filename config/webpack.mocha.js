const nodeExternals = require('webpack-node-externals');
const webpackConfig = require('./webpack.config');

module.exports = Object.assign({}, webpackConfig, {
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
  devtool: 'eval'
});
