```html
<ui-divider></ui-divider>
```

**`<ui-divider>` 类型**

- `0`: `'horizontal'`
- `1`: `'vertical'`

### Props

| Name   | Type           | Default | Description |
| ------ | -------------- | ------- | ----------- |
| `type` | string, number | `0`     | 分割线类型  |

### Slots

| Name      | Props | Description                       |
| --------- | ----- | --------------------------------- |
| `default` |       | default 插槽包含分割线文本及 HTML |
| `left`    |       | 仅适用于垂直分隔符的左边文本      |
| `right`   |       | 仅适用于垂直分隔符的右边文本      |
