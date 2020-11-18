const path = require('path');

const workspace = path.resolve(__dirname, '..');

module.exports = Object.assign(
  {
    '@': path.resolve(workspace, 'docs/scripts'),
    'balm-ui': path.resolve(workspace, 'src/scripts'),
    vue$: require.resolve('vue/dist/vue.esm-bundler.js'),
    pickerLangZh: require.resolve('flatpickr/dist/l10n/zh.js')
  },
  // fix(vue@3.0.1+): __VUE_HMR_RUNTIME__ is not defined in development
  {
    '@vue/runtime-core': require.resolve(
      '@vue/runtime-core/dist/runtime-core.esm-bundler.js'
    )
  }
);
