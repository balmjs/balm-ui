```html
<ui-radio><!-- the label text --></ui-radio>
```

#### Props

| Name                | Type           | Default | Description                                                                   |
| ------------------- | -------------- | ------- | ----------------------------------------------------------------------------- |
| `model` (`v-model`) | string, number | `null`  | Mandatory.                                                                    |
| `disabled`          | boolean        | `false` | Styles the radio button as a disabled radio button.                           |
| `id`                | string         | `null`  | The _id_ attribute of the `<input>` and the _for_ attribute of the `<label>`. |
| `name`              | string         | `null`  | The _name_ attribute of the `<input>`.                                        |
| `value`             | string, number | `null`  | The _value_ attribute of the `<input>`.                                       |
| `cssOnly`           | boolean        | `false` | Ripple effect is disabled.                                                    |
| `label`             | string         | `null`  | A text caption or description for the radio button.                           |
| `attrs`             | object         | `null`  | Other attributes for `<input>`.                                               |
| `noLabel`           | boolean        | `false` | The radio button without the label.                                           |

#### Slots

| Name      | Slots | Description                                            |
| --------- | ----- | ------------------------------------------------------ |
| `default` |       | The default slot holds the label for the radio button. |

#### Events

| Name     | Type                              | Description                             |
| -------- | --------------------------------- | --------------------------------------- |
| `change` | `function(model: string\|number)` | Emits when the radio button is changed. |

> NOTE: If you are not using `v-model`, you should listen for the radio using `@change` and update the `model` prop.

```html
// Automatic
<ui-radio v-model="value"></ui-radio>

// Manual
<ui-radio :model="value" @change="$balmUI.onChange('value', $event)"></ui-radio>
```
