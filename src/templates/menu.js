const COMPONENTS = [
  'badge',
  'button',
  'card',
  'chip',
  'dialog',
  'grid',
  'tabs',
  'footer',
  'list',
  'loading',
  'menu',
  'snackbar',
  'form',
  'table',
  'tooltip'
]

const menu = COMPONENTS.map(component => {
  return {
    url: component,
    name: component.substring(0, 1).toUpperCase() + component.substring(1) // capitalize
  };
});

export default menu;
