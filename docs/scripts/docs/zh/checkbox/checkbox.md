```html
<ui-form-field>
  <ui-checkbox></ui-checkbox>
  <label>Checkbox</label>
</ui-form-field>
```

### Props

| Name                     | Type           | Default | Description                                           |
| ------------------------ | -------------- | ------- | ----------------------------------------------------- |
| `modelValue` (`v-model`) | boolean, array | `false` | 复选框值                                              |
| `indeterminate`          | boolean        | `false` | 不确定状态                                            |
| `inputId`                | string         | `null`  | 原生 `<input>` 的 _id_ 属性和 `<label>` 的 _for_ 属性 |
| `value`                  | string, number | `''`    | 原生 `<input>` 的 _value_ 属性                        |
| `disabled`               | boolean        | `false` | 禁用状态                                              |
| `attrs`                  | object         | `{}`    | `<input>` 的其他属性                                  |

### Events

| Name                | Type                              | Description        |
| ------------------- | --------------------------------- | ------------------ |
| `update:modelValue` | `function(value: boolean\|array)` | 复选框值变化时触发 |

> 提示：如果你不使用 `v-model` 绑定数据，你应该使用 `@update:modelValue` 监听复选框值并更新 `modelValue` 属性

- 自动

  ```html
  <ui-checkbox v-model="value"></ui-checkbox>
  ```

- 手动

  ```html
  <ui-checkbox
    :model-value="value"
    @update:modelValue="balmUI.onChange('value', $event)"
  ></ui-checkbox>
  ```
