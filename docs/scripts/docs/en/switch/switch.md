```html
<ui-form-field>
  <ui-switch></ui-switch>
  <label>Switch</label>
</ui-form-field>
```

### Props

| Name                | Type                    | Default | Description                                                                   |
| ------------------- | ----------------------- | ------- | ----------------------------------------------------------------------------- |
| `model` (`v-model`) | boolean                 | `false` | Mandatory.                                                                    |
| `trueValue`         | boolean, number, string | `true`  |                                                                               |
| `falseValue`        | boolean, number, string | `false` |                                                                               |
| `inputId`           | string                  | `null`  | The _id_ attribute of the `<input>` and the _for_ attribute of the `<label>`. |
| `disabled`          | boolean                 | `false` | Styles the switch as a disabled switch.                                       |
| `attrs`             | object                  | `{}`    | Other attributes for `<input>`.                                               |

### Events

| Name       | Type                                       | Description                        | Version |
| ---------- | ------------------------------------------ | ---------------------------------- | ------- |
| `change`   | `function(value: boolean)`                 | Emits when the switch is changed.  |         |
| `selected` | `function(value: boolean\|string\|number)` | Emits when the switch is selected. | 8.46.0  |

> NOTE: If you are not using `v-model`, you should listen for the switch using `@change` and update the `model` prop.

- Automatic

  ```html
  <ui-switch v-model="value"></ui-switch>
  ```

- Manual

  ```html
  <ui-switch
    :model="value"
    @change="$balmUI.onChange('value', $event)"
  ></ui-switch>
  ```
