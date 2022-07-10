```html
<ui-select><!-- the label text --></ui-select>
```

**`<ui-select>` 类型**

- `0`: `'filled'`
- `1`: `'outlined'`

### Props

| Name                | Type           | Default                              | Description                                          | Version |
| ------------------- | -------------- | ------------------------------------ | ---------------------------------------------------- | ------- |
| `type`              | string, number | `0`                                  | 选择器类型                                           |         |
| `outlined`          | boolean        | `false`                              | 轮廓选择器                                           |         |
| `model` (`v-model`) | string, number | `''`                                 | 选择器值                                             |         |
| `options`           | array          | `[]`                                 | 设置选项列表（默认选项格式：`{ label, value }`）     |         |
| `optionFormat`      | object         | `{ label: 'label', value: 'value' }` | 定义选项卡选项数据格式                               | 8.42.0  |
| `defaultLabel`      | string         | `''`                                 | 选项占位符 label 的值                                |         |
| `defaultValue`      | string, number | `''`                                 | 选项占位符 value 的值                                |         |
| `label`             | string         | `''`                                 | 选择器的文本标题或说明                               |         |
| `disabled`          | boolean        | `false`                              | 禁用状态                                             |         |
| `required`          | boolean        | `false`                              | 必填字段样式                                         |         |
| `fullwidth`         | boolean        | `false`                              | 全屏宽度样式                                         |         |
| `icon`              | string         | `''`                                 | 设置首图标。详见 [Material Icons](/#/icons) 图标集。 |         |
| `withLeadingIcon`   | boolean        | `false`                              | 启用首图标样式                                       |         |
| <del>`fixed`</del>  | boolean        | `false`                              | 固定模式                                             | 8.12.0  |
| `helperTextId`      | string         | `null`                               | 匹配 `<ui-select-helper>` 的 _id_ 属性               |         |

> 提示：`withLeadingIcon` 和 `withTrailingIcon` 仅用于 (**非 `<ui-select-icon>`**) 自定义首/尾图标，通常无需配置

> ⚠️ <del>提示：`fixed` 仅用于某些组件内部的溢出。可通过 `data-width` 属性或自定义样式设置显式宽度。通常情况下，请不要使用固定模式</del> (8.52.0 已弃用)

> ⚠️ `8.42.0` 中 `optionLabel` 和 `optionValue` 属性已弃用，请使用 `optionFormat` 代替。

### Slots

| Name            | Props       | Description                          | Version |
| --------------- | ----------- | ------------------------------------ | ------- |
| `default`       |             | default 插槽包含选择器标题或说明文字 |         |
| `icon`          | `iconClass` | 自定义首图标                         |         |
| `dropdown-icon` |             | 自定义下拉图标                       | `6.9.0` |

### Events

| Name       | Type                              | Description            |
| ---------- | --------------------------------- | ---------------------- |
| `change`   | `function(value: string\|number)` | 选择器值变化时触发     |
| `selected` | `function(option: object)`        | 选择器选项被选中时触发 |

> 提示：如果你不使用 `v-model` 绑定数据，你应该使用 `@change` 监听选择器值并更新 `model` 属性

- 自动

  ```html
  <ui-select v-model="value"></ui-select>
  ```

- 手动

  ```html
  <ui-select
    :model="value"
    @change="$balmUI.onChange('value', $event)"
  ></ui-select>
  ```
