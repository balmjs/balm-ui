const path = require('path');
const env = require('./env');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  server: {
    open: false
  },
  roots: {
    source: env.useDocs ? 'docs' : 'src'
  },
  styles: {
    ext: 'scss'
  },
  scripts: {
    entry: env.useDocs
      ? {
          mylib: [
            'vue',
            'vue-router',
            'vue-meta',
            'axios',
            'prismjs',
            'clipboard'
          ],
          app: './docs/scripts/main.js'
        }
      : {
          'balm-ui': './src/scripts/index.js',
          'balm-ui-plus': './src/scripts/plus.js',
          'balm-ui-migrate': './src/scripts/migrate.js'
        },
    library: 'BalmUI',
    libraryTarget: 'umd',
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
    plugins: [new VueLoaderPlugin()],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, '../docs/scripts')
    },
    eslint: true,
    options: {
      compress: {
        drop_console: false
      }
    },
    include: env.useDocs
      ? [
          path.resolve(__dirname, '../src/material-components-web'),
          path.resolve(__dirname, '../src/scripts')
        ]
      : [path.resolve(__dirname, '../src/material-components-web')]
  },
  extras: {
    excludes: ['index.js'],
    includes: ['CNAME', 'material-icons.zip']
  },
  assets: {
    publicUrl: env.buildDocs ? '//material.balmjs.com/' : '',
    excludes: ['dist/img/icons/icon-*.png']
  },
  cache: env.buildDocs,
  pwa: {
    enabled: env.buildDocs,
    mode: 'injectManifest'
  },
  useDefault: env.useDefault
};
