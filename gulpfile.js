var balm = require('balm');

balm.config = {
  roots: {
    source: 'src'
  },
  paths: {

  },
  styles: {

  },
  scripts: {
    entry: {
      main: './src/js/index.js'
    },
    loaders: [{
      test: /\.vue$/,
      loader: 'vue'
    }],
    alias: {
      vue: 'vue/dist/vue.js'
    }
  }
};

balm.go();
