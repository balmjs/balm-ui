export default {
  alias: {
    vue: 'vue/dist/vue.esm-bundler.js',
    'balm-ui-plus': 'balm-ui/dist/balm-ui-plus.esm.js',
    'balm-ui-css': 'balm-ui/dist/balm-ui.css'
  },
  optimizeDeps: {
    include: ['balm-ui/dist/balm-ui-plus.esm.js']
  }
};
