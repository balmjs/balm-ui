```html
<ui-form-field>
  <ui-switch></ui-switch>
  <label>Switch</label>
</ui-form-field>
```

### Props

| Name                | Type                    | Default | Description                                           |
| ------------------- | ----------------------- | ------- | ----------------------------------------------------- |
| `model` (`v-model`) | boolean, number, string | `false` | 开关值                                                |
| `trueValue`         | boolean, number, string | `true`  | 开关开启时的返回值                                    |
| `falseValue`        | boolean, number, string | `false` | 开关关闭时的返回值                                    |
| `inputId`           | string                  | `null`  | 原生 `<input>` 的 _id_ 属性和 `<label>` 的 _for_ 属性 |
| `name`              | string                  | `''`    | 原生 `<input>` 的 _name_ 属性                         |
| `disabled`          | boolean                 | `false` | 禁用状态                                              |
| `attrs`             | object                  | `{}`    | `<input>` 的其他属性                                  |

### Events

| Name     | Type                                       | Description      |
| -------- | ------------------------------------------ | ---------------- |
| `change` | `function(model: boolean\|string\|number)` | 开关值变化时触发 |

> 提示：如果你不使用 `v-model` 绑定数据，你应该使用 `@change` 监听开关值并更新 `model` 属性

- 自动

  ```html
  <ui-switch v-model="value"></ui-switch>
  ```

- 手动

  ```html
  <ui-switch
    :model="value"
    @change="$balmUI.onChange('value', $event)"
  ></ui-switch>
  ```
