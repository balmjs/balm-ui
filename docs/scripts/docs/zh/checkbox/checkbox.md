```html
<ui-form-field>
  <ui-checkbox></ui-checkbox>
  <label>Checkbox</label>
</ui-form-field>
```

### Props

| Name                | Type           | Default | Description                                                                   |
| ------------------- | -------------- | ------- | ----------------------------------------------------------------------------- |
| `model` (`v-model`) | boolean, array | `false` | Mandatory.                                                                    |
| `indeterminate`     | boolean        | `false` | Styles the checkbox as an indeterminate checkbox.                             |
| `inputId`           | string         | `null`  | The _id_ attribute of the `<input>` and the _for_ attribute of the `<label>`. |
| `name`              | string         | `''`    | The _name_ attribute of the `<input>`.                                        |
| `value`             | string, number | `''`    | The _value_ attribute of the `<input>`.                                       |
| `disabled`          | boolean        | `false` | Styles the checkbox as a disabled checkbox.                                   |
| `attrs`             | object         | `{}`    | Other attributes for `<input>`.                                               |

### Events

| Name     | Type                              | Description                         |
| -------- | --------------------------------- | ----------------------------------- |
| `change` | `function(model: boolean\|array)` | Emits when the checkbox is changed. |

> NOTE: If you are not using `v-model`, you should listen for the checkbox using `@change` and update the `model` prop.

- Automatic

  ```html
  <ui-checkbox v-model="value"></ui-checkbox>
  ```

- Manual

  ```html
  <ui-checkbox
    :model="value"
    @change="$balmUI.onChange('value', $event)"
  ></ui-checkbox>
  ```
