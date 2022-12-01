const MATERIAL_COMPONENTS = [
  {
    name: 'guide',
    children: [
      {
        name: 'introduction'
      },
      {
        name: 'quick-start'
      },
      {
        name: 'advanced'
      },
      {
        name: 'ts'
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
    name: 'styles',
    children: [
      {
        icon: 'palette',
        name: 'color'
      },
      {
        icon: 'layers',
        name: 'elevation'
      },
      {
        icon: 'emoji_symbols',
        name: 'icons'
      },
      {
        icon: 'category',
        name: 'shape'
      },
      {
        icon: 'text_fields',
        name: 'typography'
      }
    ]
  },
  '-',
  {
    name: 'actions',
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
    name: 'communication',
    children: [
      {
        icon: 'feedback',
        name: 'alert'
      },
      {
        icon: 'category',
        name: 'badge'
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
        icon: 'feedback',
        name: 'tooltip'
      },
      {
        icon: 'notes',
        name: 'skeleton',
        plus: true
      }
    ]
  },
  '-',
  {
    name: 'containment',
    children: [
      {
        icon: 'grid_on',
        name: 'grid'
      },
      {
        icon: 'video_label',
        name: 'bottom-sheet',
        plus: true
      },
      {
        icon: 'category',
        name: 'card'
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
        icon: 'horizontal_rule',
        name: 'divider'
      },
      {
        icon: 'list',
        name: 'list'
      },
      {
        icon: 'view_comfy',
        name: 'image-list'
      },
      {
        icon: 'view_list',
        name: 'form'
      },
      {
        icon: 'table_view',
        name: 'table'
      },
      {
        icon: 'account_tree',
        name: 'tree',
        plus: true
      },
      {
        icon: 'swap_vert',
        name: 'collapse'
      }
    ]
  },
  '-',
  {
    name: 'navigation',
    children: [
      {
        icon: 'video_label',
        name: 'navigation-bar',
        plus: true
      },
      {
        icon: 'vertical_split',
        name: 'drawer'
      },
      // {
      //   icon: 'view_sidebar',
      //   name: 'navigation-rail',
      //   plus: true
      // },
      {
        icon: 'tab',
        name: 'tabs'
      },
      {
        icon: 'web',
        name: 'top-app-bar'
      },
      {
        icon: 'pages',
        name: 'pagination'
      }
    ]
  },
  '-',
  {
    name: 'selection',
    children: [
      {
        icon: 'indeterminate_check_box',
        name: 'chips'
      },
      {
        icon: 'menu',
        name: 'menu'
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
        icon: 'linear_scale',
        name: 'slider'
      },
      {
        icon: 'toggle_off',
        name: 'switch'
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
        icon: 'file_upload',
        name: 'file'
      }
    ]
  },
  '-',
  {
    name: 'text-inputs',
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
        icon: 'api',
        name: 'validator'
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
