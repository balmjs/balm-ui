module.exports = {
  runtimeCompiler: true,
  // NOTE: set alias via `configureWebpack` or `chainWebpack`
  configureWebpack: {
    resolve: {
      alias: {
        'balm-ui-plus': 'balm-ui/dist/balm-ui-plus.js',
        'balm-ui-css': 'balm-ui/dist/balm-ui.css',
        'balm-ui-source': 'balm-ui/src/scripts',
        'balm-ui-plus-source': 'balm-ui/src/scripts/plus.js',
        'balm-ui-next-source': 'balm-ui/src/scripts/next.js'
      }
    }
  },
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set('balm-ui-plus', 'balm-ui/dist/balm-ui-plus.js')
  //     .set('balm-ui-css', 'balm-ui/dist/balm-ui.css')
  //     .set('balm-ui-source', 'balm-ui/src/scripts')
  //     .set('balm-ui-plus-source', 'balm-ui/src/scripts/plus.js')
  //     .set('balm-ui-next-source', 'balm-ui/src/scripts/next.js');
  // }
};
