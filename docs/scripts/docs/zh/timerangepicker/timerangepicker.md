```html
<ui-timerangepicker></ui-timerangepicker>
```

### Props

| Name                 | Type    | Default | Description                                                                                                         | Version |
| -------------------- | ------- | ------- | ------------------------------------------------------------------------------------------------------------------- | ------- |
| `outlined`           | boolean | `false` | 轮廓文本框（必须配置 `label` 或 `placeholder`）                                                                     |         |
| `model` (`v-model`)  | array   | `''`    | 时间范围选择器值                                                                                                    |         |
| `disabled`           | boolean | `false` | 禁用状态                                                                                                            |         |
| `labels`             | array   | `[]`    | 文本框的文本标题或说明，可使用文本框的 `placeholder` 属性代替                                                       |         |
| `placeholders`       | array   | `[]`    | 原生 `<input>` 的 _placeholder_ 属性                                                                                |         |
| `config`             | object  | `{}`    | 详见 [Flatpickr configuration](https://flatpickr.js.org/options/)，默认包含 `enableTime: true, noCalendar: true, dateFormat: 'H:i', time_24hr: true` |         |
| `disableRangePlugin` | boolean | `false` | 禁用 flatpickr rangePlugin，使用两个 `<ui-datepicker>` 代替                                                         |         |

### Slots

| Name        | Props | Description  |
| ----------- | ----- | ------------ |
| `separator` |       | 自定义分隔符 |

### Events

| Name     | Type                     | Description                |
| -------- | ------------------------ | -------------------------- |
| `change` | `function(value: array)` | 时间范围选择器值变化时触发 |

> 提示：如果你不使用 `v-model` 绑定数据，你应该使用 `@change` 监听时间范围选择器值并更新 `model` 属性

- 自动

  ```html
  <ui-timerangepicker v-model="value"></ui-timerangepicker>
  ```

- 手动

  ```html
  <ui-timerangepicker
    :model="value"
    @change="$balmUI.onChange('value', $event)"
  ></ui-timerangepicker>
  ```
