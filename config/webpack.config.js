const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: 'none',
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
    extensions: ['.js', '.json', '.vue'],
    alias: {
      '@': path.resolve(__dirname, '../src/scripts')
    }
  },
  plugins: [new VueLoaderPlugin()]
};
