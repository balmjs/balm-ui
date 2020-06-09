const input = {
  components: './src/scripts/components',
  plugins: './src/scripts/plugins',
  directives: './src/scripts/directives',
  utils: './src/scripts/utils',
  sass: './src/styles'
};

const components = [
  // MDC
  'button',
  'card',
  'checkbox',
  'chips',
  'circular-progress',
  'dialog',
  'drawer',
  'fab',
  'form', // Custom
  'form-field',
  'grid',
  'icon',
  'icon-button',
  'image-list',
  'linear-progress',
  'list',
  'menu',
  'radio',
  'select',
  'slider',
  'snackbar',
  'switch',
  'table',
  'tabs',
  'textfield',
  'top-app-bar',
  // Plus
  'alert',
  'autocomplete',
  'badge',
  'collapse',
  'datepicker',
  'editor',
  'file',
  'pagination',
  'rangepicker',
  'skeleton',
  'text-divider',
  // Next
  'bottom-navigation',
  'banner'
];
const plugins = [
  'alert',
  'confirm',
  'event',
  'grid',
  'theme',
  'toast',
  'typography',
  'validator'
];
const directives = ['a11y', 'anchor', 'badge', 'elevation', 'ripple', 'shape'];
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
