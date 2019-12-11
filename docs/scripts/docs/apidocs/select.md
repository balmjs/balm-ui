```html
<ui-select><!-- the label text --></ui-select>
```

### `<ui-select>` Types

- `0`: `'filled'`
- `1`: `'outlined'`

#### Props

| Name                | Type            | Default   | Description                                                                                                                                      |
| ------------------- | --------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`              | string, number  | `0`       | Mandatory. Enhanced select types.                                                                                                                |
| `outlined`          | boolean         | `false`   | Styles the select as an outlined select. (Equivalent to `type=1`)                                                                                |
| `model` (`v-model`) | string, number  | `null`    | The `value` of the currently selected option.                                                                                                    |
| `selectedIndex`     | number          | `-1`      | The index of the currently selected option. Set to -1 if no option is currently selected. Changing this property will update the select element. |
| `options`           | array           | `[]`      | An array of options to show to the user.                                                                                                         |
| `optionLabel`       | string          | `'label'` | Option item label's name of the `options`.                                                                                                       |
| `optionValue`       | string          | `'value'` | Option item value's name of the `options`.                                                                                                       |
| `defaultLabel`      | string          | `null`    | Placeholder item label.                                                                                                                          |
| `defaultValue`      | string, number  | `''`      | Placeholder item value.                                                                                                                          |
| `required`          | boolean         | `false`   | Styles the select as required.                                                                                                                   |
| `disabled`          | boolean         | `false`   | Styles the select as disabled.                                                                                                                   |
| `label`             | string          | `null`    | A text caption or description for the select.                                                                                                    |
| `noLabel`           | boolean         | `false`   | Styles the select as a select without a label.                                                                                                   |
| `icon`              | string          | `''`      | Optional. Indicates an icon element with a leading icon. See [Material Icons](/#/icons) list. (No need to configure `leadingIcon`)               |
| `leadingIcon`       | boolean, string | `false`   | Styles the select as a select with a leading icon. (Use with `icon` slot)                                                                        |
| `helperTextId`      | string          | `null`    | Required for the _id_ attribute of the `<ui-select-helper>`.                                                                                     |

#### Slots

| Name      | Slots | Description                                      |
| --------- | ----- | ------------------------------------------------ |
| `default` |       | The default slot holds the label for the select. |

#### Events

| Name       | Type                              | Description                             |
| ---------- | --------------------------------- | --------------------------------------- |
| `change`   | `function(model: string\|number)` | Emits when the select value is changed. |
| `selected` | `function(option: object)`        | Emits when an option item is selected.  |

> NOTE: If you are not using `v-model`, you should listen for the select using `@change` and update the `model` prop.

```html
// Automatic
<ui-select v-model="value"></ui-select>

// Manual
<ui-select
  :model="value"
  @change="$balmUI.onChange('value', $event)"
></ui-select>
```
