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
  const useDocs = useDocsProd || useDocsDev;
  const useBuild = balm.config.env.isProd && !env.buildDocs;

  let envOptions = useDocsProd
    ? {
        modules: false,
        useBuiltIns: 'entry',
        corejs: { version: '3.20', proposals: true }
      }
    : {
        modules: false
      };
  let runtimeOptions = useDocsProd ? { corejs: 3 } : {};

  let babelLoaderOptions = useDocs
    ? {
        presets: [['@babel/preset-env', envOptions]],
        plugins: [
          ['@babel/plugin-transform-runtime', runtimeOptions],
          [
            'prismjs',
            {
              languages: [
                'markup',
                'css',
                'javascript',
                'bash',
                'scss',
                'typescript'
              ],
              plugins: ['highlight-keywords', 'toolbar', 'copy-to-clipboard']
            }
          ]
        ]
      }
    : {};

  return {
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
            'balm-ui': './src/scripts/index.js'
          },
      library: useDocsDev
        ? ''
        : {
            name: 'BalmUI',
            type: 'umd',
            umdNamedDefine: true
          },
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
      urlLoaderOptions: {
        esModule: false
      },
      babelLoaderOptions,
      includeJsResource: useDocsDev ? [resolve('src/scripts')] : [],
      alias: Object.assign(
        {
          '@': resolve('docs/scripts'),
          'balm-ui': resolve('src/scripts'),
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
