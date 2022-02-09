```html
<ui-textfield-helper><!-- the helper text --></ui-textfield-helper>
```

### Props

| Name                   | Type            | Default | Description                                                                     |
| ---------------------- | --------------- | ------- | ------------------------------------------------------------------------------- |
| `validMsg` (`v-model`) | string, boolean | `false` | Indicates the helper text is a validation message.                              |
| `id`                   | string          | `null`  | Mandatory. (Corresponding to the `helperTextId` prop matching `<ui-textfield>`) |
| `visible`              | boolean         | `false` | Makes the helper text permanently visible.                                      |
| `withCounter`          | boolean         | `false` | Show character counter. (The `maxlength` prop of `<ui-textfield>` is required)  |

> NOTE: Do not insert any tags between `<ui-textfield>` and `<ui-textfield-helper>` with counter

```html
<!-- Single line text field -->
<ui-textfield maxlength="40"></ui-textfield>
<ui-textfield-helper with-counter></ui-textfield-helper>

<!-- Single line text field with an internal character counter -->
<ui-textfield maxlength="40" with-counter></ui-textfield>
```

### Slots

| Name      | Props | Description                                                             |
| --------- | ----- | ----------------------------------------------------------------------- |
| `default` |       | The default slot holds the text field helper text and can contain HTML. |
