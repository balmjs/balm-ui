module.exports = {
  runtimeCompiler: true,
  // NOTE: set alias via `configureWebpack` or `chainWebpack`
  configureWebpack: {
    resolve: {
      alias: {
        'balm-ui-core': 'balm-ui/dist/balm-ui.js',
        'balm-ui-plus': 'balm-ui/dist/balm-ui-plus.js',
        'balm-ui-css': 'balm-ui/dist/balm-ui.css'
      }
    }
  }
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set('balm-ui-core', 'balm-ui/dist/balm-ui.js')
  //     .set('balm-ui-plus', 'balm-ui/dist/balm-ui-plus.js')
  //     .set('balm-ui-css', 'balm-ui/dist/balm-ui.css');
  // }
};
