```html
<ui-fab><!-- the button icon --></ui-fab>
```

#### Props

| Name     | Type                | Default | Description                                                                                      |
| -------- | ------------------- | ------- | ------------------------------------------------------------------------------------------------ |
| icon     | `String`            | `''`    | Mandatory, for the icon element. See [Material Icons](/#/icons) usage.                           |
| mini     | `Boolean`           | `false` | Optional, modifies the FAB to a smaller size                                                     |
| extended | `Boolean`, `String` | `false` | Optional, modifies the FAB to wider size which includes a text label.                            |
| label    | `String`            | `''`    | Optional, for the text label. Applicable only for Extended FAB.                                  |
| exited   | `Boolean`           | `false` | Optional, animates the FAB out of view. When this class is removed, the FAB will return to view. |
| cssOnly  | `Boolean`           | `false` | Ripple effect is disabled.                                                                       |

#### Slots

| Name      | Description                                                                                    | `slot-scope` |
| --------- | ---------------------------------------------------------------------------------------------- | ------------ |
| (default) | The default slot holds the floating action button content or custom icon and can contain HTML. | ☑            |
| label     | The label slot holds the label text of the extended FAB.                                       |              |

- `slot-scope`

```json
{
  "icon": "mdc-fab__icon"
}
```

#### Events

| Name  | Type                      | Description                                       |
| ----- | ------------------------- | ------------------------------------------------- |
| click | `Function(event: object)` | Emits when the floating action button is clicked. |
