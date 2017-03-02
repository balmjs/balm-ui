const COMPONENTS = {
  layout: [
    'layout',
    'grid',
    'tabs',
    // 'footer'
  ],
  common: [
    'badge',
    'button',
    'card',
    'chip',
    'loading',
    'menu',
    'tooltip',
    'divider'
  ],
  form: [
    'textfield',
    'checkbox',
    'radio',
    'icon-toggle',
    'switch',
    'slider',
    'select',
    'autocomplete',
    'datepicker',
    // 'fileupload'
  ],
  data: [
    'list',
    'table',
    'pagination'
  ],
  popup: [
    'dialog',
    'alert',
    'confirm',
    'snackbar'
  ]
};

let menu = [];
for (let groupName in COMPONENTS) {
  let components = COMPONENTS[groupName];
  let items = {
    name: `components.${groupName}`,
    components: components.map(component => {
      return {
        url: component,
        name: `components.${component}` // component.substring(0, 1).toUpperCase() + component.substring(1) // capitalize
      };
    })
  };
  menu.push(items);
}

export default menu;
