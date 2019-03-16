const path = require('path');
const env = require('./env');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  roots: {
    source: env.useDocs ? 'docs' : 'src'
  },
  styles: {
    ext: 'scss',
    autoprefixer: ['> 0.5%', 'last 2 versions', 'Firefox ESR', 'not dead']
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
      vue$: 'vue/dist/vue.esm.js'
    },
    eslint: true,
    options: {
      compress: {
        drop_console: false
      }
    },
    include: env.useDocs
      ? [
          path.resolve('./src/material-components-web'),
          path.resolve('./src/scripts')
        ]
      : [path.resolve('./src/material-components-web')]
  },
  extras: {
    excludes: ['index.js'],
    includes: ['CNAME', 'material-icons.zip']
  },
  assets: {
    publicUrl: env.buildDocs ? '//material.balmjs.com/' : ''
  },
  cache: env.buildDocs,
  useDefault: env.useDefault
};
