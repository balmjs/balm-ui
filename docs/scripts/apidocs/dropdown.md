```html
<ui-dropdown></ui-dropdown>
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
| `disabled`          | boolean        | `false`   | Styles the select as disabled.                                                                                                                   |

#### Slots

| Name      | Slots | Description                                                      |
| --------- | ----- | ---------------------------------------------------------------- |
| `default` |       | The default slot holds the selected label text for the dropdown. |
| `icon`    |       | The icon slot holds an expand icon for the dropdown .            |

#### Events

| Name       | Type                              | Description                               |
| ---------- | --------------------------------- | ----------------------------------------- |
| `change`   | `function(model: string\|number)` | Emits when the dropdown value is changed. |
| `selected` | `function(option: object)`        | Emits when an option is selected.         |
| `cancel`   | `function()`                      | Emits when the dropdown is closed.        |

> NOTE: If you are not using `v-model`, you should listen for the dropdown using `@change` and update the `model` prop.

```html
// Automatic
<ui-dropdown v-model="value"></ui-dropdown>

// Manual
<ui-dropdown :model="value" @change="$balmUI.onChange('value', $event)"></ui-dropdown>
```

#### Sass Variables

- `$mdc-dropdown-min-width`
- `$mdc-dropdown-height`
- `$mdc-dropdown-outlined-idle-border`
- `$mdc-dropdown-outlined-hover-border`
