```html
<ui-dropdown></ui-dropdown>
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
| disabled        | `Boolean`          | `false`   | Styles the select as disabled.                                                                                                                   |

#### Slots

| Name      | Description                                                      |
| --------- | ---------------------------------------------------------------- |
| (default) | The default slot holds the selected label text for the dropdown. |
| icon      | The icon slot holds an expand icon for the dropdown .            |

#### Events

| Name     | Type                              | Description                               |
| -------- | --------------------------------- | ----------------------------------------- |
| change   | `Function(model: string\|number)` | Emits when the dropdown value is changed. |
| selected | `Function(option: object)`        | Emits when an option is selected.         |
| cancel   | `Function()`                      | Emits when the dropdown is closed.        |

> NOTE: If you are not using `v-model`, you should listen for the dropdown using `@change` and update the `model` prop.

```html
// Automatic
<ui-dropdown v-model="value"></ui-dropdown>

// Manual
<ui-dropdown :model="value" @change="$balmUI.onChange('value', $event)"></ui-dropdown>
```
