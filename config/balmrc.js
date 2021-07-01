const pkg = require('../package.json');
const env = require('./env');
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

const workspace = path.join(__dirname, '..');

function resolve(dir) {
  return path.join(workspace, dir);
}

function getConfig(balm) {
  const useDocsProd = balm.config.env.isProd && env.buildDocs;
  const useDocsDev = !balm.config.env.isProd || env.buildDocs;
  const useBuild = balm.config.env.isProd && !env.buildDocs;

  let envOptions = useDocsProd
    ? {
        modules: false,
        useBuiltIns: 'entry',
        corejs: { version: '3.15', proposals: true }
      }
    : {
        modules: false
      };
  let runtimeOptions = useDocsProd ? { corejs: 3 } : {};

  let babelLoaderOptions =
    useDocsProd || useDocsDev
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
      extname: 'scss',
      dartSass: true
    },
    scripts: {
      entry: useDocsDev
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
      library: useDocsDev ? '' : 'BalmUI',
      libraryTarget: useDocsDev ? 'var' : 'umd',
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
      alias: {
        '@': resolve('docs/scripts'),
        'balm-ui': resolve('src/scripts'),
        vue$: 'vue/dist/vue.esm.js',
        pickerLangZh: 'flatpickr/dist/l10n/zh.js'
      },
      plugins: [new VueLoaderPlugin()],
      eslint: true,
      webpackOptions: useBuild
        ? {
            output: {
              umdNamedDefine: true,
              // See https://github.com/webpack/webpack/issues/6522
              globalObject: "typeof self !== 'undefined' ? self : this"
            }
          }
        : {},
      externals: useBuild
        ? {
            vue: {
              root: 'Vue',
              commonjs: 'vue',
              commonjs2: 'vue',
              amd: 'vue'
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
