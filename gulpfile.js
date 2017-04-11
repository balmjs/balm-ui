var balm = require('balm');
var path = require('path');
var PrerenderSpaPlugin = require('prerender-spa-plugin');

var useDefault = !(process.argv[2] === '--mdl');
var buildDocs = process.argv[3] === '--docs';

balm.config = {
  roots: {
    source: balm.config.production ? 'src' : 'docs'
  },
  styles: {
    ext: 'scss',
    autoprefixer: ['> 1%', 'last 3 versions', 'not ie <= 8']
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
    plugins: [
      new PrerenderSpaPlugin(
        // (REQUIRED) Absolute path to static root
        path.join(__dirname, 'dist'),
        // (REQUIRED) List of routes to prerender
        [
          '/',
          '/layout',
          '/grid',
          '/tabs',
          '/badge',
          '/button',
          '/card',
          '/chip',
          '/loading',
          '/menu',
          '/tooltip',
          '/divider',
          '/slider',
          '/checkbox',
          '/radio',
          '/icon-toggle',
          '/switch',
          '/textfield',
          '/select',
          '/autocomplete',
          '/datepicker',
          '/list',
          '/table',
          '/pagination',
          '/dialog',
          '/alert',
          '/confirm',
          '/snackbar'
        ]
      )
    ],
    eslint: true
  },
  useDefault: useDefault
};

if (buildDocs) {
  balm.config.roots.source = 'docs';
  balm.config.scripts.entry.main = './docs/scripts/main.js';
  balm.config.assets.subDir = 'ui-vue';
}

var DMI_SOURCE = './node_modules/material-design-icons';
var DML_SOURCE = './node_modules/material-design-lite';
var DEV_SOURCE = {
  static: './src/material-design-lite',
  img: './src/images',
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
      mix.remove([DEV_SOURCE.static + '/*', DEV_SOURCE.img + '/*', DEV_SOURCE.font + '/*']);
      // get material design lite
      mix.copy(DML_SOURCE + '/src/{_*scss,material-design-lite.scss,mdlComponentHandler.js}', DEV_SOURCE.static);
      mix.copy(DML_SOURCE + '/src/**/{_*.scss,*.js}', DEV_SOURCE.static);
      // get material design lite images
      mix.copy(DML_SOURCE + '/src/images/*.svg', DEV_SOURCE.img);
      // get material design icons
      mix.copy(DMI_SOURCE + '/iconfont/*.{css,eot,svg,ttf,woff,woff2}', DEV_SOURCE.font);
    }
  }
});
