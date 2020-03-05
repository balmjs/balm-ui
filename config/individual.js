const input = {
  components: './src/scripts/components',
  plugins: './src/scripts/plugins',
  directives: './src/scripts/directives',
  utils: './src/scripts/utils',
  sass: './src/styles'
};

const components = [
  'icon',
  // MDC components
  'button',
  'card',
  'checkbox',
  'chips',
  'dialog',
  'drawer',
  'fab',
  'form-field',
  'grid',
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
  'autocomplete',
  'text-divider',
  'file',
  'pagination',
  'datepicker',
  'rangepicker',
  // Next
  'bottom-navigation',
  'banner'
];
const plugins = [
  'event',
  // MDC plugins
  'theme',
  'typography',
  // Plus
  'alert',
  'confirm',
  'toast',
  'validator'
];
const directives = [
  // MDC directives
  'elevation',
  'ripple',
  'a11y',
  // Plus
  'shape',
  'anchor'
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
