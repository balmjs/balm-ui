```html
<ui-checkbox><!-- the label text --></ui-checkbox>
```

#### Props

| Name                | Type           | Default | Description                                                                   |
| ------------------- | -------------- | ------- | ----------------------------------------------------------------------------- |
| `model` (`v-model`) | boolean, array | `false` | Mandatory.                                                                    |
| `indeterminate`     | boolean        | `false` | Styles the checkbox as an indeterminate checkbox.                             |
| `disabled`          | boolean        | `false` | Styles the checkbox as a disabled checkbox.                                   |
| `id`                | string         | `null`  | The _id_ attribute of the `<input>` and the _for_ attribute of the `<label>`. |
| `name`              | string         | `null`  | The _name_ attribute of the `<input>`.                                        |
| `value`             | string, number | `null`  | The _value_ attribute of the `<input>`.                                       |
| `cssOnly`           | boolean        | `false` | Ripple effect is disabled.                                                    |
| `label`             | string         | `null`  | A text caption or description for the checkbox.                               |
| `attrs`             | object         | `null`  | Other attributes for `<input>`.                                               |
| `noLabel`           | boolean        | `false` | The checkbox without the label.                                               |

#### Slots

| Name      | Slots | Description                                        |
| --------- | ----- | -------------------------------------------------- |
| `default` |       | The default slot holds the label for the checkbox. |

#### Events

| Name     | Type                              | Description                         |
| -------- | --------------------------------- | ----------------------------------- |
| `change` | `function(model: boolean\|array)` | Emits when the checkbox is changed. |

> NOTE: If you are not using `v-model`, you should listen for the checkbox using `@change` and update the `model` prop.

```html
// Automatic
<ui-checkbox v-model="value"></ui-checkbox>

// Manual
<ui-checkbox :model="value" @change="$balmUI.onChange('value', $event)"></ui-checkbox>
```
