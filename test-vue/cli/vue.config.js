module.exports = {
  runtimeCompiler: true,
  transpileDependencies: ['node_modules/balm-ui/src/scripts'],
  // NOTE: set alias via `configureWebpack` or `chainWebpack`
  configureWebpack: {
    resolve: {
      alias: {
        'balm-ui-plus': 'balm-ui/dist/balm-ui-plus.js',
        'balm-ui-css': 'balm-ui/dist/balm-ui.css',
        'balm-ui-source': 'balm-ui/src/scripts/balm-ui.js',
        'balm-ui-plus-source': 'balm-ui/src/scripts/balm-ui-plus.js'
      }
    }
  }
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set('balm-ui-plus', 'balm-ui/dist/balm-ui-plus.js')
  //     .set('balm-ui-css', 'balm-ui/dist/balm-ui.css')
  //     .set('balm-ui-source', 'balm-ui/src/scripts/balm-ui.js')
  //     .set('balm-ui-plus-source', 'balm-ui/src/scripts/balm-ui-plus.js');
  // }
};
