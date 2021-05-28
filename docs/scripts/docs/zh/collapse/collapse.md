```html
<ui-collapse></ui-collapse>
```

### Props

| Name                   | Type            | Default | Description    | Version |
| ---------------------- | --------------- | ------- | -------------- | ------- |
| `expanded` (`v-model`) | boolean         | `false` | 展开状态       |         |
| `withIcon`             | boolean         | `false` | 启用默认图标   |         |
| `iconEndAligned`       | boolean         | `false` | 图标后置       | 8.39.0  |
| `ripple`               | boolean, number | `false` | 设置水波纹效果 |         |

- `ripple` 值：
  - `true`: 默认颜色
  - `1`: 主色
  - `2`: 辅色

### Slots

| Name               | Props | Description                         |
| ------------------ | ----- | ----------------------------------- |
| `default`          |       | default 插槽包含折叠面板内容及 HTML |
| `expand-more-icon` |       | 自定义展开图标                      |
| `expand-less-icon` |       | 自定义收起图标                      |
