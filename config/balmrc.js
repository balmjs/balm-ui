const path = require('path');
const env = require('./env');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  roots: {
    source: env.useDocs ? 'docs' : 'src'
  },
  styles: {
    extname: 'scss'
  },
  scripts: {
    entry: env.useDocs
      ? {
          mylib: [
            'deepmerge',
            'focus-trap',
            'prismjs',
            'src/material-components-web'
          ],
          myui: ['vue', 'vue-router', 'balm-ui-lite', 'src/scripts'],
          app: './docs/scripts/main.js'
        }
      : {
          'balm-ui': './src/scripts/index.js',
          'balm-ui-plus': './src/scripts/plus.js',
          'balm-ui-next': './src/scripts/next.js'
        },
    library: env.useDocs ? '' : 'BalmUI',
    libraryTarget: env.useDocs ? 'var' : 'umd',
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.md$/,
        loader: 'html-loader!markdown-loader'
      }
    ],
    urlLoaderOptions: {
      esModule: false
    },
    includeJsResource: env.useDocs
      ? [
          path.resolve(__dirname, '../src/material-components-web'),
          path.resolve(__dirname, '../src/scripts')
        ]
      : [path.resolve(__dirname, '../src/material-components-web')],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      flatpickrLangZh: 'flatpickr/dist/l10n/zh.js',
      '@': path.resolve(__dirname, '../docs/scripts')
    },
    plugins: [new VueLoaderPlugin()],
    eslint: true,
    options: {
      compress: {
        drop_console: false
      }
    }
  },
  extras: {
    excludes: ['index.js', 'service-worker.js'],
    includes: ['CNAME', 'material-icons.zip']
  },
  assets: {
    publicUrl: env.buildDocs ? '//material.balmjs.com/' : '',
    cache: env.buildDocs,
    excludes: ['dist/img/icons/icon-*.png']
  },
  pwa: {
    enabled: env.buildDocs,
    mode: 'injectManifest'
  },
  useDefaults: env.useDefault,
  logs: {
    level: 2
  }
};
