var balm = require('balm');

var useDefault = !(process.argv[2] === '--mdc');
var buildDocs = process.argv[3] === '--docs';

var DMC_SOURCE = {
  material: './node_modules/@material',
  icon: './node_modules/material-design-icons'
};
var DEV_SOURCE = {
  material: './src/scripts/material-components-web',
  font: './src/fonts'
};
var DMC_COMPONENTS = [
  'base',
  'ripple',
  'dialog',
  'menu',
  'select',
  'textfield',
  'animation',
  'checkbox',
  'radio',
  'icon-toggle',
  'snackbar',
  'toolbar',
  'drawer',
  'tabs',
  'form-field',
  'linear-progress'
];

balm.config = {
  roots: {
    source: balm.config.production ? 'src' : 'docs'
  },
  styles: {
    ext: 'scss',
    autoprefixer: ['> 1%', 'last 2 versions', 'Firefox ESR'],
    includePaths: ['node_modules']
  },
  scripts: {
    entry: {
      mylib: ['vue', 'vue-router', 'axios', 'vue-i18n', 'prismCss', 'prismjs', 'clipboard'],
      main: balm.config.production ? './src/index' : './docs/scripts/main'
    },
    loaders: [{
      test: /\.vue$/,
      loader: 'vue',
      options: {
        esModule: false // For `const MyComponent = () => import('./components/my-component');`
      }
    }, {
      test: /\.md$/,
      loader: 'html!markdown'
    }],
    alias: {
      'vue$': balm.config.production ? 'vue/dist/vue.min.js' : 'vue/dist/vue.esm.js',
      'prismCss': 'prismjs/themes/prism-okaidia.css'
    },
    eslint: true
  },
  sprites: {
    svg: ['icon']
  },
  useDefault: useDefault
};

if (buildDocs) {
  balm.config.roots.source = 'docs';
  balm.config.scripts.entry.main = './docs/scripts/main.js';
  balm.config.assets.publicUrl = 'http://balmjs.com/ui-vue/';
}

balm.go(function(mix) {
  if (buildDocs) {
    mix.copy('./docs/data/*', './dist/data');
  } else {
    if (useDefault) {
      if (balm.config.production) {
        mix.remove('./dist/font/*.css');
      }
    } else {
      // clear
      mix.remove([DEV_SOURCE.material + '/*', DEV_SOURCE.font + '/*']);
      // get Material
      DMC_COMPONENTS.forEach(function(item) {
        mix.copy(DMC_SOURCE.material + '/' + item + '/**/*.js', DEV_SOURCE.material + '/' + item);
        mix.remove(DEV_SOURCE.material + '/' + item + '/dist');
      });
      // get Material Icons
      mix.copy(DMC_SOURCE.icon + '/iconfont/*.{css,eot,svg,ttf,woff,woff2}', DEV_SOURCE.font);
    }
  }
});
