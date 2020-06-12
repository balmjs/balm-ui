```html
<ui-select><!-- the label text --></ui-select>
```

### `<ui-select>` Types

- `0`: `'filled'`
- `1`: `'outlined'`

#### Props

| Name                | Type           | Default   | Description                                                                                   |
| ------------------- | -------------- | --------- | --------------------------------------------------------------------------------------------- |
| `type`              | string, number | `0`       | Mandatory. Enhanced select types.                                                             |
| `outlined`          | boolean        | `false`   | Styles the select as an outlined select. (Equivalent to `type=1`)                             |
| `model` (`v-model`) | string, number | `''`      | The `value` of the currently selected option.                                                 |
| `options`           | array          | `[]`      | An array of options to show to the user.                                                      |
| `optionLabel`       | string         | `'label'` | Option item label's name of the `options`.                                                    |
| `optionValue`       | string         | `'value'` | Option item value's name of the `options`.                                                    |
| `defaultLabel`      | string         | `''`      | Placeholder item label.                                                                       |
| `defaultValue`      | string, number | `''`      | Placeholder item value.                                                                       |
| `required`          | boolean        | `false`   | Styles the select as required.                                                                |
| `disabled`          | boolean        | `false`   | Styles the select as disabled.                                                                |
| `label`             | string         | `''`      | A text caption or description for the select.                                                 |
| `noLabel`           | boolean        | `false`   | Styles the select as a select without a label.                                                |
| `icon`              | string         | `''`      | Optional. Indicates an icon element with a leading icon. See [Material Icons](/#/icons) list. |
| `withLeadingIcon`   | boolean        | `false`   | Styles the select as a select with a leading icon.                                            |
| `fullwidth`         | boolean        | `false`   | Optional. Styles the select as fullwidth select.                                              |
| `helperTextId`      | string         | `''`      | Required for the _id_ attribute of the `<ui-select-helper>`.                                  |

> NOTE: `withLeadingIcon` is only used for (**non `<ui-select-icon>`**) custom leading icon, and generally do not need to be configured.

#### Slots

| Name            | Props       | Description                                      |
| --------------- | ----------- | ------------------------------------------------ |
| `default`       |             | The default slot holds the label for the select. |
| `dropdown-icon` | `iconClass` | Custom dropdown icon. (New in `6.9.0`)           |

#### Events

| Name       | Type                              | Description                             |
| ---------- | --------------------------------- | --------------------------------------- |
| `change`   | `function(model: string\|number)` | Emits when the select value is changed. |
| `selected` | `function(option: object)`        | Emits when an option item is selected.  |

> NOTE: If you are not using `v-model`, you should listen for the select using `@change` and update the `model` prop.

- Automatic
  ```html
  <ui-select v-model="value"></ui-select>
  ```
- Manual
  ```html
  <ui-select
    :model="value"
    @change="$balmUI.onChange('value', $event)"
  ></ui-select>
  ```
