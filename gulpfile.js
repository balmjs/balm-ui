var balm = require('balm');
var gulp = require('gulp');

var useDefault = !(process.argv[2] === '--mdl');

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
  },
  useDefault: useDefault
};

var DMI_SOURCE = './node_modules/material-design-icons';
var DML_SOURCE = './node_modules/material-design-lite';
var DEV_SOURCE = {
  static: './src/material-design-lite',
  img: './src/images',
  font: './src/fonts'
};

balm.go(function(mix) {
  if (useDefault) {
    if (balm.config.production) {
      mix.remove('./dist/index.html');
    }
  } else {
    // clear
    mix.remove([DEV_SOURCE.static + '/*', DEV_SOURCE.img + '/*', DEV_SOURCE.font + '/*']);
    // get material design lite
    mix.copy(DML_SOURCE + '/src/{_*scss,material-design-lite.scss,mdlComponentHandler.js}', DEV_SOURCE.static);
    mix.copy(DML_SOURCE + '/src/**/{_*.scss,*.js}', DEV_SOURCE.static);
    // get material design lite images
    mix.copy(DML_SOURCE + '/src/images/*.svg', DEV_SOURCE.img);
    // get material design icons
    mix.copy(DMI_SOURCE + '/iconfont/*.{css,eot,svg,ttf,woff,woff2}', DEV_SOURCE.font);
  }
});
