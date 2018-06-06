### Props

| Name    | Type      | Default     | Description                                                                                      |
| ------- | --------- | ----------- | ------------------------------------------------------------------------------------------------ |
| icon    | `String`  | `undefined` | Mandatory, for the icon element. See [Material Icons](/#/icons) usage.                           |
| mini    | `Boolean` | `false`     | Optional, modifies the FAB to a smaller size                                                     |
| exited  | `Boolean` | `false`     | Optional, animates the FAB out of view. When this class is removed, the FAB will return to view. |
| cssOnly | `Boolean` | `false`     | Ripple effect is disabled.                                                                       |

### Slots

| Name      | Description                                                                  | `slot-scope`                            |
| --------- | ---------------------------------------------------------------------------- | --------------------------------------- |
| (default) | The default slot holds the floating action button text and can contain HTML. | `className = { icon: 'mdc-fab__icon' }` |

### Events

| Name  | Type                      | Description                                       |
| ----- | ------------------------- | ------------------------------------------------- |
| click | `Function(event: object)` | Emits when the floating action button is clicked. |
