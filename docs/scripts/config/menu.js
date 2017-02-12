const COMPONENTS = [
  // MDL
  'badge',
  'button',
  'card',
  'chip',
  'dialog',
  'layout',
  'grid',
  'tabs',
  'footer',
  'list',
  'loading',
  'menu',
  'slider',
  'snackbar',
  'checkbox',
  'radio',
  'icon-toggle',
  'switch',
  'table',
  'textfield',
  'tooltip',
  // NEW
  'divider',
  'select',
  'autocomplete',
  'datepicker',
  'pagination'
  // 'fileupload'
];

const menu = COMPONENTS.map(component => {
  return {
    url: component,
    name: `components.${component}` // component.substring(0, 1).toUpperCase() + component.substring(1) // capitalize
  };
});

export default menu;
