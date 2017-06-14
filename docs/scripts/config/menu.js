const MATERIAL_COMPONENTS = [{
  icon: 'button',
  name: 'Button',
  description: 'Raised and flat buttons',
  children: [{
    name: 'Floating action button',
    description: 'The primary action in an application',
    url: 'fab'
  }, {
    name: 'Icon toggle',
    description: 'Toggling icon states',
    url: 'icon-toggle'
  }]
}, {
  icon: 'card',
  name: 'Card',
  description: 'Various card layout styles'
}, {
  icon: 'dialog',
  name: 'Dialog',
  description: 'Secondary text'
}, {
  icon: 'side_navigation',
  name: 'Drawer',
  url: 'temporary-drawer',
  children: [{
    name: 'Temporary drawer',
    url: 'temporary-drawer'
  }, {
    name: 'Persistent drawer',
    url: 'persistent-drawer'
  }, {
    name: 'Permanent drawer I',
    description: 'Permanent drawer above toolbar',
    url: 'permanent-drawer-above-toolbar'
  }, {
    name: 'Permanent drawer II',
    description: 'Permanent drawer below toolbar',
    url: 'permanent-drawer-below-toolbar'
  }]
}, {
  icon: 'card',
  name: 'Grid list',
  description: '2D grid layouts',
  url: 'grid-list'
}, {
  icon: 'icons',
  name: 'Icons',
  description: 'Material Icons'
}, {
  icon: 'card',
  name: 'Layout grid',
  description: 'Grid and gutter support',
  url: 'grid'
}, {
  icon: 'progress',
  name: 'Linear Progress',
  description: 'Fills from 0% to 100%, represented by bars',
  url: 'linear-progress'
}, {
  icon: 'list',
  name: 'List',
  description: 'Item layouts in lists'
}, {
  name: 'Input Controls',
  children: [
    // {
    //   icon: 'component',
    //   name: 'Form field',
    //   url: 'form-field'
    // },
    {
      icon: 'text_field',
      name: 'Text field',
      description: 'Single and multiline text fields',
      url: 'textfield'
    }, {
      icon: 'selection_control',
      name: 'Checkbox',
      description: 'Multi-selection controls'
    }, {
      icon: 'radio_button',
      name: 'Radio', // Radio buttons
      description: 'Single selection controls'
    }, {
      icon: 'menu',
      name: 'Select',
      description: 'Popover selection menus'
    }, {
      icon: 'switch',
      name: 'Switch',
      description: 'On off switches'
    }
  ]
}, {
  icon: 'menu',
  name: 'Menu', // Simple Menu
  description: 'Pop over menus'
}, {
  icon: 'toast',
  name: 'Snackbar',
  description: 'Transient messages'
}, {
  icon: 'tabs',
  name: 'Tabs',
  description: 'Tabs with support for icon and text labels'
}, {
  icon: 'toolbar',
  name: 'Toolbar',
  description: 'Header and footers'
}, {
  name: 'Other',
  children: [{
    icon: 'typography',
    name: 'Typography',
    description: 'Type hierarchy'
  }, {
    icon: 'theme',
    name: 'Theme',
    description: 'Using primary and accent colors'
  }, {
    icon: 'shadow',
    name: 'Elevation',
    description: 'Shadow for different elevations'
  }]
}];

const getComponentIcon = component => {
  let icon = '';
  if (component.icon) {
    switch (component.icon) {
      case 'icons':
        icon = 'icons_light.svg';
        break;
      case 'progress':
        icon = 'ic_progress_activity.svg';
        break;
      default:
        icon = `ic_${component.icon}_24px.svg`;
        break;
    }
  }
  return icon;
};

let menu = [];
for (let component of MATERIAL_COMPONENTS) {
  menu.push({
    icon: getComponentIcon(component),
    name: component.name,
    description: component.description,
    url: component.icon ? (component.url || component.name.toLowerCase()) : false
  });
  if (component.children) {
    for (let subComponent of component.children) {
      menu.push({
        icon: getComponentIcon(subComponent),
        name: subComponent.name,
        description: subComponent.description,
        url: subComponent.url || subComponent.name.toLowerCase(),
        isSubmenu: true
      });
    }
  }
}

export default menu;
