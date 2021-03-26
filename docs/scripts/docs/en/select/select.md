```html
<ui-select><!-- the label text --></ui-select>
```

**`<ui-select>` Types**

- `0`: `'filled'`
- `1`: `'outlined'`

### Props

| Name                | Type           | Default   | Description                                                                                   | Version |
| ------------------- | -------------- | --------- | --------------------------------------------------------------------------------------------- | ------- |
| `type`              | string, number | `0`       | Mandatory. Enhanced select types.                                                             |         |
| `outlined`          | boolean        | `false`   | Styles the select as an outlined select. (Equivalent to `type=1`)                             |         |
| `model` (`v-model`) | string, number | `''`      | The `value` of the currently selected option.                                                 |         |
| `options`           | array          | `[]`      | An array of options to show to the user. (Default option format: `{ label, value }`)          |         |
| `optionLabel`       | string         | `'label'` | Option item label's key field name of the `options`.                                          |         |
| `optionValue`       | string         | `'value'` | Option item value's key field name of the `options`.                                          |         |
| `defaultLabel`      | string         | `''`      | Placeholder item label.                                                                       |         |
| `defaultValue`      | string, number | `''`      | Placeholder item value.                                                                       |         |
| `label`             | string         | `''`      | A text caption or description for the select.                                                 |         |
| `disabled`          | boolean        | `false`   | Styles the select as disabled.                                                                |         |
| `required`          | boolean        | `false`   | Styles the select as required.                                                                |         |
| `fullwidth`         | boolean        | `false`   | Optional. Styles the select as fullwidth select.                                              |         |
| `icon`              | string         | `''`      | Optional. Indicates an icon element with a leading icon. See [Material Icons](/#/icons) list. |         |
| `withLeadingIcon`   | boolean        | `false`   | Styles the select as a select with a leading icon.                                            |         |
| `fixed`             | boolean        | `false`   | Optional. Styles the select as fixed select.                                                  | 8.12.0  |
| `helperTextId`      | string         | `null`    | Required for the _id_ attribute of the `<ui-select-helper>`.                                  |         |

> NOTE: `withLeadingIcon` is only used for (**non `<ui-select-icon>`**) custom leading icon, and generally do not need to be configured.

> ⚠️ NOTE: `fixed` is only used for overflow inside of some component. Set an explicit width by `data-width` attribute or custom styles. In general, please don't use the `fixed`.

### Slots

| Name            | Props       | Description                                      | Version |
| --------------- | ----------- | ------------------------------------------------ | ------- |
| `default`       |             | The default slot holds the label for the select. |         |
| `icon`          | `iconClass` | The icon slot holds a custom leading icon.       |         |
| `dropdown-icon` |             | Custom dropdown icon.                            | `6.9.0` |

### Events

| Name       | Type                              | Description                             |
| ---------- | --------------------------------- | --------------------------------------- |
| `change`   | `function(value: string\|number)` | Emits when the select value is changed. |
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
