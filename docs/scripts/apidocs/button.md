### Props

| Name       | Type      | Default                | Description                                                                |
| ---------- | --------- | ---------------------- | -------------------------------------------------------------------------- |
| type       | `String`  | `'button'`             | Mandatory. The _type_ attribute of the `<ui-button>`.                      |
| raised     | `Boolean` | `false`                | Optional. Styles a contained button that is elevated above the surface.    |
| unelevated | `Boolean` | `false`                | Optional. Styles a contained button that is flush with the surface.        |
| outlined   | `Boolean` | `false`                | Optional. Styles an outlined button that is flush with the surface.        |
| dense      | `Boolean` | `false`                | Optional. Makes the button text and container slightly smaller.            |
| icon       | `String`  | `undefined`            | Optional. Indicates an icon element. See [Material Icons](/#/icons) usage. |
| disabled   | `Boolean` | `false`                | To disable a button.                                                       |
| cssOnly    | `Boolean` | `false`                | Ripple effect is disabled.                                                 |
| url        | `String`  | `'javascript:void(0)'` | The _href_ attribute of the `<ui-link>`.                                   |
| cardAction | `Boolean` | `false`                |                                                                            |

### Slots

| Name      | Description                                                  | `slot-scope`                               |
| --------- | ------------------------------------------------------------ | ------------------------------------------ |
| (default) | The default slot holds the button text and can contain HTML. | `className = { icon: 'mdc-button__icon' }` |

### Events

| Name  | Type                      | Description                       |
| ----- | ------------------------- | --------------------------------- |
| click | `Function(event: object)` | Emits when the button is clicked. |

### Sass
