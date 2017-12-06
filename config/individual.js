const input = {
  components: './src/scripts/components',
  helpers: './src/scripts/helpers',
  plugins: './src/scripts/plugins'
};

const components = [
  'icon.js',
  // MDC components
  'button.js',
  'card.js',
  'checkbox.js',
  'dialog.js',
  'drawer.js',
  'fab.js',
  'form-field.js',
  'grid-list.js',
  'icon-toggle.js',
  'grid.js',
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
  // Plus
  'pagination.js'
];
const helpers = ['index.js'];
const plugins = [
  'event.js',
  'elevation.js',
  'grid.js',
  'theme.js',
  'typography.js',
  'alert.js',
  'confirm.js',
  'toast.js'
];

const output = {
  components: './components',
  helpers: './helpers',
  plugins: './plugins'
};

module.exports = {
  input,
  components,
  helpers,
  plugins,
  output
};
