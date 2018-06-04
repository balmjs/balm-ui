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
  'chips',
  'dialog',
  'drawer',
  'elevation',
  'fab',
  'floating-label',
  'form-field',
  'grid-list',
  'icon-button',
  'icon-toggle',
  'image-list',
  'layout-grid',
  'line-ripple',
  'linear-progress',
  'list',
  'menu',
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
  'tabs',
  'textfield',
  'theme',
  'toolbar',
  'top-app-bar',
  'typography'
];

module.exports = {
  CSS_RESET,
  DMC_SOURCE,
  DEV_SOURCE,
  DMC_COMPONENTS
};
