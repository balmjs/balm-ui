```html
<ui-switch></ui-switch>
```

#### Props

| Name                | Type                    | Default | Description                                                                   |
| ------------------- | ----------------------- | ------- | ----------------------------------------------------------------------------- |
| `model` (`v-model`) | boolean, number, string | `false` | Mandatory.                                                                    |
| `trueValue`         | boolean, number, string | `true`  |                                                                               |
| `falseValue`        | boolean, number, string | `false` |                                                                               |
| `disabled`          | boolean                 | `false` | Styles the switch as a disabled switch.                                       |
| `id`                | string                  | `null`  | The _id_ attribute of the `<input>` and the _for_ attribute of the `<label>`. |
| `name`              | string                  | `null`  | The _name_ attribute of the `<input>`.                                        |
| `attrs`             | object                  | `null`  | Other attributes for `<input>`.                                               |

#### Events

| Name     | Type                                       | Description                       |
| -------- | ------------------------------------------ | --------------------------------- |
| `change` | `function(model: boolean\|string\|number)` | Emits when the switch is changed. |

> NOTE: If you are not using `v-model`, you should listen for the switch using `@change` and update the `model` prop.

```html
// Automatic
<ui-switch v-model="value"></ui-switch>

// Manual
<ui-switch :model="value" @change="$balmUI.onChange('value', $event)"></ui-switch>
```
