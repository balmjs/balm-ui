const CSS_RESET = {
  normalize: './node_modules/@csstools/normalize.css/normalize.css',
  sanitize: './node_modules/sanitize.css/sanitize.css'
};
const DMC_SOURCE = {
  mdc: './node_modules/material-components-web',
  material: './node_modules/@material',
  icon: './src/material-design-icons/v41'
};
const DEV_SOURCE = {
  mdc: './src/material-components-web'
  // mdi: './src/material-design-icons/v3'
};
const DMC_COMPONENTS = [
  'animation',
  'base',
  'button',
  'card',
  'checkbox',
  'chips', // New in mdc@0.30.0
  'data-table', // New in mdc@3.1.0
  'dialog',
  'dom', // New in mdc@0.40.0
  'drawer',
  'elevation',
  'fab',
  'feature-targeting', // New in mdc@0.44.0
  'floating-label',
  'form-field',
  'grid-list',
  'icon-button', // New in mdc@0.36.0
  'image-list', // New in mdc@0.33.0
  'layout-grid',
  'line-ripple',
  'linear-progress',
  'list',
  'menu',
  'menu-surface', // New in mdc@0.39.0
  'notched-outline',
  'radio',
  'ripple',
  'rtl',
  'select',
  'shape',
  'slider',
  'snackbar',
  'switch',
  'tab', // New in mdc@0.38.0
  'tab-bar', // New in mdc@0.38.0
  'tab-indicator', // New in mdc@0.38.0
  'tab-scroller', // New in mdc@0.38.0
  'textfield',
  'theme',
  'top-app-bar', // New in mdc@0.32.0
  'typography'
];

module.exports = {
  CSS_RESET,
  DMC_SOURCE,
  DEV_SOURCE,
  DMC_COMPONENTS
};
