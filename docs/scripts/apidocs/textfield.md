```html
<ui-textfield><!-- the label text --></ui-textfield>
```

#### Props

| Name                | Type            | Default  | Description                                                                                                     |
| ------------------- | --------------- | -------- | --------------------------------------------------------------------------------------------------------------- |
| `model` (`v-model`) | string, number  | `''`     | Mandatory.                                                                                                      |
| `id`                | string          | `null`   | The _id_ attribute of the `<input>` and the _for_ attribute of the `<label>`.                                   |
| `placeholder`       | string          | `null`   | The _placeholder_ attribute of the `<input>`.                                                                   |
| `required`          | boolean         | `false`  | The _required_ attribute of the `<input>`.                                                                      |
| `maxlength`         | number, string  | `null`   | The _maxlength_ attribute of the `<input>` and `<textarea>`. (Required for character counter)                   |
| `type`              | string          | `'text'` | Text field supported types: `text`, number, `password` and `textarea`.                                          |
| `pattern`           | string          | `null`   | The _pattern_ attribute of the `<input>`.                                                                       |
| `rows`              | number, string  | `1`      | The _rows_ attribute of the `<textarea>`.                                                                       |
| `cols`              | number, string  | `20`     | The _cols_ attribute of the `<textarea>`.                                                                       |
| `label`             | string          | `null`   | A text caption or description for the text field, which use the input's `placeholder` attribute instead.        |
| `outlined`          | boolean         | `false`  | Styles the text field as an outlined text field.                                                                |
| `fullwidth`         | boolean         | `false`  | Styles the text field as a full width text field.                                                               |
| `disabled`          | boolean         | `false`  | Styles the text field as a disabled text field.                                                                 |
| `dense`             | boolean         | `false`  | Styles the text field as a dense text field.                                                                    |
| `leadingIcon`       | boolean, string | `false`  | Styles the text field as a text field with a leading icon. Applicable only for the box or outlined text field.  |
| `trailingIcon`      | boolean, string | `false`  | Styles the text field as a text field with a trailing icon. Applicable only for the box or outlined text field. |
| `noLabel`           | boolean         | `false`  | Styles the text field that has no label.                                                                        |
| `helptextId`        | string          | `null`   | The _id_ attribute of the `<ui-textfield-helptext>`.                                                            |
| `attrs`             | object          | `null`   | Other attributes for `<input>` or `<textarea>`.                                                                 |

#### Slots

| Name      | Slots                 | Description                                          |
| --------- | --------------------- | ---------------------------------------------------- |
| `default` |                       | The default slot holds the label for the text field. |
| `before`  | `{ customIconClass }` | The before slot holds a custom leading icon.         |
| `after`   | `{ customIconClass }` | The before slot holds a custom trailing icon.        |

#### Events

| Name      | Type                      | Description                                               |
| --------- | ------------------------- | --------------------------------------------------------- |
| `focus`   | `function(event: object)` | Emits when the text field is focused.                     |
| `keydown` | `function(event: object)` | Emits when a key is pressed in the text field.            |
| `input`   | `function(model: string)` | Emits when the text field value is changed.               |
| `change`  | `function(event: object)` | Emits when a change in the text field value is committed. |
| `enter`   | `function(model: string)` | Emits when the _Enter_ key is pressed in the input.       |
| `blur`    | `function(event: object)` | Emits when the text field loses focus.                    |

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
