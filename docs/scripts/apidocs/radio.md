```html
<ui-radio><!-- the label text --></ui-radio>
```

#### Props

| Name            | Type               | Default | Description                                                                   |
| --------------- | ------------------ | ------- | ----------------------------------------------------------------------------- |
| model (v-model) | `String`, `Number` | `null`  | Mandatory.                                                                    |
| disabled        | `Boolean`          | `false` | Styles the radio button as a disabled radio button.                           |
| id              | `String`           | `null`  | The _id_ attribute of the `<input>` and the _for_ attribute of the `<label>`. |
| name            | `String`           | `null`  | The _name_ attribute of the `<input>`.                                        |
| value           | `String`, `Number` | `null`  | The _value_ attribute of the `<input>`.                                       |
| cssOnly         | `Boolean`          | `false` | Ripple effect is disabled.                                                    |
| label           | `String`           | `null`  | A text caption or description for the radio button.                           |
| attrs           | `Object`           | `null`  | Other attributes for `<input>`.                                               |

#### Slots

| Name      | Description                                            |
| --------- | ------------------------------------------------------ |
| (default) | The default slot holds the label for the radio button. |

#### Events

| Name   | Type                              | Description                             |
| ------ | --------------------------------- | --------------------------------------- |
| change | `Function(model: string\|number)` | Emits when the radio button is changed. |

> NOTE: If you are not using `v-model`, you should listen for the radio using `@change` and update the `model` prop.

```html
// Automatic
<ui-radio v-model="value"></ui-radio>

// Manual
<ui-radio :model="value" @change="$balmUI.onChange('value', $event)"></ui-radio>
```
