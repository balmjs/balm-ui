```html
<ui-select><!-- the label text --></ui-select>
```

**`<ui-select>` Types**

- `0`: `'filled'`
- `1`: `'outlined'`

### Props

| Name                     | Type           | Default                              | Description                                                                                 | Version |
| ------------------------ | -------------- | ------------------------------------ | ------------------------------------------------------------------------------------------- | ------- |
| `type`                   | string, number | `0`                                  | Mandatory. Enhanced select types.                                                           |         |
| `outlined`               | boolean        | `false`                              | Styles the select as an outlined select. (Equivalent to `type=1`)                           |         |
| `modelValue` (`v-model`) | string, number | `''`                                 | The `value` of the currently selected option.                                               |         |
| `options`                | array          | `[]`                                 | An array of options to show to the user. (Default option format: `{ label, value }`)        |         |
| `optionFormat`           | object         | `{ label: 'label', value: 'value' }` | Defines the option data format.                                                             | 9.34.0  |
| `defaultLabel`           | string         | `''`                                 | Placeholder item label.                                                                     |         |
| `defaultValue`           | string, number | `''`                                 | Placeholder item value.                                                                     |         |
| `label`                  | string         | `''`                                 | A text caption or description for the select.                                               |         |
| `disabled`               | boolean        | `false`                              | Styles the select as disabled.                                                              |         |
| `required`               | boolean        | `false`                              | Styles the select as required.                                                              |         |
| `fullwidth`              | boolean        | `false`                              | Optional. Styles the select as full width select.                                           |         |
| `icon`                   | string         | `''`                                 | Optional. Indicates an icon element with a leading icon. See [Material Icons](/icons) list. |         |
| `withLeadingIcon`        | boolean        | `false`                              | Styles the select as a select with a leading icon.                                          |         |
| `helperTextId`           | string         | `null`                               | Required for the _id_ attribute of the `<ui-select-helper>`.                                |         |

> NOTE: `withLeadingIcon` is only used for (**non `<ui-select-icon>`**) custom leading icon, and generally do not need to be configured.

> ⚠️ The prop `optionLabel` and `optionValue` is deprecated, use `optionFormat` instead in `9.34.0`.

### Slots

| Name            | Props       | Description                                      |
| --------------- | ----------- | ------------------------------------------------ |
| `default`       |             | The default slot holds the label for the select. |
| `icon`          | `iconClass` | The icon slot holds a custom leading icon.       |
| `dropdown-icon` |             | Custom dropdown icon.                            |

### Events

| Name                | Type                              | Description                             |
| ------------------- | --------------------------------- | --------------------------------------- |
| `update:modelValue` | `function(value: string\|number)` | Emits when the select value is changed. |
| `selected`          | `function(option: object)`        | Emits when an option item is selected.  |

> NOTE: If you are not using `v-model`, you should listen for the select using `@update:modelValue` and update the `modelValue` prop.

- Automatic

  ```html
  <ui-select v-model="value"></ui-select>
  ```

- Manual

  ```html
  <ui-select
    :model-value="value"
    @update:model-value="balmUI.onChange('value', $event)"
  ></ui-select>
  ```
