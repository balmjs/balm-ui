const input = {
  components: './src/scripts/components',
  plugins: './src/scripts/plugins',
  directives: './src/scripts/directives',
  utils: './src/scripts/utils',
  sass: './src/styles'
};

const components = [
  // MDC
  'alert',
  'autocomplete',
  'badge',
  'banner',
  'button',
  'card',
  'checkbox',
  'chips',
  'collapse',
  'datepicker',
  'dialog',
  'divider',
  'drawer',
  'fab',
  'file',
  'form',
  'form-field',
  'grid',
  'icon',
  'icon-button',
  'image-list',
  'list',
  'menu',
  'pagination',
  'progress',
  'radio',
  'rangepicker',
  'segmented-button',
  'select',
  'slider',
  'snackbar',
  'spinner',
  'switch',
  'table',
  'tabs',
  'textfield',
  'tooltip',
  'top-app-bar',
  // Plus
  'editor',
  'skeleton',
  'tree',
  'bottom-navigation',
  'bottom-sheet',
  'side-sheet'
];
const plugins = [
  // MDC
  'event',
  'grid',
  'store',
  'theme',
  'typography',
  'validator',
  'alert',
  'confirm',
  'toast',
  // Plus
  'lazyload'
];
const directives = [
  // MDC
  'a11y',
  'badge',
  'button',
  'elevation',
  'ripple',
  'shape',
  'tooltip',
  'debounce',
  // Plus
  'anchor',
  'copy',
  'longpress'
];
const utils = ['ie', 'types', 'helpers', 'ban'];

const output = {
  dist: './dist',
  components: './components',
  plugins: './plugins',
  directives: './directives',
  utils: './utils'
};

module.exports = {
  input,
  components,
  plugins,
  directives,
  utils,
  output
};
