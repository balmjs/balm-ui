```html
<ui-select-helper><!-- the helper text --></ui-select-helper>
```

### Props

| Name       | Type            | Default | Description                                                                  |
| ---------- | --------------- | ------- | ---------------------------------------------------------------------------- |
| `id`       | string          | `null`  | Mandatory. (Corresponding to the `helperTextId` prop matching `<ui-select>`) |
| `visible`  | boolean         | `false` | Makes the helper text permanently visible.                                   |
| `validMsg` | string, boolean | `false` | Indicates the helper text is a validation message.                           |

### Slots

| Name      | Props | Description                                                         |
| --------- | ----- | ------------------------------------------------------------------- |
| `default` |       | The default slot holds the select helper text and can contain HTML. |
