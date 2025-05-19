const pkg = require('../../package.json');
const env = require('../env');
const path = require('path');
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const { ModuleFederationPlugin } = require('webpack').container;
const exposes = require('../build/exposes');

const workspace = path.join(__dirname, '..', '..');

function resolve(dir) {
  return path.join(workspace, dir);
}

function getConfig(balm) {
  const useDocsProd = balm.config.env.isProd && env.buildDocs;
  const useDocsDev = !balm.config.env.isProd || env.buildDocs;
  const useBuild = balm.config.env.isProd && !env.buildDocs;

  return {
    server: {
      historyOptions: true
    },
    roots: {
      source: useDocsDev ? 'docs' : 'src'
    },
    paths: {
      target: {
        font: useDocsDev ? 'font' : 'fonts'
      }
    },
    styles: {
      extname: 'scss'
    },
    scripts: {
      eslint: true,
      entry: useDocsDev
        ? {
            // hello: [
            //   '@babel/runtime-corejs3',
            //   'axios',
            //   'clipboard',
            //   'core-js',
            //   'core-js-pure',
            //   'prismjs',
            //   'vue',
            //   'vue-i18n',
            //   'vue-meta',
            //   'vue-router'
            // ],
            // 'balm-ui': [
            //   '@material',
            //   'deepmerge',
            //   'flatpickr',
            //   'quill',
            //   'src/material-components-web',
            //   'src/scripts'
            // ],
            app: './docs/scripts/index.js'
          }
        : {
            'balm-ui': './src/scripts/balm-ui.js'
          },
      library: useDocsDev
        ? ''
        : {
            name: 'BalmUI',
            type: 'umd',
            umdNamedDefine: true
          },
      loaders: [
        // NOTE: https://github.com/webpack/webpack/issues/11467#issuecomment-691873586
        {
          test: /\.m?js/,
          resolve: {
            fullySpecified: false
          }
        },
        {
          test: /\.md$/,
          use: ['html-loader', 'markdown-loader']
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        }
      ],
      includeJsResource: useDocsDev ? [resolve('src/scripts')] : [],
      alias: Object.assign({
        '@': resolve('docs/scripts'),
        'balm-ui': resolve('src/scripts/balm-ui.js'),
        'balm-ui-plus': resolve('src/scripts/balm-ui-plus.js'),
        vue$: 'vue/dist/vue.esm-bundler.js',
        pickerLangZh: 'flatpickr/dist/l10n/zh.js'
      }),
      plugins: [
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
          __VUE_OPTIONS_API__: JSON.stringify(true),
          __VUE_PROD_DEVTOOLS__: JSON.stringify(false),
          __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(false),
          __VUE_I18N_FULL_INSTALL__: JSON.stringify(true),
          __VUE_I18N_LEGACY_API__: JSON.stringify(false),
          __INTLIFY_PROD_DEVTOOLS__: JSON.stringify(false)
        }),
        ...(useDocsProd
          ? [
              new ModuleFederationPlugin({
                name: 'RemoteBalmUI',
                filename: 'remote-balm-ui.js',
                exposes,
                shared: ['vue']
              })
            ]
          : [])
      ],
      injectHtml: !useBuild,
      htmlPluginOptions: {
        template: env.buildDocs
          ? './docs/templates/prod.html'
          : './docs/templates/dev.html'
      },
      externals: useBuild
        ? {
            vue: {
              root: 'Vue',
              commonjs: 'vue',
              commonjs2: 'vue',
              amd: 'vue'
            },
            flatpickr: 'flatpickr',
            quill: {
              root: 'Quill',
              commonjs: 'quill',
              commonjs2: 'quill',
              amd: 'quill'
            }
          }
        : {},
      webpackOptions: useBuild
        ? {
            output: {
              // See https://github.com/webpack/webpack/issues/6522
              globalObject: "typeof self !== 'undefined' ? self : this"
            }
          }
        : {}
    },
    extras: {
      excludes: ['index.js', 'service-worker.js'],
      includes: ['CNAME', 'material-icons.zip']
    },
    assets: {
      cache: env.buildDocs,
      excludes: ['dist/img/icons/icon-*.png', 'dist/img/zmto-logo.svg']
    },
    pwa: {
      enabled: env.buildDocs,
      mode: 'injectManifest',
      options: {
        globIgnores: ['404.html']
      },
      version: `v${pkg.version.replace(/\./g, '')}`
    },
    useDefaults: env.useDefaults,
    logs: {
      level: 2
    }
  };
}

module.exports = getConfig;
