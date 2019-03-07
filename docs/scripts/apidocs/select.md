```html
<ui-select><!-- the label text --></ui-select>
```

#### Props

| Name                | Type           | Default   | Description                                                                                                                                      |
| ------------------- | -------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `model` (`v-model`) | string, number | `null`    | The `value` of the currently selected option.                                                                                                    |
| `options`           | array          | `[]`      | An array of options to show to the user.                                                                                                         |
| `optionLabel`       | string         | `'label'` | Option item label's name of the `options`.                                                                                                       |
| `optionValue`       | string         | `'value'` | Option item value's name of the `options`.                                                                                                       |
| `selectedIndex`     | number         | `0`       | The index of the currently selected option. Set to -1 if no option is currently selected. Changing this property will update the select element. |
| `defaultLabel`      | string         | `null`    | Placeholder item label.                                                                                                                          |
| `defaultValue`      | string, number | `''`      | Placeholder item value.                                                                                                                          |
| `id`                | string         | `null`    | The _id_ attribute of the `<select>` and the _for_ attribute of the `<label>`.                                                                   |
| `disabled`          | boolean        | `false`   | Styles the select as disabled.                                                                                                                   |
| `cssOnly`           | boolean        | `false`   | Ripple effect is disabled.                                                                                                                       |
| `label`             | string         | `null`    | A text caption or description for the select.                                                                                                    |
| `box`               | boolean        | `false`   | Styles the select as a box select.                                                                                                               |
| `outlined`          | boolean        | `false`   | Styles the select as an outlined select.                                                                                                         |
| `group`             | boolean        | `false`   | Creates a grouping of `options`.                                                                                                                 |
| `groupLabel`        | string         | `'label'` | Option label's name of the group `options`.                                                                                                      |
| `groupItems`        | string         | `'items'` | Option items's name of the group `options`.                                                                                                      |
| `attrs`             | object         | `null`    | Other attributes for `<select>`.                                                                                                                 |

#### Slots

| Name      | Slots | Description                                      |
| --------- | ----- | ------------------------------------------------ |
| `default` |       | The default slot holds the label for the select. |

#### Events

| Name       | Type                              | Description                             |
| ---------- | --------------------------------- | --------------------------------------- |
| `change`   | `function(model: string\|number)` | Emits when the select value is changed. |
| `selected` | `function(option: object)`        | Emits when an option is selected.       |

> NOTE: If you are not using `v-model`, you should listen for the select using `@change` and update the `model` prop.

```html
// Automatic
<ui-select v-model="value"></ui-select>

// Manual
<ui-select :model="value" @change="$balmUI.onChange('value', $event)"></ui-select>
```
