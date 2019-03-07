```html
<ui-autocomplete></ui-autocomplete>
```

#### Props

| Name                | Type           | Default    | Description                                                                                                                                                                                                                             |
| ------------------- | -------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `model` (`v-model`) | string, number | `''`       | Mandatory.                                                                                                                                                                                                                              |
| `source`            | array          | (required) | Defines the data to use, must be specified.                                                                                                                                                                                             |
| `placeholder`       | string         | `null`     | The _placeholder_ attribute of the `<input>`.                                                                                                                                                                                           |
| `disabled`          | boolean        | `false`    | Styles the autocomplete as a disabled text field.                                                                                                                                                                                       |
| `autofocus`         | boolean        | `false`    | If set to `true` the first item will automatically be focused when the menu is shown.                                                                                                                                                   |
| `delay`             | number, string | `300`      | The delay in milliseconds between when a keystroke occurs and when a search is performed. A zero-delay makes sense for local data (more responsive), but can produce a lot of load for remote data, while being less responsive.        |
| `minlength`         | number, string | `1`        | The minimum number of characters a user must type before a search is performed. Zero is useful for local data with just a few items, but a higher value should be used when a single character search could match a few thousand items. |
| `remote`            | boolean        | `false`    | Get data by AJAX. Default usage for local data.                                                                                                                                                                                         |

- **`source`** prop. There are two supported formats:
  - An array of strings: `[ 'Choice1', 'Choice2' ]`
  - An array of objects with `label` and `value` properties: `[ { label: 'Choice1', value: 'value1' }, ... ]`

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

```html
// Automatic
<ui-autocomplete v-model="value"></ui-autocomplete>

// Manual
<ui-autocomplete :model="value" @input="$balmUI.onChange('value', $event)"></ui-autocomplete>
```

#### Sass Variables

- `$mdc-autocomplete-outlined-idle-border`
- `$mdc-autocomplete-item-selected-bgcolor`
