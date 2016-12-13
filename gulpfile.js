var balm = require('balm');

balm.config = {
  roots: {
    source: 'src'
  },
  paths: {
    source: {
      js: 'templates'
    }
  },
  styles: {
    ext: 'scss'
  },
  scripts: {
    entry: {
      main: './src/templates/main.js',
      dialog: './src/templates/dialog.js'
    },
    loaders: [{
      test: /\.vue$/,
      loader: 'vue'
    }]
  }
};

balm.go();
