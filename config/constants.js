var CSS_RESET = './node_modules/normalize.css/normalize.css';
var DMC_SOURCE = {
  mdc: './node_modules/material-components-web',
  material: './node_modules/@material',
  icon: './node_modules/material-design-icons'
};
var DEV_SOURCE = {
  mdc: './src/material-components-web',
  font: './src/fonts'
};
var DMC_COMPONENTS = [
  'animation',
  'base',
  'button',
  'card',
  'checkbox',
  'chips', // New in mdc@0.30.0
  'dialog',
  'drawer',
  'elevation',
  'fab',
  'floating-label',
  'form-field',
  'grid-list',
  'icon-button', // New in mdc@0.36.0
  'icon-toggle', // Deprecated in mdc@0.36.0
  'image-list', // New in mdc@0.33.0
  'layout-grid',
  'line-ripple',
  'linear-progress',
  'list',
  'menu',
  'menu-surface', // New in mdc@0.39.0-0
  'notched-outline',
  'radio',
  'ripple',
  'rtl',
  'select',
  'selection-control',
  'shape',
  'slider',
  'snackbar',
  'switch',
  'tabs', // Deprecated in mdc@0.38.0
  'tab', // New in mdc@0.38.0
  'tab-bar', // New in mdc@0.38.0
  'tab-indicator', // New in mdc@0.38.0
  'tab-scroller', // New in mdc@0.38.0
  'textfield',
  'theme',
  'toolbar',
  'top-app-bar', // New in mdc@0.32.0
  'typography'
];

module.exports = {
  CSS_RESET,
  DMC_SOURCE,
  DEV_SOURCE,
  DMC_COMPONENTS
};
