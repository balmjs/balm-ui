```html
<ui-chip><!-- the chip text --></ui-chip>
```

#### Props

| Name        | Type    | Default | Description                                                                                         |
| ----------- | ------- | ------- | --------------------------------------------------------------------------------------------------- |
| `icon`      | string  | `''`    | Optional. Indicates an leading icon element. See [Material Icons](/#/icons) list.                   |
| `hidden`    | boolean | `false` | Optional. Hides the leading icon in a filter chip when the chip is selected.                        |
| `removable` | boolean | `false` | Optional. Indicates a trailing icon which removes the chip from the DOM. Only use with input chips. |

#### Slots

| Name      | Slots           | Description                                       |
| --------- | --------------- | ------------------------------------------------- |
| `default` |                 | The default slot holds the chip child components. |
| `before`  | `{ iconClass }` | Custom leading icon in the chip.                  |
| `after`   | `{ iconClass }` | Custom trailing icon in the input chips.          |
