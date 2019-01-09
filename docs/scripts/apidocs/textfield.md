```html
<ui-textfield><!-- the label text --></ui-textfield>
```

#### Props

| Name            | Type                | Default  | Description                                                                                                     |
| --------------- | ------------------- | -------- | --------------------------------------------------------------------------------------------------------------- |
| model (v-model) | `String`, `Number`  | `''`     | Mandatory.                                                                                                      |
| id              | `String`            | `null`   | The _id_ attribute of the `<input>` and the _for_ attribute of the `<label>`.                                   |
| placeholder     | `String`            | `null`   | The _placeholder_ attribute of the `<input>`.                                                                   |
| required        | `Boolean`           | `false`  | The _required_ attribute of the `<input>`.                                                                      |
| type            | `String`            | `'text'` | Text field supported types: `text`, `number`, `password` and `textarea`.                                        |
| pattern         | `String`            | `null`   | The _pattern_ attribute of the `<input>`.                                                                       |
| rows            | `Number`, `String`  | `1`      | The _rows_ attribute of the `<textarea>`.                                                                       |
| cols            | `Number`, `String`  | `20`     | The _cols_ attribute of the `<textarea>`.                                                                       |
| cssOnly         | `Boolean`           | `false`  | Ripple effect is disabled.                                                                                      |
| label           | `String`            | `null`   | A text caption or description for the text field, which use the input's `placeholder` attribute instead.        |
| outlined        | `Boolean`           | `false`  | Styles the text field as an outlined text field.                                                                |
| fullwidth       | `Boolean`           | `false`  | Styles the text field as a full width text field.                                                               |
| disabled        | `Boolean`           | `false`  | Styles the text field as a disabled text field.                                                                 |
| dense           | `Boolean`           | `false`  | Styles the text field as a dense text field.                                                                    |
| leadingIcon     | `Boolean`, `String` | `false`  | Styles the text field as a text field with a leading icon. Applicable only for the box or outlined text field.  |
| trailingIcon    | `Boolean`, `String` | `false`  | Styles the text field as a text field with a trailing icon. Applicable only for the box or outlined text field. |
| helptextId      | `String`            | `null`   | The _id_ attribute of the `<ui-textfield-helptext>`.                                                            |
| attrs           | `Object`            | `null`   | Other attributes for `<input>` or `<textarea>`.                                                                 |

#### Slots

| Name      | Description                                          | `slot-scope`          |
| --------- | ---------------------------------------------------- | --------------------- |
| (default) | The default slot holds the label for the text field. |                       |
| before    | The before slot holds a custom leading icon.         | `{ customIconClass }` |
| after     | The before slot holds a custom trailing icon.        | `{ customIconClass }` |

#### Events

| Name    | Type                      | Description                                               |
| ------- | ------------------------- | --------------------------------------------------------- |
| focus   | `Function(event: object)` | Emits when the text field is focused.                     |
| keydown | `Function(event: object)` | Emits when a key is pressed in the text field.            |
| input   | `Function(model: string)` | Emits when the text field value is changed.               |
| change  | `Function(event: object)` | Emits when a change in the text field value is committed. |
| enter   | `Function(model: string)` | Emits when the _Enter_ key is pressed in the input.       |
| blur    | `Function(event: object)` | Emits when the text field loses focus.                    |

> NOTE: If you are not using `v-model`, you should listen for the text field using `@input` and update the `model` prop.

```html
// Automatic
<ui-textfield v-model="value"></ui-textfield>

// Manual
<ui-textfield
  :model="value"
  @input="$balmUI.onChange('value', $event)"
></ui-textfield>
```

#### Sass Variables

Coming Soon...
