const path = require('path');
const nodeExternals = require('webpack-node-externals');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: 'none',
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
  // devtool: 'inline-cheap-module-source-map', // Use inline source map so that it works with mocha-webpack
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.wasm', '.mjs', '.js', '.json', '.vue'],
    alias: {
      '@': path.resolve(__dirname, '..', 'src', 'scripts')
    }
  },
  plugins: [new VueLoaderPlugin()]
};
