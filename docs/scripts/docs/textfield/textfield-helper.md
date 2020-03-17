```html
<ui-textfield-helper><!-- the helper text --></ui-textfield-helper>
```

#### Props

| Name       | Type            | Default    | Description                                        |
| ---------- | --------------- | ---------- | -------------------------------------------------- |
| `id`       | string          | (required) | Mandatory.                                         |
| `visible`  | boolean         | `false`    | Makes the helper text permanently visible.         |
| `validMsg` | boolean, string | `false`    | Indicates the helper text is a validation message. |

#### Slots

| Name      | Props | Description                                                             |
| --------- | ----- | ----------------------------------------------------------------------- |
| `default` |       | The default slot holds the text field helper text and can contain HTML. |
