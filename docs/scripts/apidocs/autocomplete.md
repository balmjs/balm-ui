```html
<ui-autocomplete></ui-autocomplete>
```

#### Props

| Name            | Type               | Default    | Description                                                                                                                                                                                                                             |
| --------------- | ------------------ | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| model (v-model) | `String`, `Number` | `''`       | Mandatory.                                                                                                                                                                                                                              |
| source          | `Array`            | (required) | Defines the data to use, must be specified.                                                                                                                                                                                             |
| placeholder     | `String`           | `null`     | The _placeholder_ attribute of the `<input>`.                                                                                                                                                                                           |
| disabled        | `Boolean`          | `false`    | Styles the autocomplete as a disabled text field.                                                                                                                                                                                       |
| autoFocus       | `Boolean`          | `false`    | If set to `true` the first item will automatically be focused when the menu is shown.                                                                                                                                                   |
| delay           | `Number`, `String` | `300`      | The delay in milliseconds between when a keystroke occurs and when a search is performed. A zero-delay makes sense for local data (more responsive), but can produce a lot of load for remote data, while being less responsive.        |
| minLength       | `Number`, `String` | `1`        | The minimum number of characters a user must type before a search is performed. Zero is useful for local data with just a few items, but a higher value should be used when a single character search could match a few thousand items. |
| remote          | `Boolean`          | `false`    | Get data by AJAX. Default usage for local data.                                                                                                                                                                                         |

- **`source`** prop. There are two supported formats:
  - An array of strings: `[ 'Choice1', 'Choice2' ]`
  - An array of objects with `label` and `value` properties: `[ { label: 'Choice1', value: 'value1' }, ... ]`

#### Events

| Name     | Type                              | Description                                                                                  |
| -------- | --------------------------------- | -------------------------------------------------------------------------------------------- |
| input    | `Function(model: string\|number)` | Emits when the autocomplete value is changed.                                                |
| search   | `Function(keywords: string)`      | Emits when the autocomplete value is changed. Applicable only for the `remote` autocomplete. |
| selected | `Function(item: object)`          | Emits when the autocomplete item is selected.                                                |

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
