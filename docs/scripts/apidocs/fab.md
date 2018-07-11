### Props

| Name     | Type                | Default | Description                                                                                      |
| -------- | ------------------- | ------- | ------------------------------------------------------------------------------------------------ |
| icon     | `String`            | `''`    | Mandatory, for the icon element. See [Material Icons](/#/icons) usage.                           |
| label    | `String`            | `''`    | Optional, for the text label. Applicable only for Extended FAB.                                  |
| mini     | `Boolean`           | `false` | Optional, modifies the FAB to a smaller size                                                     |
| extended | `Boolean`, `String` | `false` | Optional, modifies the FAB to wider size which includes a text label.                            |
| exited   | `Boolean`           | `false` | Optional, animates the FAB out of view. When this class is removed, the FAB will return to view. |
| cssOnly  | `Boolean`           | `false` | Ripple effect is disabled.                                                                       |

### Slots

| Name      | Description                                                                  |
| --------- | ---------------------------------------------------------------------------- |
| (default) | The default slot holds the floating action button text and can contain HTML. |

- `slot-scope`

```json
{
  "icon": "mdc-fab__icon"
}
```

### Events

| Name  | Type                      | Description                                       |
| ----- | ------------------------- | ------------------------------------------------- |
| click | `Function(event: object)` | Emits when the floating action button is clicked. |
