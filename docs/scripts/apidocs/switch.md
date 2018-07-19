```html
<ui-switch><!-- the label text --></ui-switch>
```

#### Props

| Name            | Type                          | Default | Description                                                                   |
| --------------- | ----------------------------- | ------- | ----------------------------------------------------------------------------- |
| model (v-model) | `Boolean`, `Number`, `String` | `false` | Mandatory.                                                                    |
| trueValue       | `Boolean`, `Number`, `String` | `true`  |                                                                               |
| falseValue      | `Boolean`, `Number`, `String` | `false` |                                                                               |
| disabled        | `Boolean`                     | `false` | Styles the switch as a disabled switch.                                       |
| id              | `String`                      | `null`  | The _id_ attribute of the `<input>` and the _for_ attribute of the `<label>`. |
| name            | `String`                      | `null`  | The _name_ attribute of the `<input>`.                                        |
| label           | `String`                      | `null`  | A text caption or description for the switch.                                 |
| attrs           | `Object`                      | `null`  | Other attributes for `<input>`.                                               |

#### Slots

| Name      | Description                                      |
| --------- | ------------------------------------------------ |
| (default) | The default slot holds the label for the switch. |

#### Events

| Name   | Type                                       | Description                       |
| ------ | ------------------------------------------ | --------------------------------- |
| change | `Function(model: boolean\|string\|number)` | Emits when the switch is changed. |

> NOTE: If you are not using `v-model`, you should listen for the switch using `@change` and update the `model` prop.

```html
// Automatic
<ui-switch v-model="value"></ui-switch>

// Manual
<ui-switch :model="value" @change="balmUI.onChange('value', $event)"></ui-switch>
```
