```html
<ui-textfield-icon><!-- the material design icon name --></ui-textfield-icon>
```

#### Props

| Name        | Type      | Default | Description                 |
| ----------- | --------- | ------- | --------------------------- |
| unclickable | `Boolean` | `false` | Display un-clickable icons. |

#### Slots

| Name      | Description                                                                                           |
| --------- | ----------------------------------------------------------------------------------------------------- |
| (default) | The default slot holds the text field icon and can contain HTML. See [Material Icons](/#/icons) list. |

#### Events

| Name  | Type                      | Description                                |
| ----- | ------------------------- | ------------------------------------------ |
| click | `Function(event: object)` | Emits when the text field icon is clicked. |
