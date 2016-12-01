var balm = require('balm');

balm.config = {
  roots: {
    source: 'src'
  },
  paths: {
    source: {
      js: ''
    }
  },
  styles: {
    ext: 'scss'
  },
  scripts: {
    entry: {
      main: './src/main.js'
    },
    loaders: [{
      test: /\.vue$/,
      loader: 'vue'
    }]
  }
};

balm.go();
