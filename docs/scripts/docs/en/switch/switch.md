```html
<ui-form-field>
  <ui-switch></ui-switch>
  <label>Switch</label>
</ui-form-field>
```

### Props

| Name                     | Type                    | Default | Description                                                                   |
| ------------------------ | ----------------------- | ------- | ----------------------------------------------------------------------------- |
| `modelValue` (`v-model`) | boolean, number, string | `false` | Mandatory.                                                                    |
| `trueValue`              | boolean, number, string | `true`  |                                                                               |
| `falseValue`             | boolean, number, string | `false` |                                                                               |
| `id`                     | string                  | `null`  | The _id_ attribute of the `<input>` and the _for_ attribute of the `<label>`. |
| `name`                   | string                  | `''`    | The _name_ attribute of the `<input>`.                                        |
| `disabled`               | boolean                 | `false` | Styles the switch as a disabled switch.                                       |
| `attrs`                  | object                  | `{}`    | Other attributes for `<input>`.                                               |

### Events

| Name                | Type                                            | Description                       |
| ------------------- | ----------------------------------------------- | --------------------------------- |
| `update:modelValue` | `function(modelValue: boolean\|string\|number)` | Emits when the switch is changed. |

> NOTE: If you are not using `v-model`, you should listen for the switch using `@update:modelValue` and update the `modelValue` prop.

- Automatic

  ```html
  <ui-switch v-model="value"></ui-switch>
  ```

- Manual

  ```html
  <ui-switch
    :model-value="value"
    @update:modelValue="balmUI.onChange('value', $event)"
  ></ui-switch>
  ```
