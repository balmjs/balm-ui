```html
<ui-select-helper><!-- the helper text --></ui-select-helper>
```

### Props

| Name       | Type            | Default | Description                                             |
| ---------- | --------------- | ------- | ------------------------------------------------------- |
| `id`       | string          | `null`  | 必填（可对应匹配 `<ui-select>` 的 `helperTextId` 属性） |
| `visible`  | boolean         | `false` | 使帮助文本永远可见                                      |
| `validMsg` | string, boolean | `false` | 验证消息文本                                            |

### Slots

| Name      | Props | Description                           |
| --------- | ----- | ------------------------------------- |
| `default` |       | default 插槽包含选择器帮助文字及 HTML |
