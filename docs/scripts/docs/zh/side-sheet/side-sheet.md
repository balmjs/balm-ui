```html
<ui-side-sheet></ui-side-sheet>
```

### Props

| Name                     | Type    | Default | Description        |
| ------------------------ | ------- | ------- | ------------------ |
| `modelValue` (`v-model`) | boolean | `false` | 侧边动作表显示状态 |
| `closable`               | boolean | `false` | 展现关闭按钮       |

### Slots

| Name      | Props | Description                             |
| --------- | ----- | --------------------------------------- |
| `title`   |       | title 插槽包含侧边动作表的标题及 HTML   |
| `default` |       | default 插槽包含侧边动作表的内容及 HTML |
| `actions` |       | actions 插槽包含侧边动作表的动作及 HTML |

### Events

| Name                | Type                      | Description          |
| ------------------- | ------------------------- | -------------------- |
| `update:modelValue` | `function(open: boolean)` | 侧边动作表隐藏时触发 |

> 提示：如果你不使用 `v-model` 绑定数据，你应该使用 `@update:modelValue` 监听侧边动作表显示状态并更新 `modelValue` 属性

- 自动

  ```html
  <ui-side-sheet v-model="open"></ui-side-sheet>
  ```

- 手动

  ```html
  <ui-side-sheet
    :model-value="open"
    @update:model-value="balmUI.onChange('open', $event)"
  ></ui-side-sheet>
  ```
