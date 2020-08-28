```html
<ui-textfield-helper><!-- the helper text --></ui-textfield-helper>
```

### Props

| Name                   | Type            | Default | Description                                        |
| ---------------------- | --------------- | ------- | -------------------------------------------------- |
| `validMsg` (`v-model`) | string, boolean | `false` | Indicates the helper text is a validation message. |
| `id`                   | string          | `null`  | Mandatory.                                         |
| `visible`              | boolean         | `false` | Makes the helper text permanently visible.         |
| `withCounter`          | boolean         | `false` | Show character counter.                            |

> `maxlength` is required for `withCounter`.

```html
<!-- Single line text field -->
<ui-textfield maxlength="40"></ui-textfield>
<ui-textfield-helper withCounter></ui-textfield-helper>

<!-- Single line text field with an internal character counter -->
<ui-textfield maxlength="40" withCounter></ui-textfield>
```

### Slots

| Name      | Props | Description                                                             |
| --------- | ----- | ----------------------------------------------------------------------- |
| `default` |       | The default slot holds the text field helper text and can contain HTML. |
