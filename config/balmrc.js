const path = require('path');
const env = require('./env');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const { version } = require('../package.json');

module.exports = {
  roots: {
    source: env.useDocs ? 'docs' : 'src'
  },
  paths: {
    target: {
      font: env.useDocs ? 'font' : 'fonts'
    }
  },
  styles: {
    extname: 'scss',
    dartSass: true
  },
  scripts: {
    entry: env.useDocs
      ? {
          hello: [
            'axios',
            'clipboard',
            'deepmerge',
            'flatpickr',
            'prismjs',
            'vue',
            'vue-i18n',
            'vue-meta',
            'vue-router'
          ],
          balm: ['src/material-components-web'],
          ui: [
            '@babel/runtime-corejs3',
            '@material',
            'core-js',
            'core-js-pure',
            'src/scripts'
          ],
          app: './docs/scripts/index.js'
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
      pickerLangZh: 'flatpickr/dist/l10n/zh.js',
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
  images: {
    defaultPlugins: {
      jpeg: false,
      png: false
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
    mode: 'injectManifest',
    version: `v${version.replace(/\./g, '')}`
  },
  useDefaults: env.useDefault,
  logs: {
    level: 2
  }
};
