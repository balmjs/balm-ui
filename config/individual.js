const input = {
  components: './src/scripts/components',
  utilities: './src/scripts/utilities',
  plugins: './src/scripts/plugins'
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
  'form-field.js',
  'grid-list.js',
  'grid.js',
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
  'top-app-bar.js'
  // Plus
  // 'pagination.js'
];
const utilities = ['ie.js', 'type.js', 'util.js'];
const plugins = [
  'event.js',
  'elevation.js',
  'grid.js',
  'theme.js',
  'typography.js',
  'alert.js',
  'confirm.js',
  'toast.js',
  'validator.js'
];

const output = {
  components: './components',
  utilities: './utilities',
  plugins: './plugins'
};

module.exports = {
  input,
  components,
  utilities,
  plugins,
  output
};
