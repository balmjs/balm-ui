const webpackConfig = require('./webpack.config');

module.exports = Object.assign({}, webpackConfig, {
  devtool: 'eval-source-map'
});
