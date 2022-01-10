const path = require('path');
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const { ModuleFederationPlugin } = require('webpack').container;

// Documentation - https://balm.js.org/docs/config/
// 中文文档 - https://balm.js.org/docs/zh/config/
module.exports = {
  server: {
    // proxyConfig: {
    //   context: '/api',
    //   options: {
    //     target: 'http://your.project.dev', // Target host
    //     changeOrigin: true // Needed for virtual hosted sites
    //   }
    // }
  },
  roots: {
    source: 'app'
  },
  styles: {
    extname: 'scss',
    dartSass: true
  },
  scripts: {
    entry: {
      main: './app/scripts/index.js' // Entry js file
    },
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ],
    plugins: [
      new VueLoaderPlugin(),
      // feature flags <http://link.vuejs.org/feature-flags>
      new webpack.DefinePlugin({
        __VUE_OPTIONS_API__: 'true',
        __VUE_PROD_DEVTOOLS__: 'false'
      }),
      new ModuleFederationPlugin({
        name: 'test',
        remotes: {
          RemoteBalmUI:
            'RemoteBalmUI@https://next-material.balmjs.com/remote-balm-ui.js'
        },
        shared: ['vue']
      })
    ],
    alias: Object.assign(
      {
        '@': path.resolve(__dirname, '..', 'app', 'scripts'),
        vue$: 'vue/dist/vue.esm-bundler.js'
      }
      // fix(vue@3.0.1+): __VUE_HMR_RUNTIME__ is not defined in development
      // {
      //   '@vue/runtime-core':
      //     '@vue/runtime-core/dist/runtime-core.esm-bundler.js'
      // }
    )
  },
  assets: {
    root: 'assets', // Replace 'assets' to your remote project root
    mainDir: 'public',
    cache: true
  }
  // More Config
};
