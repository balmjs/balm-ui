```html
<ui-textfield><!-- the label text --></ui-textfield>
```

**`<ui-textfield>` 类型**

- `0`: `'filled'`
- `1`: `'outlined'`

### Props

| Name                     | Type           | Default  | Description                                                   |
| ------------------------ | -------------- | -------- | ------------------------------------------------------------- |
| `type`                   | string, number | `0`      | 文本框类型                                                    |
| `outlined`               | boolean        | `false`  | 轮廓文本框（必须配置 `label` 或 `placeholder`）               |
| `modelValue` (`v-model`) | string, number | `''`     | 文本框值                                                      |
| `inputType`              | string         | `'text'` | 原生 `<input>` 类型：`text`, `number`, `password`, 等         |
| `inputId`                | string         | `null`   | 原生 `<input>` 的 _id_ 属性和 `<label>` 的 _for_ 属性         |
| `label`                  | string         | `''`     | 文本框的文本标题或说明，可使用文本框的 `placeholder` 属性代替 |
| `placeholder`            | string         | `null`   | 原生 `<input>` 的 _placeholder_ 属性                          |
| `disabled`               | boolean        | `false`  | 禁用状态                                                      |
| `required`               | boolean        | `false`  | 必填字段样式                                                  |
| `fullwidth`              | boolean        | `false`  | 全屏宽度样式                                                  |
| `endAligned`             | boolean        | `false`  | 输入文本右对齐                                                |
| `icon`                   | string         | `''`     | 设置首图标。详见 [Material Icons](/#/icons) 图标集。          |
| `withLeadingIcon`        | boolean        | `false`  | 启用首图标样式                                                |
| `withTrailingIcon`       | boolean        | `false`  | 启用尾图标样式                                                |
| `prefixText`             | string         | `''`     | 设置文本前缀内容                                              |
| `suffixText`             | string         | `''`     | 设置文本后缀内容                                              |
| `withCounter`            | boolean        | `false`  | 启用内部计数器                                                |
| `helperTextId`           | string         | `null`   | 匹配 `<ui-textfield-helper>` 的 _id_ 属性                     |
| `attrs`                  | object         | `{}`     | `<input>` 或 `<textarea>` 的其他属性                          |

> 提示：`withLeadingIcon` 和 `withTrailingIcon` 仅用于 (**非 `<ui-textfield-icon>`**) 自定义首/尾图标，通常无需配置

除上述内容外，以下属性还可以替代具有相同名称的 input 或 textarea 元素的属性：

- `pattern`
- `minlength`
- `maxlength`：计数器必备属性
- `min`
- `max`
- `step`
- `rows`
- `cols`

### Slots

| Name      | Props       | Description                          |
| --------- | ----------- | ------------------------------------ |
| `default` |             | default 插槽包含文本框标题或说明文字 |
| `before`  | `iconClass` | 自定义首图标                         |
| `after`   | `iconClass` | 自定义尾图标                         |

### Events

| Name                | Type                      | Description                     |
| ------------------- | ------------------------- | ------------------------------- |
| `focus`             | `function(event: object)` | 文本框聚焦时触发                |
| `keydown`           | `function(event: object)` | 文本框中按下键盘时触发          |
| `update:modelValue` | `function(value: string)` | 文本框中输入内容时触发          |
| `change`            | `function(event: object)` | 文本框值变化时触发              |
| `enter`             | `function(value: string)` | 文本框中按下 _Enter_ 键盘时触发 |
| `blur`              | `function(event: object)` | 文本框失去聚焦时触发            |

> 提示：如果你不使用 `v-model` 绑定数据，你应该使用 `@update:modelValue` 监听文本框值并更新 `modelValue` 属性

- 自动

  ```html
  <ui-textfield v-model="value"></ui-textfield>
  ```

- 手动

  ```html
  <ui-textfield
    :model-value="value"
    @update:modelValue="balmUI.onChange('value', $event)"
  ></ui-textfield>
  ```
