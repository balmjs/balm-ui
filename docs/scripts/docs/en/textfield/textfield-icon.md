```html
<ui-textfield-icon><!-- the material design icon name --></ui-textfield-icon>
```

### Props

| Name          | Type    | Default | Description                |
| ------------- | ------- | ------- | -------------------------- |
| `trailing`    | boolean | `false` | Display trailing icon.     |
| `unclickable` | boolean | `false` | Display un-clickable icon. |

### Slots

| Name      | Props | Description                                                                                         |
| --------- | ----- | --------------------------------------------------------------------------------------------------- |
| `default` |       | The default slot holds the text field icon and can contain HTML. See [Material Icons](/icons) list. |

### Events

| Name    | Type                      | Description                                |
| ------- | ------------------------- | ------------------------------------------ |
| `click` | `function(event: object)` | Emits when the text field icon is clicked. |
