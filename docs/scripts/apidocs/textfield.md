### Props

| Name                    | Type               | Default | Description                                                                                              |
| ----------------------- | ------------------ | ------- | -------------------------------------------------------------------------------------------------------- |
| model (v-model)         | `String`, `Number` | `''`    | Mandatory.                                                                                               |
| id                      | `String`           | `null`  | The _id_ attribute of the `<input>` and the _for_ attribute of the `<label>`.                            |
| placeholder             | `String`           | `null`  | The _placeholder_ attribute of the `<input>`.                                                            |
| required                | `Boolean`          | `false` | The _required_ attribute of the `<input>`.                                                               |
| type                    | `String`           | `text`  | Text field supports text, number, and password input types.                                              |
| pattern                 | `String`           | `null`  | The _pattern_ attribute of the `<input>`.                                                                |
| rows                    | `Number`, `String` | `1`     | The _rows_ attribute of the `<textarea>`.                                                                |
| cols                    | `Number`, `String` | `20`    | The _cols_ attribute of the `<textarea>`.                                                                |
| cssOnly                 | `Boolean`          | `false` | Ripple effect is disabled.                                                                               |
| label                   | `String`           | `''`    | A text caption or description for the text field, which use the input's `placeholder` attribute instead. |
| box                     | `Boolean`          | `false` | Styles the text field as a box text field.                                                               |
| outlined                | `Boolean`          | `false` | Styles the text field as an outlined text field.                                                         |
| fullwidth               | `Boolean`          | `false` | Styles the text field as a full width text field.                                                        |
| disabled                | `Boolean`          | `false` | Styles the text field as a disabled text field.                                                          |
| dense                   | `Boolean`          | `false` | Styles the text field as a dense text field.                                                             |
| leadingIcon             | `String`           | `null`  | Styles the text field as a text field with a leading icon.                                               |
| leadingIconUnclickable  | `Boolean`          | `false` |                                                                                                          |
| trailingIcon            | `String`           | `null`  | Styles the text field as a text field with a trailing icon.                                              |
| trailingIconUnclickable | `Boolean`          | `false` |                                                                                                          |
| helptextId              | `String`           | `null`  | The _id_ attribute of the `<ui-textfield-helptext>`.                                                     |

### Slots

| Name      | Description                                      |
| --------- | ------------------------------------------------ |
| (default) | The default slot holds the label for text field. |
| before    | The before slot holds a custom leading icon.     |
| after     | The before slot holds a custom trailing icon.    |

### Events

| Name        | Type                              | Description                                                                        |
| ----------- | --------------------------------- | ---------------------------------------------------------------------------------- |
| focus       | `Function(event: object)`         | Emits when the text field is focused.                                              |
| keydown     | `Function(event: object)`         | Emits when a key is pressed in the text field.                                     |
| input       | `Function(model: string)`         | Emits when the text field value is changed.                                        |
| change      | `Function(event: object)`         | Emits when a change in the text field value is committed.                          |
| enter       | `Function(model: string)`         | Emits when the _Enter_ key is pressed in the input.                                |
| blur        | `Function(validityState: object)` | Emits when the text field loses focus.                                             |
| icon-action | `Function(type: number)`          | Emits when the text field icon is clicked. (`0`: leading icon, `1`: trailing-icon) |

> NOTE: If you are not using `v-model`, you should listen for the text field using `@input` and update the `model` prop.
