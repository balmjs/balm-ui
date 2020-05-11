const MATERIAL_COMPONENTS = [
  {
    name: 'Guide',
    children: [
      {
        name: 'Introduction',
        url: 'intro'
      },
      {
        name: 'Get Started',
        url: 'quickstart'
      },
      {
        name: 'Advanced',
        url: 'advanced'
      },
      {
        name: 'Kill IE',
        url: 'kill-ie'
      }
    ]
  },
  '-',
  {
    name: 'General',
    children: [
      {
        icon: 'button',
        name: 'Button',
        description: 'Raised and flat buttons'
      },
      {
        icon: 'button',
        name: 'Floating action', // Floating action button
        description: 'The primary action in an application',
        url: 'fab'
      },
      {
        icon: 'component',
        name: 'Icon button',
        description: 'Icon buttons and toggles',
        url: 'icon-button'
      }
    ]
  },
  '-',
  {
    name: 'Layout',
    children: [
      {
        icon: 'toolbar',
        name: 'Top App Bar',
        description:
          'Container for application title, navigation icon, and action items',
        url: 'top-app-bar'
      },
      {
        icon: 'responsive_layout',
        name: 'Layout grid',
        description: 'Grid and gutter support',
        url: 'grid'
      }
    ]
  },
  '-',
  {
    name: 'Navigation',
    children: [
      {
        icon: 'side_navigation',
        name: 'Drawer',
        description: 'Navigation drawer',
        url: 'drawer'
      },
      // {
      //   icon: 'component',
      //   name: 'Bottom Navigation',
      //   description: 'Bottom Navigation',
      //   url: 'bottom-navigation',
      //   next: true
      // },
      {
        icon: 'tabs',
        name: 'Tabs',
        description: 'Tabs with support for icon and text labels'
      },
      {
        icon: 'menu',
        name: 'Menu',
        description: 'Pop over menus'
      }
    ]
  },
  '-',
  {
    name: 'Theme',
    children: [
      {
        icon: 'theme',
        name: 'Color',
        description: 'Using primary and accent colors'
      },
      {
        icon: 'typography',
        name: 'Typography',
        description: 'Type hierarchy'
      },
      {
        icon: 'icons',
        name: 'Icons',
        description: 'Material Icons'
      },
      {
        icon: 'component',
        name: 'Shape',
        description: 'Shape'
      }
    ]
  },
  '-',
  {
    name: 'Data Input',
    url: 'data-input',
    children: [
      {
        icon: 'text_field',
        name: 'Text Field',
        description: 'Single and multiline text fields',
        url: 'textfield'
      },
      {
        icon: 'menu',
        name: 'Select',
        description: 'Popover selection menus'
      },
      {
        icon: 'selection_control',
        name: 'Checkbox',
        description: 'Multi-selection controls'
      },
      {
        icon: 'radio_button',
        name: 'Radio', // Radio buttons
        description: 'Single selection controls'
      },
      {
        icon: 'chips',
        name: 'Chips',
        description: 'Chips for actions, selection, and input'
      },
      {
        icon: 'switch',
        name: 'Switch',
        description: 'On off switches'
      },
      {
        icon: 'slider',
        name: 'Slider',
        description: 'Range controls'
      },
      {
        icon: 'component',
        name: 'File',
        description: 'File upload',
        plus: true
      },
      {
        icon: 'text_field',
        name: 'Autocomplete',
        description: 'Autocomplete',
        plus: true
      },
      {
        icon: 'component',
        name: 'Datepicker',
        description: 'Datepicker',
        plus: true
      },
      {
        icon: 'component',
        name: 'Rangepicker',
        description: 'Rangepicker',
        plus: true
      },
      {
        icon: 'component',
        name: 'Validator',
        description: 'Validator',
        plus: true
      }
    ]
  },
  '-',
  {
    name: 'Data Display',
    url: 'data-display',
    children: [
      {
        icon: 'list',
        name: 'List',
        description: 'Item layouts in lists'
      },
      {
        icon: 'card',
        name: 'Image list',
        description: 'Displays a collection of images in a repeated pattern',
        url: 'image-list'
      },
      {
        icon: 'card',
        name: 'Card',
        description: 'Various card layout styles'
      },
      {
        icon: 'component',
        name: 'Data Table',
        description: 'Data tables display sets of data',
        url: 'table'
      },
      {
        icon: 'component',
        name: 'Pagination',
        description: 'Pagination',
        plus: true
      },
      {
        icon: 'component',
        name: 'Collapse',
        description: 'Collapse',
        plus: true
      },
      {
        icon: 'component',
        name: 'Badge',
        description: 'Badge',
        plus: true
      }
    ]
  },
  '-',
  {
    name: 'Feedback',
    children: [
      {
        icon: 'component',
        name: 'Alert',
        description: 'Alert',
        plus: true
      },
      {
        icon: 'dialog',
        name: 'Dialog',
        description: 'Secondary text'
      },
      {
        icon: 'dialog',
        name: 'Alert Dialog',
        description: 'window.alert',
        url: 'alert-dialog',
        plus: true
      },
      {
        icon: 'dialog',
        name: 'Confirm Dialog',
        description: 'window.confirm',
        url: 'confirm-dialog',
        plus: true
      },
      {
        icon: 'toast',
        name: 'Snackbar',
        description: 'Transient messages'
      },
      {
        icon: 'toast',
        name: 'Toast',
        description: 'Toast',
        plus: true
      },
      {
        icon: 'progress',
        name: 'Linear Progress',
        description: 'Fills from 0% to 100%, represented by bars',
        url: 'linear-progress'
      },
      {
        icon: 'progress',
        name: 'Circular Progress',
        description: '',
        url: 'circular-progress'
      },
      {
        icon: 'component',
        name: 'Skeleton',
        description:
          "Provide a placeholder while you wait for content to load, or to visualise content that doesn't exist yet.",
        plus: true
      }
    ]
  },
  '-',
  {
    name: 'Misc',
    children: [
      {
        icon: 'component',
        name: 'Event',
        description: 'Global event handler'
      },
      {
        icon: 'ripple',
        name: 'Ripple',
        description: 'Touch ripple'
      },
      {
        icon: 'shadow',
        name: 'Elevation',
        description: 'Shadow for different elevations'
      },
      // {
      //   icon: 'component',
      //   name: 'Shape',
      //   description: 'Mixins for angled corners on unelevated components'
      // },
      {
        icon: 'component',
        name: 'Text Divider',
        description: 'Divider',
        url: 'divider'
      },
      {
        icon: 'component',
        name: 'Anchor',
        description: 'Anchor',
        plus: true
      }
    ]
  },
  '-',
  {
    icon: 'component',
    name: 'Utils',
    description: 'Utils',
    plus: true
  }
];

