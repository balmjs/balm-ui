```html
<ui-textfield-helptext><!-- the helper text --></ui-textfield-helptext>
```

#### Props

| Name       | Type    | Default    | Description                                        |
| ---------- | ------- | ---------- | -------------------------------------------------- |
| `id`       | string  | (required) | Mandatory.                                         |
| `visible`  | boolean | `false`    | Makes the helper text permanently visible.         |
| `validMsg` | boolean | `false`    | Indicates the helper text is a validation message. |

#### Slots

| Name      | Slots | Description                                                             |
| --------- | ----- | ----------------------------------------------------------------------- |
| `default` |       | The default slot holds the text field helper text and can contain HTML. |
