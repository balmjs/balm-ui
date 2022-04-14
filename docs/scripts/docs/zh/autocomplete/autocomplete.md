```html
<ui-autocomplete></ui-autocomplete>
```

### Props

| Name                     | Type           | Default                              | Description                                                                                                                                  |
| ------------------------ | -------------- | ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `outlined`               | boolean        | `false`                              | 轮廓文本框（必须配置 `label` 或 `placeholder`）                                                                                              |
| `modelValue` (`v-model`) | string, number | `''`                                 | 文本框值                                                                                                                                     |
| `source`                 | array          | `[]`                                 | 设置数据源                                                                                                                                   |
| `sourceFormat`           | object         | `{ label: 'label', value: 'value' }` | 设置数据源格式                                                                                                                               |
| `inputId`                | string         | `null`                               | 原生 `<input>` 的 _id_ 属性和 `<label>` 的 _for_ 属性                                                                                        |
| `label`                  | string         | `''`                                 | 文本框的文本标题或说明，可使用文本框的 `placeholder` 属性代替                                                                                |
| `placeholder`            | string         | `null`                               | 原生 `<input>` 的 _placeholder_ 属性                                                                                                         |
| `disabled`               | boolean        | `false`                              | 禁用状态                                                                                                                                     |
| `required`               | boolean        | `false`                              | 必填字段样式                                                                                                                                 |
| `autofocus`              | boolean        | `false`                              | 自动选中建议菜单中的第一项                                                                                                                   |
| `delay`                  | number         | `300`                                | 触发键盘和执行搜索之间的延迟（以毫秒为单位）。零延迟对本地数据有意义（响应速度更快），但在响应速度较慢的情况下，可以为远程数据产生大量负载。 |
| `minlength`              | number         | `1`                                  | 模糊搜索的最少字符数。零对于仅包含少量项目的本地数据很有用，但是当单个字符搜索可以匹配数千个项目时，应使用更高的值。                         |
| `remote`                 | boolean        | `false`                              | 启用远程获取数据。默认用法为本地数据。                                                                                                       |
| `highlight`              | boolean        | `false`                              | 将自动完成文本框建议值设置为加粗                                                                                                             |
| `fullwidth`              | boolean        | `false`                              | 全屏宽度样式                                                                                                                                 |
| `endAligned`             | boolean        | `false`                              | 输入文本右对齐                                                                                                                               |
| `icon`                   | string         | `''`                                 | 设置首图标。详见 [Material Icons](/icons) 图标集。                                                                                           |
| `withLeadingIcon`        | boolean        | `false`                              | 启用首图标样（需使用 `before` 插槽）                                                                                                         |
| `withTrailingIcon`       | boolean        | `false`                              | 启用尾图标样式（需使用 `after` 插槽）                                                                                                        |

- **`source`** 属性。支持两种格式化：
  - 字符串数组：`[ 'Choice1', 'Choice2' ]`
  - 对象数组（对象默认必须包含 `label` 和 `value` 字段）：`[ { label: 'Choice1', value: 'value1' }, ... ]`
    > 你页可以通过 `sourceFormat` 属性自定义原数据的格式

### Slots

| Name      | Props       | Description                          |
| --------- | ----------- | ------------------------------------ |
| `default` |             | default 插槽包含文本框标题或说明文字 |
| `before`  | `iconClass` | 自定义首图标                         |
| `after`   | `iconClass` | 自定义尾图标                         |

### Events

| Name                | Type                              | Description                                                |
| ------------------- | --------------------------------- | ---------------------------------------------------------- |
| `update:modelValue` | `function(value: string\|number)` | 文本框中输入内容时触发                                     |
| `search`            | `function(keywords: string)`      | 文本框值变化时触发。仅用于启用 `remote` 的自动完成文本框。 |
| `selected`          | `function(item: object)`          | 自动完成建议值被选中时触发                                 |

- `selected` 事情返回值：

  ```js
  {
    label: 'Choice 1',
    value: 'value 1',
    // more custom fields
  }
  ```

> 提示：如果你不使用 `v-model` 绑定数据，你应该使用 `@update:modelValue` 监听自动完成文本框值并更新 `modelValue` 属性

- 自动

  ```html
  <ui-autocomplete v-model="value"></ui-autocomplete>
  ```

- 手动

  ```html
  <ui-autocomplete
    :model-value="value"
    @update:model-value="balmUI.onChange('value', $event)"
  ></ui-autocomplete>
  ```