// const getComponentIcon = component => {
//   let icon = '';
//   if (component.icon) {
//     switch (component.icon) {
//       case 'icons':
//         icon = 'icons_light.svg';
//         break;
//       case 'progress':
//         icon = 'ic_progress_activity.svg';
//         break;
//       case 'slider':
//         icon = 'slider.svg';
//         break;
//       case 'chips':
//         icon = `ic_${component.icon}_24dp.svg`;
//         break;
//       default:
//         icon = `ic_${component.icon}_24px.svg`;
//         break;
//     }
//   }
//   return icon;
// };

let menu = [];
for (let component of MATERIAL_COMPONENTS) {
  if (component === '-') {
    menu.push('-');
  } else {
    let baseUrl = '/' + (component.url || component.name.toLowerCase());

    menu.push({
      icon: component.icon,
      name: component.name,
      description: component.description || false,
      url: component.icon ? baseUrl : false,
      plus: component.plus || false
    });

    if (component.children) {
      for (let subComponent of component.children) {
        let url =
          subComponent.name === 'Icons'
            ? '/' + (subComponent.url || subComponent.name.toLowerCase())
            : baseUrl +
              '/' +
              (subComponent.url || subComponent.name.toLowerCase());

        menu.push({
          icon: subComponent.icon,
          name: subComponent.name,
          description: subComponent.description || false,
          url,
          isSubmenu: true,
          plus: subComponent.plus || false,
          next: subComponent.next || false
        });
      }
    }
  }
}

export default menu;
