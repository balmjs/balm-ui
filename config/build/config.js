const input = {
  components: './src/scripts/components',
  plugins: './src/scripts/plugins',
  directives: './src/scripts/directives',
  utils: './src/scripts/utils',
  sass: './src/styles'
};

const components = [
  // MDC
  'badge', // Custom
  'banner',
  'button',
  'card',
  'checkbox',
  'chips',
  'dialog',
  'divider', // Custom
  'drawer',
  'fab',
  'file', // Custom
  'form', // Custom
  'form-field',
  'grid',
  'icon',
  'icon-button',
  'image-list',
  'list',
  'menu',
  'pagination', // Custom
  'progress',
  'radio',
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
  'alert',
  'autocomplete',
  'collapse',
  'datepicker',
  'editor',
  'rangepicker',
  'skeleton',
  'tree',
  // Next
  'bottom-navigation',
  'bottom-sheet'
];
const plugins = [
  // MDC
  'event',
  'grid',
  'store',
  'theme',
  'typography',
  'validator',
  // Plus
  'alert',
  'confirm',
  'toast',
  // Next
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
  // Plus
  'anchor',
  'copy',
  'debounce',
  'longpress'
];
const utils = ['ie', 'types', 'helpers'];

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
