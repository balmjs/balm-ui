const COMPONENTS = [
  'badge',
  'button',
  'card',
  'chip',
  'dialog',
  'divider',
  'grid',
  'tabs',
  'footer',
  'list',
  'loading',
  'menu',
  'snackbar',
  'form',
  'radio',
  'table',
  'tooltip'
];

const menu = COMPONENTS.map(component => {
  return {
    url: component,
    name: `components.${component}` // component.substring(0, 1).toUpperCase() + component.substring(1) // capitalize
  };
});

export default menu;
