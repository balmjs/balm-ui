```html
<ui-form-field>
  <ui-radio></ui-radio>
  <label>Radio</label>
</ui-form-field>
```

### Props

| Name                | Type           | Default | Description                                           |
| ------------------- | -------------- | ------- | ----------------------------------------------------- |
| `model` (`v-model`) | string, number | `''`    | 单选按钮值                                            |
| `inputId`           | string         | `null`  | 原生 `<input>` 的 _id_ 属性和 `<label>` 的 _for_ 属性 |
| `value`             | string, number | `''`    | 原生 `<input>` 的 _value_ 属性                        |
| `disabled`          | boolean        | `false` | 禁用状态                                              |
| `attrs`             | object         | `{}`    | `<input>` 的其他属性                                  |

### Events

| Name     | Type                              | Description          |
| -------- | --------------------------------- | -------------------- |
| `change` | `function(value: string\|number)` | 单选按钮值变化时触发 |

> 提示：如果你不使用 `v-model` 绑定数据，你应该使用 `@change` 监听单选按钮值并更新 `model` 属性

- 自动

  ```html
  <ui-radio v-model="value"></ui-radio>
  ```

- 手动

  ```html
  <ui-radio
    :model="value"
    @change="$balmUI.onChange('value', $event)"
  ></ui-radio>
  ```
