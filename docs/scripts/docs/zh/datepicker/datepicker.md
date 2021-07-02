```html
<ui-datepicker></ui-datepicker>
```

**`<ui-datepicker>` 在 `config.mode` 属性中的类型**

- single（默认）
- multiple
- range
- month
- time

### Props

| Name                     | Type                  | Default | Description                                                                                |
| ------------------------ | --------------------- | ------- | ------------------------------------------------------------------------------------------ |
| `outlined`               | boolean               | `false` | 轮廓文本框（必须配置 `label` 或 `placeholder`）                                            |
| `modelValue` (`v-model`) | string, number, array | `''`    | 日期选择框值                                                                               |
| `inputId`                | string                | `null`  | 原生 `<input>` 的 _id_ 属性和 `<label>` 的 _for_ 属性                                      |
| `label`                  | string                | `''`    | 文本框的文本标题或说明，可使用文本框的 `placeholder` 属性代替                              |
| `placeholder`            | string                | `null`  | 原生 `<input>` 的 _placeholder_ 属性                                                       |
| `disabled`               | boolean               | `false` | 禁用状态                                                                                   |
| `required`               | boolean               | `false` | 必填字段样                                                                                 |
| `fullwidth`              | boolean               | `false` | 全屏宽度样式                                                                               |
| `endAligned`             | boolean               | `false` | 输入文本右对齐                                                                             |
| `icon`                   | string                | `''`    | 设置首图标。详见 [Material Icons](/#/icons) 图标集。                                       |
| `withLeadingIcon`        | boolean, string       | `false` | 启用首图标样（需使用 `before` 插槽）                                                       |
| `withTrailingIcon`       | boolean, string       | `false` | 启用尾图标样式（需使用 `after` 插槽）                                                      |
| `config`                 | object                | `{}`    | 详见 [Flatpickr configuration](https://flatpickr.js.org/options/)                          |
| `toggle`                 | boolean               | `false` | 显示日历图标按钮                                                                           |
| `clear`                  | boolean               | `false` | 显示清除图标按钮                                                                           |
| `monthOptions`           | object                | `{}`    | 详见 [Flatpickr month select options](https://flatpickr.js.org/plugins/#monthselectplugin) |

- 多语言

```html
<ui-datepicker :config="config"></ui-datepicker>
```

```js
import lang from 'flatpickr/dist/l10n/zh.js';

export default {
  data() {
    return {
      config: {
        locale: lang.zh
      }
    };
  }
};
```

### Slots

| Name      | Props       | Description                                      |
| --------- | ----------- | ------------------------------------------------ |
| `default` |             | default 插槽包含文本框标题或说明文字             |
| `before`  | `iconClass` | 自定义首图标                                     |
| `after`   | `iconClass` | 自定义尾图标（`withTrailingIcon = true`）        |
| `toggle`  |             | 自定义日历图标按钮（`withTrailingIcon = false`） |
| `clear`   |             | 自定义清除图标按钮（`withTrailingIcon = false`） |

### Events

| Name                | Type                             | Description            |
| ------------------- | -------------------------------- | ---------------------- |
| `update:modelValue` | `function(value: string\|array)` | 日期选择框值变化时触发 |

> 提示：如果你不使用 `v-model` 绑定数据，你应该使用 `@update:modelValue` 监听日期选择框值并更新 `modelValue` 属性

- 自动

  ```html
  <ui-datepicker v-model="value"></ui-datepicker>
  ```

- 手动

  ```html
  <ui-datepicker
    :model-value="value"
    @update:modelValue="balmUI.onChange('value', $event)"
  ></ui-datepicker>
  ```
