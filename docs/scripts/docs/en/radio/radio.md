```html
<ui-form-field>
  <ui-radio></ui-radio>
  <label>Radio</label>
</ui-form-field>
```

### Props

| Name                     | Type           | Default | Description                                                                   |
| ------------------------ | -------------- | ------- | ----------------------------------------------------------------------------- |
| `modelValue` (`v-model`) | string, number | `''`    | Mandatory.                                                                    |
| `inputId`                | string         | `null`  | The _id_ attribute of the `<input>` and the _for_ attribute of the `<label>`. |
| `value`                  | string, number | `''`    | The _value_ attribute of the `<input>`.                                       |
| `disabled`               | boolean        | `false` | Styles the radio button as a disabled radio button.                           |
| `attrs`                  | object         | `{}`    | Other attributes for `<input>`.                                               |

### Events

| Name                | Type                              | Description                             |
| ------------------- | --------------------------------- | --------------------------------------- |
| `update:modelValue` | `function(value: string\|number)` | Emits when the radio button is changed. |

> NOTE: If you are not using `v-model`, you should listen for the radio using `@update:modelValue` and update the `modelValue` prop.

- Automatic

  ```html
  <ui-radio v-model="value"></ui-radio>
  ```

- Manual

  ```html
  <ui-radio
    :model-value="value"
    @update:modelValue="balmUI.onChange('value', $event)"
  ></ui-radio>
  ```
