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
  'dialog',
  'drawer',
  'elevation',
  'fab',
  'form-field',
  'grid-list',
  'icon-toggle',
  'layout-grid',
  'linear-progress',
  'list',
  'menu',
  'radio',
  'ripple',
  'rtl',
  'select',
  'selection-control',
  'slider',
  'snackbar',
  'switch',
  'tabs',
  'textfield',
  'theme',
  'toolbar',
  'typography'
];

module.exports = {
  CSS_RESET,
  DMC_SOURCE,
  DEV_SOURCE,
  DMC_COMPONENTS
};
