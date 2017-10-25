var balm = require('balm');

var useDefault = !process.argv.includes('--mdc');
var buildDocs = process.argv.includes('--docs');
var useDocs = !balm.config.production || buildDocs;

var DMC_SOURCE = {
  mdc: './node_modules/material-components-web',
  material: './node_modules/@material',
  icon: './node_modules/material-design-icons'
};
var DEV_SOURCE = {
  mdc: './src/material-components-web',
  font: './src/fonts'
};
var DMC_COMPONENTS = [
  'animation',
  'base',
  'button',
  'card',
  'checkbox',
  'dialog',
  'drawer',
  'elevation',
  'fab',
  'form-field',
  'grid-list',
  'icon-toggle',
  'layout-grid',
  'linear-progress',
  'list',
  'menu',
  'radio',
  'ripple',
  'rtl',
  'select',
  'selection-control',
  'slider',
  'snackbar',
  'switch',
  'tabs',
  'textfield',
  'theme',
  'toolbar',
  'typography'
];

balm.config = {
  roots: {
    source: useDocs ? 'docs' : 'src'
  },
  styles: {
    ext: 'scss',
    autoprefixer: ['> 1%', 'last 2 versions', 'Firefox ESR'],
    includePaths: ['node_modules']
  },
  scripts: {
    entry: useDocs ? {
      mylib: [
        'vue',
        'vue-router',
        'axios',
        'vue-i18n',
        'prismCss',
        'prismjs',
        'clipboard'
      ],
      main: './docs/scripts/main.js'
    } : {
      'balm-ui': './src/index.js'
    },
    library: 'BalmUI',
    libraryTarget: 'umd',
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
    eslint: true,
    options: {
      compress: {
        warnings: false,
        comparisons: false
      },
      output: {
        comments: false,
        ascii_only: true
      }
    }
  },
  sprites: {
    svg: ['icon']
  },
  extras: {
    excludes: ['index.js']
  },
  assets: {
    publicUrl: buildDocs ? 'http://balmjs.com/ui-vue/' : ''
  },
  useDefault: useDefault
};

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
      mix.remove([DEV_SOURCE.mdc + '/*', DEV_SOURCE.font + '/*']);
      // get Material
      mix.copy(DMC_SOURCE.mdc + '/material-components-web.scss', DEV_SOURCE.mdc);
      DMC_COMPONENTS.forEach(function(item) {
        mix.copy(DMC_SOURCE.material + '/' + item + '/**/{*.scss,*.js}', DEV_SOURCE.mdc + '/' + item);
        mix.remove(DEV_SOURCE.mdc + '/' + item + '/dist');
        mix.remove(DEV_SOURCE.mdc + '/' + item + '/node_modules');
      });
      // get Material Icons
      mix.copy(DMC_SOURCE.icon + '/iconfont/*.{css,eot,svg,ttf,woff,woff2}', DEV_SOURCE.font);
    }
  }
});
