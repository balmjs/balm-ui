const pkg = require('../package.json');
const env = require('./env');
const path = require('path');
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
          loader: 'html-loader!markdown-loader'
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
        pickerLangZh: 'flatpickr/dist/l10n/zh.js',
        vue$: 'vue/dist/vue.esm-bundler.js',
        'balm-ui': path.join(workspace, 'src/scripts'),
        'balm-ui-editor': path.join(
          workspace,
          'src/scripts/components/input-controls/editor.vue'
        )
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
            vue: 'Vue'
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
      version: `v${pkg.version.replace(/\./g, '')}-1`
    },
    useDefaults: env.useDefaults,
    logs: {
      level: 2
    }
  };
}

module.exports = getConfig;
