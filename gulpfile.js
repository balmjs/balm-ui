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

var DMC_SOURCE = './node_modules/@material';
var DEV_SOURCE = './src/material-components-web';

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
      mix.remove([DEV_SOURCE]);
      // get Material
      mix.copy(DMC_SOURCE + '/base/*.js', DEV_SOURCE + '/base');
      mix.copy(DMC_SOURCE + '/ripple/*.js', DEV_SOURCE + '/ripple');
      mix.copy(DMC_SOURCE + '/dialog/*.js', DEV_SOURCE + '/dialog');
    }
  }
});
