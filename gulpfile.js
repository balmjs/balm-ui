var balm = require('balm');

var useDefault = !(process.argv[2] === '--mdc');
var buildDocs = process.argv[3] === '--docs';

balm.config = {
  roots: {
    source: balm.config.production ? 'src' : 'docs'
  },
  styles: {
    ext: 'scss',
    autoprefixer: ['> 1%', 'last 3 versions', 'not ie <= 8'],
    includePaths: ['node_modules']
  },
  scripts: {
    entry: {
      main: balm.config.production ? './src/index' : './docs/scripts/main'
    },
    loaders: [{
      test: /\.vue$/,
      loader: 'vue'
    }, {
      test: /\.md$/,
      loader: 'html!markdown'
    }],
    alias: {
      vue: balm.config.production ? 'vue/dist/vue.min.js' : 'vue/dist/vue.js',
      prismCss: 'prismjs/themes/prism-okaidia.css',
      flatpickrCss: 'flatpickr/dist/flatpickr.min.css',
      flatpickrLangZh: 'flatpickr/dist/l10n/zh.js'
    },
    eslint: true
  },
  useDefault: useDefault
};

if (buildDocs) {
  balm.config.roots.source = 'docs';
  balm.config.scripts.entry.main = './docs/scripts/main.js';
  balm.config.assets.subDir = 'ui-vue';
}

var DMC_SOURCE = {
  material: './node_modules/@material',
  icon: './node_modules/material-design-icons'
};
var DEV_SOURCE = {
  material: './src/material-components-web',
  font: './src/fonts'
};

balm.go(function(mix) {
  if (buildDocs) {
    mix.copy('./docs/data/*', './dist/ui-vue/data');
  } else {
    if (useDefault) {
      if (balm.config.production) {
        mix.remove('./dist/font/*.css');
      }
    } else {
      // clear
      mix.remove([DEV_SOURCE.material, DEV_SOURCE.font]);
      // get Material
      mix.copy(DMC_SOURCE.material + '/base/*.js', DEV_SOURCE.material + '/base');
      mix.copy(DMC_SOURCE.material + '/ripple/*.js', DEV_SOURCE.material + '/ripple');
      mix.copy(DMC_SOURCE.material + '/dialog/*.js', DEV_SOURCE.material+ '/dialog');
      // get Material Icons
      mix.copy(DMC_SOURCE.icon + '/iconfont/*.{css,eot,svg,ttf,woff,woff2}', DEV_SOURCE.font);
    }
  }
});
