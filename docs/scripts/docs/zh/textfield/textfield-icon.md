```html
<ui-textfield-icon><!-- the material design icon name --></ui-textfield-icon>
```

### Props

| Name          | Type    | Default | Description        |
| ------------- | ------- | ------- | ------------------ |
| `trailing`    | boolean | `false` | 展示以尾图标的样式 |
| `unclickable` | boolean | `false` | 展示不可点击的样式 |

### Slots

| Name      | Props | Description                                                             |
| --------- | ----- | ----------------------------------------------------------------------- |
| `default` |       | default 插槽包含图标组件及 HTML。详见 [Material Icons](/icons) 图标集。 |

### Events

| Name    | Type                      | Description          |
| ------- | ------------------------- | -------------------- |
| `click` | `function(event: object)` | 点击文本框图标时触发 |
