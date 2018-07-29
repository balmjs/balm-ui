```html
<ui-select><!-- the label text --></ui-select>
```

#### Props

| Name            | Type               | Default   | Description                                                                                                                                      |
| --------------- | ------------------ | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| model (v-model) | `String`, `Number` | `null`    | The `value` of the currently selected option.                                                                                                    |
| options         | `Array`            | `[]`      | An array of options to show to the user.                                                                                                         |
| optionLabel     | `String`           | `'label'` | Option item label's name of the `options`.                                                                                                       |
| optionValue     | `String`           | `'value'` | Option item value's name of the `options`.                                                                                                       |
| selectedIndex   | `Number`           | `0`       | The index of the currently selected option. Set to -1 if no option is currently selected. Changing this property will update the select element. |
| defaultLabel    | `String`           | `null`    | Placeholder item label.                                                                                                                          |
| defaultValue    | `String`, `Number` | `''`      | Placeholder item value.                                                                                                                          |
| id              | `String`           | `null`    | The _id_ attribute of the `<select>` and the _for_ attribute of the `<label>`.                                                                   |
| disabled        | `Boolean`          | `false`   | Styles the select as disabled.                                                                                                                   |
| cssOnly         | `Boolean`          | `false`   | Ripple effect is disabled.                                                                                                                       |
| label           | `String`           | `null`    | A text caption or description for the select.                                                                                                    |
| box             | `Boolean`          | `false`   | Styles the select as a box select.                                                                                                               |
| outlined        | `Boolean`          | `false`   | Styles the select as an outlined select.                                                                                                         |
| group           | `Boolean`          | `false`   | Creates a grouping of `options`.                                                                                                                 |
| groupLabel      | `String`           | `'label'` | Option label's name of the group `options`.                                                                                                      |
| groupItems      | `String`           | `'items'` | Option items's name of the group `options`.                                                                                                      |
| attrs           | `Object`           | `null`    | Other attributes for `<select>`.                                                                                                                 |

#### Slots

| Name      | Description                                      |
| --------- | ------------------------------------------------ |
| (default) | The default slot holds the label for the select. |

#### Events

| Name     | Type                              | Description                             |
| -------- | --------------------------------- | --------------------------------------- |
| change   | `Function(model: string\|number)` | Emits when the select value is changed. |
| selected | `Function(option: object)`        | Emits when an option is selected.       |

> NOTE: If you are not using `v-model`, you should listen for the select using `@change` and update the `model` prop.

```html
// Automatic
<ui-select v-model="value"></ui-select>

// Manual
<ui-select :model="value" @change="$balmUI.onChange('value', $event)"></ui-select>
```
