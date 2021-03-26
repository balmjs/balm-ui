```html
<ui-textfield><!-- the label text --></ui-textfield>
```

**`<ui-textfield>` Types**

- `0`: `'filled'`
- `1`: `'outlined'`

### Props

| Name                | Type           | Default  | Description                                                                                              |
| ------------------- | -------------- | -------- | -------------------------------------------------------------------------------------------------------- |
| `type`              | string, number | `0`      | Mandatory. Text field types.                                                                             |
| `outlined`          | boolean        | `false`  | Styles the text field as an outlined text field. (`label` or `placeholder` required)                     |
| `model` (`v-model`) | string, number | `''`     | Mandatory.                                                                                               |
| `inputType`         | string         | `'text'` | Native `<input>` types: `text`, `number`, `password`, etc.                                               |
| `inputId`           | string         | `null`   | The _id_ attribute of the `<input>` and the _for_ attribute of the `<label>`.                            |
| `label`             | string         | `''`     | A text caption or description for the text field, which use the input's `placeholder` attribute instead. |
| `placeholder`       | string         | `null`   | The _placeholder_ attribute of the `<input>`.                                                            |
| `disabled`          | boolean        | `false`  | Styles the text field as a disabled text field.                                                          |
| `required`          | boolean        | `false`  | Styles the text field as a required text field.                                                          |
| `fullwidth`         | boolean        | `false`  | Styles the text field as a full width text field.                                                        |
| `endAligned`        | boolean        | `false`  | Styles the text field with an end-aligned input.                                                         |
| `icon`              | string         | `''`     | Optional. Indicates an icon element with a leading icon. See [Material Icons](/#/icons) list.            |
| `withLeadingIcon`   | boolean        | `false`  | Styles the text field as a text field with a leading icon.                                               |
| `withTrailingIcon`  | boolean        | `false`  | Styles the text field as a text field with a trailing icon.                                              |
| `prefixText`        | string         | `''`     | Sets the text content of the prefix.                                                                     |
| `suffixText`        | string         | `''`     | sets the text content of the suffix.                                                                     |
| `withCounter`       | boolean        | `false`  | Styles the text area as a text area with an internal character counter.                                  |
| `helperTextId`      | string         | `null`   | Required for the _id_ attribute of the `<ui-textfield-helper>`.                                          |
| `attrs`             | object         | `{}`     | Other attributes for `<input>` or `<textarea>`.                                                          |

> NOTE: `withLeadingIcon` and `withTrailingIcon` are only used for (**non `<ui-textfield-icon>`**) custom leading/trailing icons, and generally do not need to be configured.

In addition to the above, the following properties proxy to the input or textarea elements' properties of the same name:

- `pattern`
- `minlength`
- `maxlength`: Required for character counter
- `min`
- `max`
- `step`
- `rows`
- `cols`

### Slots

| Name      | Props       | Description                                          |
| --------- | ----------- | ---------------------------------------------------- |
| `default` |             | The default slot holds the label for the text field. |
| `before`  | `iconClass` | The before slot holds a custom leading icon.         |
| `after`   | `iconClass` | The before slot holds a custom trailing icon.        |

### Events

| Name      | Type                      | Description                                               |
| --------- | ------------------------- | --------------------------------------------------------- |
| `focus`   | `function(event: object)` | Emits when the text field is focused.                     |
| `keydown` | `function(event: object)` | Emits when a key is pressed in the text field.            |
| `input`   | `function(value: string)` | Emits when the text field value is changed.               |
| `change`  | `function(event: object)` | Emits when a change in the text field value is committed. |
| `enter`   | `function(value: string)` | Emits when the _Enter_ key is pressed in the input.       |
| `blur`    | `function(event: object)` | Emits when the text field loses focus.                    |

> NOTE: If you are not using `v-model`, you should listen for the text field using `@input` and update the `model` prop.

- Automatic

  ```html
  <ui-textfield v-model="value"></ui-textfield>
  ```

- Manual

  ```html
  <ui-textfield
    :model="value"
    @input="$balmUI.onChange('value', $event)"
  ></ui-textfield>
  ```
