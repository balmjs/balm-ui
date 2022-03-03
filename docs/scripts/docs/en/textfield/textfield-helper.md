```html
<ui-textfield-helper><!-- the helper text --></ui-textfield-helper>
```

### Props

| Name          | Type            | Default | Description                                                                     |
| ------------- | --------------- | ------- | ------------------------------------------------------------------------------- |
| `id`          | string          | `null`  | Mandatory. (Corresponding to the `helperTextId` prop matching `<ui-textfield>`) |
| `visible`     | boolean         | `false` | Makes the helper text permanently visible.                                      |
| `withCounter` | boolean         | `false` | Show character counter. (The `maxlength` prop of `<ui-textfield>` is required)  |
| `validMsg`    | string, boolean | `false` | Indicates the helper text is a validation message.                              |

> NOTE: Do not insert any tags between `<ui-textfield>` and `<ui-textfield-helper>` with counter

```html
<!-- Single line text field -->
<ui-form-field>
  <ui-textfield maxlength="40"></ui-textfield>
  <ui-textfield-helper with-counter></ui-textfield-helper>
</ui-form-field>

<!-- Single line text field with an internal character counter -->
<ui-form-field>
  <ui-textfield maxlength="40" with-counter></ui-textfield>
</ui-form-field>
```

### Slots

| Name      | Props | Description                                                             |
| --------- | ----- | ----------------------------------------------------------------------- |
| `default` |       | The default slot holds the text field helper text and can contain HTML. |
