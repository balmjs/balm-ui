```html
<ui-autocomplete></ui-autocomplete>
```

### Props

| Name                     | Type            | Default                              | Description                                                                                                                                                                                                                             | Version |
| ------------------------ | --------------- | ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `outlined`               | boolean         | `false`                              | Styles the autocomplete as an outlined text field. (`label` or `placeholder` required)                                                                                                                                                  |         |
| `modelValue` (`v-model`) | string, number  | `''`                                 | Mandatory.                                                                                                                                                                                                                              |         |
| `source`                 | array           | `[]`                                 | Defines the data to use, must be specified.                                                                                                                                                                                             |         |
| `sourceFormat`           | object          | `{ label: 'label', value: 'value' }` | Defines the data source format.                                                                                                                                                                                                         | 9.3.0   |
| `inputId`                | string          | `null`                               | The _id_ attribute of the `<input>` and the _for_ attribute of the `<label>`.                                                                                                                                                           |         |
| `label`                  | string          | `''`                                 | A text caption or description for the autocomplete, which use the input's `placeholder` attribute instead.                                                                                                                              |         |
| `placeholder`            | string          | `null`                               | The _placeholder_ attribute of the `<input>`.                                                                                                                                                                                           |         |
| `disabled`               | boolean         | `false`                              | Styles the autocomplete as a disabled text field.                                                                                                                                                                                       |         |
| `required`               | boolean         | `false`                              | Styles the autocomplete as a required text field.                                                                                                                                                                                       |         |
| `autofocus`              | boolean         | `false`                              | If set to `true` the first item will automatically be focused when the menu is shown.                                                                                                                                                   |         |
| `delay`                  | number          | `300`                                | The delay in milliseconds between when a keystroke occurs and when a search is performed. A zero-delay makes sense for local data (more responsive), but can produce a lot of load for remote data, while being less responsive.        |         |
| `minlength`              | number          | `1`                                  | The minimum number of characters a user must type before a search is performed. Zero is useful for local data with just a few items, but a higher value should be used when a single character search could match a few thousand items. |         |
| `remote`                 | boolean         | `false`                              | Get data by AJAX. Default usage for local data.                                                                                                                                                                                         |         |
| `highlight`              | boolean         | `false`                              | Styles the autocomplete suggestion value as a strong text.                                                                                                                                                                              | 9.3.0   |
| `fullwidth`              | boolean         | `false`                              | Styles the autocomplete as a full width text field.                                                                                                                                                                                     |         |
| `endAligned`             | boolean         | `false`                              | Styles the autocomplete with an end-aligned input.                                                                                                                                                                                      |         |
| `icon`                   | string          | `''`                                 | Optional. Indicates an icon element with a leading icon. See [Material Icons](/#/icons) list. (No need to configure `withLeadingIcon`)                                                                                                  |         |
| `withLeadingIcon`        | boolean, string | `false`                              | Styles the autocomplete as a text field with a leading icon. (Use with `before` slot)                                                                                                                                                   |         |
| `withTrailingIcon`       | boolean, string | `false`                              | Styles the autocomplete as a text field with a trailing icon. (Use with `after` slot)                                                                                                                                                   |         |

- **`source`** prop. There are two supported formats:
  - String array: `[ 'Choice1', 'Choice2' ]`
  - Object array (The object must contain `label` and `value` key): `[ { label: 'Choice1', value: 'value1' }, ... ]`
    > You can customize your properties by `sourceFormat` prop

### Slots

| Name      | Props       | Description                                            |
| --------- | ----------- | ------------------------------------------------------ |
| `default` |             | The default slot holds the label for the autocomplete. |
| `before`  | `iconClass` | The before slot holds a custom leading icon.           |
| `after`   | `iconClass` | The before slot holds a custom trailing icon.          |

### Events

| Name                | Type                              | Description                                                                                  |
| ------------------- | --------------------------------- | -------------------------------------------------------------------------------------------- |
| `update:modelValue` | `function(value: string\|number)` | Emits when the autocomplete value is changed.                                                |
| `search`            | `function(keywords: string)`      | Emits when the autocomplete value is changed. Applicable only for the `remote` autocomplete. |
| `selected`          | `function(item: object)`          | Emits when the autocomplete item is selected.                                                |

- `selected` event return data:

  ```js
  {
    label: 'Choice 1',
    value: 'value 1',
    // more custom fields
  }
  ```

> NOTE: If you are not using `v-model`, you should listen for the autocomplete using `@update:modelValue` and update the `modelValue` prop.

- Automatic

  ```html
  <ui-autocomplete v-model="value"></ui-autocomplete>
  ```

- Manual

  ```html
  <ui-autocomplete
    :model-value="value"
    @update:modelValue="balmUI.onChange('value', $event)"
  ></ui-autocomplete>
  ```
