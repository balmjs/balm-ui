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
        icon: 'add_box',
        name: 'Button',
        description: 'Raised and flat buttons'
      },
      {
        icon: 'add_circle_outline',
        name: 'Floating action', // Floating action button
        description: 'The primary action in an application',
        url: 'fab'
      },
      {
        icon: 'add',
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
        icon: 'web',
        name: 'Top App Bar',
        description:
          'Container for application title, navigation icon, and action items',
        url: 'top-app-bar'
      },
      {
        icon: 'grid_on',
        name: 'Layout grid',
        description: 'Grid and gutter support',
        url: 'grid'
      },
      {
        icon: 'format_list_bulleted',
        name: 'Form',
        description: 'Form + Form Field'
      },
      {
        icon: 'category',
        name: 'Text Divider',
        description: 'Divider',
        url: 'text-divider',
        plus: true
      }
    ]
  },
  '-',
  {
    name: 'Navigation',
    children: [
      {
        icon: 'vertical_split',
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
        icon: 'tab',
        name: 'Tabs',
        description: 'Tabs with support for icon and text labels'
      },
      {
        icon: 'menu',
        name: 'Menu',
        description: 'Pop over menus'
      },
      {
        icon: 'pages',
        name: 'Pagination',
        description: 'Pagination'
      }
    ]
  },
  '-',
  {
    name: 'Theme',
    children: [
      {
        icon: 'palette',
        name: 'Color',
        description: 'Using primary and accent colors'
      },
      {
        icon: 'text_fields',
        name: 'Typography',
        description: 'Type hierarchy'
      },
      {
        icon: 'face',
        name: 'Icons',
        description: 'Material Icons'
      },
      {
        icon: 'category',
        name: 'Shape',
        description: 'Mixins for angled corners on unelevated components'
      }
    ]
  },
  '-',
  {
    name: 'Data Input',
    url: 'data-input',
    children: [
      {
        icon: 'text_format',
        name: 'Text Field',
        description: 'Single and multiline text fields',
        url: 'textfield'
      },
      {
        icon: 'text_format',
        name: 'Autocomplete',
        description: 'Autocomplete',
        plus: true
      },
      {
        icon: 'text_format',
        name: 'Editor',
        description: 'a modern WYSIWYG editor',
        plus: true
      },
      {
        icon: 'menu',
        name: 'Select',
        description: 'Popover selection menus'
      },
      {
        icon: 'check_box',
        name: 'Checkbox',
        description: 'Multi-selection controls'
      },
      {
        icon: 'radio_button_checked',
        name: 'Radio', // Radio buttons
        description: 'Single selection controls'
      },
      {
        icon: 'indeterminate_check_box',
        name: 'Chips',
        description: 'Chips for actions, selection, and input'
      },
      {
        icon: 'file_upload',
        name: 'File',
        description: 'File upload'
      },
      {
        icon: 'date_range',
        name: 'Datepicker',
        description: 'Datepicker',
        plus: true
      },
      {
        icon: 'date_range',
        name: 'Rangepicker',
        description: 'Range datepicker',
        plus: true
      },
      {
        icon: 'toggle_off',
        name: 'Switch',
        description: 'On off switches'
      },
      {
        icon: 'linear_scale',
        name: 'Slider',
        description: 'Range controls'
      },
      {
        icon: 'api',
        name: 'Validator',
        description: 'Validator'
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
        icon: 'view_comfy',
        name: 'Image list',
        description: 'Displays a collection of images in a repeated pattern',
        url: 'image-list'
      },
      {
        icon: 'category',
        name: 'Card',
        description: 'Various card layout styles'
      },
      {
        icon: 'table_chart',
        name: 'Data Table',
        description: 'Data tables display sets of data',
        url: 'table'
      },
      {
        icon: 'swap_vert',
        name: 'Collapse',
        description: 'Collapse',
        plus: true
      },
      {
        icon: 'category',
        name: 'Badge',
        description: 'Badge'
      }
    ]
  },
  '-',
  {
    name: 'Feedback',
    children: [
      {
        icon: 'message',
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
        url: 'progress'
      },
      {
        icon: 'progress',
        name: 'Circular Progress',
        description: '',
        url: 'spinner'
      },
      {
        icon: 'short_text',
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
        icon: 'api',
        name: 'Event',
        description: 'Global event handler'
      },
      {
        icon: 'texture',
        name: 'Ripple',
        description: 'Touch ripple'
      },
      {
        icon: 'shadow',
        name: 'Elevation',
        description: 'Shadow for different elevations'
      },
      {
        icon: 'anchor',
        name: 'Anchor',
        description: 'Anchor',
        plus: true
      }
    ]
  },
  '-',
  {
    icon: 'widgets',
    name: 'Utils',
    description: 'Utils'
  }
];

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
