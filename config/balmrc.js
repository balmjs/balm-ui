var balm = require('balm');
var path = require('path');
var env = require('./env');
var entry = require('./entry');

module.exports = {
  roots: {
    source: env.useDocs ? 'docs' : 'src',
    target: env.buildComponents ? 'components' : 'dist'
  },
  paths: {
    source: {
      css: env.buildComponents ? 'styles/components' : 'styles'
    },
    target: {
      css: env.buildComponents ? '.' : 'css',
      js: env.buildComponents ? '.' : 'js'
    }
  },
  styles: {
    ext: 'scss',
    autoprefixer: ['> 1%', 'last 2 versions', 'Firefox ESR'],
    includePaths: ['node_modules']
  },
  scripts: {
    entry: entry,
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
    },
    include: env.useDocs ? [
      path.resolve('./src/material-components-web'),
      path.resolve('./src/scripts')
    ] : [
      path.resolve('./src/material-components-web')
    ]
  },
  sprites: {
    svg: ['icon']
  },
  extras: {
    excludes: ['index.js']
  },
  assets: {
    publicUrl: env.buildDocs ? 'http://balmjs.com/ui-vue/' : ''
  },
  useDefault: env.useDefault
};
