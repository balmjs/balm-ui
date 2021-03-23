```html
<ui-image-list><!-- the image item components --></ui-image-list>
```

**`<ui-image-list>` 类型**

- `0`: `'standard'`
- `1`: `'masonry'`

### Props

| Name             | Type           | Default | Description                                      |
| ---------------- | -------------- | ------- | ------------------------------------------------ |
| `type`           | string, number | `0`     | 图片列表类型                                     |
| `masonry`        | boolean        | `false` | 瀑布流样式                                       |
| `textProtection` | boolean        | `false` | 图片列表项的文字标签放置于图片中（而非图片下方） |

### Slots

| Name      | Props | Description                           |
| --------- | ----- | ------------------------------------- |
| `default` |       | default 插槽包含图片列表项内容及 HTML |
