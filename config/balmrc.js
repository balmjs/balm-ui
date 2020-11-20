const pkg = require('../package.json');
const env = require('./env');
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

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
      urlLoaderOptions: {
        esModule: false
      },
      includeJsResource: useDocs ? [path.join(workspace, 'src/scripts')] : [],
      alias: {
        '@': path.join(workspace, 'docs/scripts'),
        'balm-ui': path.join(workspace, 'src/scripts'),
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
      // options: {
      //   compress: {
      //     drop_console: false
      //   }
      // }
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
