```html
<ui-autocomplete></ui-autocomplete>
```

#### Props

| Name                | Type            | Default | Description                                                                                                                                                                                                                             |
| ------------------- | --------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `model` (`v-model`) | string, number  | `''`    | Mandatory.                                                                                                                                                                                                                              |
| `source`            | array           | `[]`    | Defines the data to use, must be specified.                                                                                                                                                                                             |
| `autofocus`         | boolean         | `false` | If set to `true` the first item will automatically be focused when the menu is shown.                                                                                                                                                   |
| `delay`             | number          | `300`   | The delay in milliseconds between when a keystroke occurs and when a search is performed. A zero-delay makes sense for local data (more responsive), but can produce a lot of load for remote data, while being less responsive.        |
| `minlength`         | number          | `1`     | The minimum number of characters a user must type before a search is performed. Zero is useful for local data with just a few items, but a higher value should be used when a single character search could match a few thousand items. |
| `remote`            | boolean         | `false` | Get data by AJAX. Default usage for local data.                                                                                                                                                                                         |
| `outlined`          | boolean         | `false` | Styles the autocomplete as an outlined text field. (`label` or `placeholder` required)                                                                                                                                                  |
| `id`                | string          | `null`  | The _id_ attribute of the `<input>` and the _for_ attribute of the `<label>`.                                                                                                                                                           |
| `label`             | string          | `''`    | A text caption or description for the autocomplete, which use the input's `placeholder` attribute instead.                                                                                                                              |
| `placeholder`       | string          | `null`  | The _placeholder_ attribute of the `<input>`.                                                                                                                                                                                           |
| `fullwidth`         | boolean         | `false` | Styles the autocomplete as a full width text field.                                                                                                                                                                                     |
| `disabled`          | boolean         | `false` | Styles the autocomplete as a disabled text field.                                                                                                                                                                                       |
| `withLeadingIcon`   | boolean, string | `false` | Styles the autocomplete as a text field with a leading icon. (Use with `before` slot)                                                                                                                                                   |
| `icon`              | string          | `''`    | Optional. Indicates an icon element with a leading icon. See [Material Icons](/#/icons) list. (No need to configure `withLeadingIcon`)                                                                                                  |
| `withTrailingIcon`  | boolean, string | `false` | Styles the autocomplete as a text field with a trailing icon. (Use with `after` slot)                                                                                                                                                   |

- **`source`** prop. There are two supported formats:
  - An array of strings: `[ 'Choice1', 'Choice2' ]`
  - An array of objects with `label` and `value` properties: `[ { label: 'Choice1', value: 'value1' }, ... ]`

#### Slots

| Name      | Props       | Description                                            |
| --------- | ----------- | ------------------------------------------------------ |
| `default` |             | The default slot holds the label for the autocomplete. |
| `before`  | `iconClass` | The before slot holds a custom leading icon.           |
| `after`   | `iconClass` | The before slot holds a custom trailing icon.          |

#### Events

| Name       | Type                              | Description                                                                                  |
| ---------- | --------------------------------- | -------------------------------------------------------------------------------------------- |
| `input`    | `function(model: string\|number)` | Emits when the autocomplete value is changed.                                                |
| `search`   | `function(keywords: string)`      | Emits when the autocomplete value is changed. Applicable only for the `remote` autocomplete. |
| `selected` | `function(item: object)`          | Emits when the autocomplete item is selected.                                                |

- `selected` event return data:

```js
{
  label: 'Choice 1',
  value: 'value 1'
}
```

> NOTE: If you are not using `v-model`, you should listen for the autocomplete using `@input` and update the `model` prop.

- Automatic
  ```html
  <ui-autocomplete v-model="value"></ui-autocomplete>
  ```
- Manual
  ```html
  <ui-autocomplete
    :model="value"
    @input="$balmUI.onChange('value', $event)"
  ></ui-autocomplete>
  ```
