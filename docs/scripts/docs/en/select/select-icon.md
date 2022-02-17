```html
<ui-select-icon><!-- the material design icon name --></ui-select-icon>
```

### Props

| Name          | Type    | Default | Description                 |
| ------------- | ------- | ------- | --------------------------- |
| `unclickable` | boolean | `false` | Display un-clickable icons. |

### Slots

| Name      | Props | Description                                                                                     |
| --------- | ----- | ----------------------------------------------------------------------------------------------- |
| `default` |       | The default slot holds the select icon and can contain HTML. See [Material Icons](/icons) list. |

### Events

| Name    | Type                      | Description                            |
| ------- | ------------------------- | -------------------------------------- |
| `click` | `function(event: object)` | Emits when the select icon is clicked. |
