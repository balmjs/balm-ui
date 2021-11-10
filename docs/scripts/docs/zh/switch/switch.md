```html
<ui-form-field>
  <ui-switch></ui-switch>
  <label>Switch</label>
</ui-form-field>
```

### Props

| Name                     | Type                    | Default | Description        |
| ------------------------ | ----------------------- | ------- | ------------------ |
| `modelValue` (`v-model`) | boolean                 | `false` | 开关状态           |
| `trueValue`              | boolean, number, string | `true`  | 开关开启时的返回值 |
| `falseValue`             | boolean, number, string | `false` | 开关关闭时的返回值 |
| `disabled`               | boolean                 | `false` | 禁用状态           |

### Events

| Name                | Type                                       | Description        |
| ------------------- | ------------------------------------------ | ------------------ |
| `update:modelValue` | `function(value: boolean)`                 | 开关状态变化时触发 |
| `selected`          | `function(value: boolean\|string\|number)` | 开关值变化时触发   |

> 提示：如果你不使用 `v-model` 绑定数据，你应该使用 `@update:modelValue` 监听开关值并更新 `modelValue` 属性

- 自动

  ```html
  <ui-switch v-model="value"></ui-switch>
  ```

- 手动

  ```html
  <ui-switch
    :model-value="value"
    @update:modelValue="balmUI.onChange('value', $event)"
  ></ui-switch>
  ```
