const input = {
  components: './src/scripts/components',
  plugins: './src/scripts/plugins',
  directives: './src/scripts/directives',
  utils: './src/scripts/utils'
};

const components = [
  'icon.js',
  // MDC components
  'button.js',
  'card.js',
  'checkbox.js',
  'chips.js',
  'dialog.js',
  'drawer.js',
  'fab.js',
  'form-field.js',
  'grid-list.js',
  'grid.js',
  'icon-toggle.js',
  'icon-button.js',
  'image-list.js',
  'linear-progress.js',
  'list.js',
  'menu.js',
  'radio.js',
  'select.js',
  'slider.js',
  'snackbar.js',
  'switch.js',
  'tabs.js',
  'textfield.js',
  'toolbar.js',
  'top-app-bar.js',
  // Plus
  'dropdown.js',
  'autocomplete.js'
  // 'pagination.js'
];
const plugins = [
  'event.js',
  'grid.js',
  'theme.js',
  'typography.js',
  'validator.js',
  'alert.js',
  'confirm.js',
  'toast.js'
];
const directives = [
  'ripple.js',
  'elevation.js',
  'shape.js'
];
const utils = ['ie.js', 'type.js', 'util.js'];

const output = {
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
