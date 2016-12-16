var balm = require('balm');

balm.config = {
  roots: {
    source: 'src'
  },
  paths: {
    source: {
      css: 'styles',
      js: 'templates',
      img: 'images',
      font: 'fonts'
    }
  },
  styles: {
    ext: 'scss'
  },
  scripts: {
    entry: {
      main: balm.config.production ? './src/index.js' : './src/templates/main.js'
    },
    loaders: [{
      test: /\.vue$/,
      loader: 'vue'
    }],
    eslint: true
  }
};

balm.go(function(mix) {
  mix.remove('./dist/index.html');
});
