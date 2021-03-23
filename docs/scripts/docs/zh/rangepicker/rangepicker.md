```html
<ui-rangepicker></ui-rangepicker>
```

### Props

| Name                | Type    | Default | Description                                                       |
| ------------------- | ------- | ------- | ----------------------------------------------------------------- |
| `outlined`          | boolean | `false` | 轮廓文本框（必须配置 `label` 或 `placeholder`）                   |
| `model` (`v-model`) | array   | `''`    | 日期范围选择框值                                                  |
| `disabled`          | boolean | `false` | 禁用状态                                                          |
| `labels`            | array   | `[]`    | 文本框的文本标题或说明，可使用文本框的 `placeholder` 属性代替     |
| `placeholders`      | array   | `[]`    | 原生 `<input>` 的 _placeholder_ 属性                              |
| `config`            | object  | `{}`    | 详见 [Flatpickr configuration](https://flatpickr.js.org/options/) |

### Slots

| Name        | Props | Description  |
| ----------- | ----- | ------------ |
| `separator` |       | 自定义分隔符 |

### Events

| Name     | Type                     | Description                |
| -------- | ------------------------ | -------------------------- |
| `change` | `function(value: array)` | 日期范围选择框值变化时触发 |

> 提示：如果你不使用 `v-model` 绑定数据，你应该使用 `@change` 监听日期范围选择框值并更新 `model` 属性

- 自动

  ```html
  <ui-rangepicker v-model="value"></ui-rangepicker>
  ```

- 手动

  ```html
  <ui-rangepicker
    :model="value"
    @change="$balmUI.onChange('value', $event)"
  ></ui-rangepicker>
  ```
