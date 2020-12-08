const pkg = require('../package.json');
const env = require('./env');
const path = require('path');
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');

function getConfig(balm) {
  const useDocs = !balm.config.env.isProd || env.buildDocs;
  const useBuild = balm.config.env.isProd && !env.buildDocs;
  const workspace = path.resolve(__dirname, '..');

  return {
    roots: {
      source: useDocs ? 'docs' : 'src'
    },
    paths: {
      target: {
        font: useDocs ? 'font' : 'fonts'
      }
    },
    styles: {
      extname: 'scss',
      dartSass: true
    },
    scripts: {
      eslint: true,
      entry: useDocs
        ? {
            hello: [
              '@babel/runtime-corejs3',
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
            ui: ['@material', 'core-js', 'core-js-pure', 'src/scripts'],
            app: './docs/scripts/index.js'
          }
        : {
            'balm-ui': './src/scripts/index.js'
          },
      library: useDocs ? '' : 'BalmUI',
      libraryTarget: useDocs ? 'var' : 'umd',
      loaders: [
        {
          test: /\.md$/,
          use: ['html-loader', 'markdown-loader']
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        }
      ],
      includeJsResource: useDocs ? [path.join(workspace, 'src/scripts')] : [],
      urlLoaderOptions: {
        esModule: false
      },
      alias: Object.assign(
        {
          '@': path.resolve(workspace, 'docs/scripts'),
          'balm-ui': path.resolve(workspace, 'src/scripts'),
          vue$: 'vue/dist/vue.esm-bundler.js',
          pickerLangZh: 'flatpickr/dist/l10n/zh.js'
        }
        // fix(vue@3.0.1+): __VUE_HMR_RUNTIME__ is not defined in development
        // {
        //   '@vue/runtime-core':
        //     '@vue/runtime-core/dist/runtime-core.esm-bundler.js'
        // }
      ),
      plugins: [
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
          __VUE_OPTIONS_API__: JSON.stringify(true),
          __VUE_PROD_DEVTOOLS__: JSON.stringify(false)
        })
      ],
      externals: useBuild
        ? {
            vue: {
              root: 'Vue',
              commonjs: 'vue',
              commonjs2: 'vue',
              amd: 'vue'
            }
          }
        : {},
      webpackOptions: useBuild
        ? {
            output: {
              umdNamedDefine: true,
              // See https://github.com/webpack/webpack/issues/6522
              globalObject: "typeof self !== 'undefined' ? self : this"
            }
          }
        : {}
    },
    images: {
      plugins: {
        jpeg: false,
        png: false
      }
    },
    extras: {
      excludes: ['index.js', 'service-worker.js'],
      includes: ['CNAME', 'material-icons.zip']
    },
    assets: {
      cache: env.buildDocs,
      excludes: ['dist/img/icons/icon-*.png']
    },
    pwa: {
      enabled: env.buildDocs,
      mode: 'injectManifest',
      version: `v${pkg.version.replace(/\./g, '')}`
    },
    useDefaults: env.useDefaults,
    logs: {
      level: 2
    }
  };
}

module.exports = getConfig;
