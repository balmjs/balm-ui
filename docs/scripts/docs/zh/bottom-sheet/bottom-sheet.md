```html
<ui-bottom-sheet></ui-bottom-sheet>
```

### Props

| Name               | Type    | Default | Description        |
| ------------------ | ------- | ------- | ------------------ |
| `open` (`v-model`) | boolean | `false` | 底部动作表显示状态 |

### Slots

| Name      | Props | Description                             |
| --------- | ----- | --------------------------------------- |
| `default` |       | default 插槽包含底部动作表的内容及 HTML |

### Events

| Name     | Type                      | Description          |
| -------- | ------------------------- | -------------------- |
| `change` | `function(open: boolean)` | 底部动作表隐藏时触发 |

> 提示：如果你不使用 `v-model` 绑定数据，你应该使用 `@change` 监听底部动作表显示状态并更新 `open` 属性

- 自动

  ```html
  <ui-bottom-sheet v-model="open"></ui-bottom-sheet>
  ```

- 手动

  ```html
  <ui-bottom-sheet
    :open="open"
    @change="$balmUI.onChange('open', $event)"
  ></ui-bottom-sheet>
  ```
