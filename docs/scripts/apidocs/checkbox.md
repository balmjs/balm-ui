### `<ui-checkbox>`

#### Props

| Name            | Type               | Default | Description                                                                   |
| --------------- | ------------------ | ------- | ----------------------------------------------------------------------------- |
| model (v-model) | `Boolean`, `Array` | `false` | Mandatory.                                                                    |
| indeterminate   | `Boolean`          | `false` | Styles the checkbox as an indeterminate checkbox.                             |
| disabled        | `Boolean`          | `false` | Styles the checkbox as a disabled checkbox.                                   |
| id              | `String`           | `null`  | The _id_ attribute of the `<input>` and the _for_ attribute of the `<label>`. |
| name            | `String`           | `null`  | The _name_ attribute of the `<input>`.                                        |
| value           | `String`, `Number` | `null`  | The _value_ attribute of the `<input>`.                                       |
| cssOnly         | `Boolean`          | `false` | Ripple effect is disabled.                                                    |
| label           | `String`           | `null`  | A text caption or description for the checkbox.                               |
| attrs           | `Object`           | `null`  | Other attributes for `<input>`.                                               |

#### Slots

| Name      | Description                                        | `slot-scope` |
| --------- | -------------------------------------------------- | ------------ |
| (default) | The default slot holds the label for the checkbox. |              |

#### Events

| Name   | Type                              | Description                         |
| ------ | --------------------------------- | ----------------------------------- |
| change | `Function(model: boolean\|array)` | Emits when the checkbox is changed. |

> NOTE: If you are not using `v-model`, you should listen for the checkbox using `@change` and update the `model` prop.

```html
// Automatic
<ui-checkbox v-model="value"></ui-checkbox>

// Manual
<ui-checkbox :model="value" @change="balmUI.onChange('value', $event)"></ui-checkbox>
```
