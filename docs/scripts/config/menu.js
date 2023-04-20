const MATERIAL_COMPONENTS = [
  {
    name: 'guide',
    children: [
      {
        name: 'intro'
      },
      {
        name: 'quickstart'
      },
      {
        name: 'advanced'
      },
      {
        name: 'kill-ie'
      },
      {
        name: 'upgrade'
      }
    ]
  },
  '-',
  {
    name: 'theme',
    children: [
      {
        icon: 'palette',
        name: 'color'
      },
      {
        icon: 'text_fields',
        name: 'typography'
      },
      {
        icon: 'emoji_symbols',
        name: 'icons'
      },
      {
        icon: 'category',
        name: 'shape'
      }
    ]
  },
  '-',
  {
    name: 'general',
    children: [
      {
        icon: 'add_box',
        name: 'button'
      },
      {
        icon: 'add_circle_outline',
        name: 'fab'
      },
      {
        icon: 'add',
        name: 'icon-button'
      },
      {
        icon: 'add_box',
        name: 'segmented-button'
      }
    ]
  },
  '-',
  {
    name: 'layout',
    children: [
      {
        icon: 'web',
        name: 'top-app-bar'
      },
      {
        icon: 'grid_on',
        name: 'grid'
      },
      {
        icon: 'view_list',
        name: 'form'
      },
      {
        icon: 'horizontal_rule',
        name: 'divider'
      }
    ]
  },
  '-',
  {
    name: 'navigation',
    children: [
      {
        icon: 'vertical_split',
        name: 'drawer'
      },
      {
        icon: 'tab',
        name: 'tabs'
      },
      {
        icon: 'menu',
        name: 'menu'
      },
      {
        icon: 'pages',
        name: 'pagination'
      },
      {
        icon: 'video_label',
        name: 'bottom-navigation',
        plus: true
      }
    ]
  },
  '-',
  {
    name: 'data-input',
    children: [
      {
        icon: 'text_format',
        name: 'textfield'
      },
      {
        icon: 'text_format',
        name: 'autocomplete'
      },
      {
        icon: 'wysiwyg',
        name: 'editor',
        plus: true
      },
      {
        icon: 'menu',
        name: 'select'
      },
      {
        icon: 'check_box',
        name: 'checkbox'
      },
      {
        icon: 'radio_button_checked',
        name: 'radio'
      },
      {
        icon: 'indeterminate_check_box',
        name: 'chips'
      },
      {
        icon: 'file_upload',
        name: 'file'
      },
      {
        icon: 'today',
        name: 'datepicker'
      },
      {
        icon: 'date_range',
        name: 'rangepicker'
      },
      {
        icon: 'toggle_off',
        name: 'switch'
      },
      {
        icon: 'linear_scale',
        name: 'slider'
      },
      {
        icon: 'api',
        name: 'validator'
      }
    ]
  },
  '-',
  {
    name: 'data-display',
    children: [
      {
        icon: 'list',
        name: 'list'
      },
      {
        icon: 'view_comfy',
        name: 'image-list'
      },
      // {
      //   icon: 'image',
      //   name: 'lazyload',
      //   plus: true
      // },
      {
        icon: 'category',
        name: 'card'
      },
      {
        icon: 'table_view',
        name: 'table'
      },
      {
        icon: 'swap_vert',
        name: 'collapse'
      },
      {
        icon: 'category',
        name: 'badge'
      },
      {
        icon: 'account_tree',
        name: 'tree',
        plus: true
      }
    ]
  },
  '-',
  {
    name: 'feedback',
    children: [
      {
        icon: 'feedback',
        name: 'alert'
      },
      {
        icon: 'event_note',
        name: 'dialog'
      },
      {
        icon: 'event_note',
        name: 'alert-dialog'
      },
      {
        icon: 'event_note',
        name: 'confirm-dialog'
      },
      {
        icon: 'call_to_action',
        name: 'snackbar'
      },
      {
        icon: 'call_to_action',
        name: 'toast'
      },
      {
        icon: 'notifications',
        name: 'banner'
      },
      {
        icon: 'trip_origin',
        name: 'progress'
      },
      {
        icon: 'pending',
        name: 'spinner'
      },
      {
        icon: 'notes',
        name: 'skeleton',
        plus: true
      },
      {
        icon: 'feedback',
        name: 'tooltip'
      },
      {
        icon: 'video_label',
        name: 'bottom-sheet',
        plus: true
      },
      {
        icon: 'video_label',
        name: 'side-sheet',
        plus: true
      }
    ]
  },
  '-',
  {
    name: 'misc',
    children: [
      {
        icon: 'api',
        name: 'event'
      },
      {
        icon: 'mouse',
        name: 'debounce'
      },
      {
        icon: 'texture',
        name: 'ripple'
      },
      {
        icon: 'layers',
        name: 'elevation'
      },
      {
        icon: 'anchor',
        name: 'anchor',
        plus: true
      },
      {
        icon: 'content_copy',
        name: 'copy',
        plus: true
      },
      {
        icon: 'touch_app',
        name: 'longpress',
        plus: true
      }
    ]
  },
  '-',
  {
    icon: 'storage',
    name: 'store',
    link: true
  },
  '-',
  {
    icon: 'widgets',
    name: 'utils',
    link: true
  },
  '-',
  'footer'
];

let menu = [];
for (let component of MATERIAL_COMPONENTS) {
  if (component === '-' || component === 'footer') {
    menu.push(component);
  } else {
    menu.push({
      icon: component.icon,
      name: component.name,
      url: component.link ? component.name : false
    });

    if (component.children) {
      for (let subComponent of component.children) {
        let url =
          subComponent.name === 'icons'
            ? subComponent.name
            : `${component.name}.${subComponent.name}`;

        menu.push({
          isSubmenu: true,
          icon: subComponent.icon,
          name: subComponent.name,
          url,
          plus: subComponent.plus || false
        });
      }
    }
  }
}

export default menu;
