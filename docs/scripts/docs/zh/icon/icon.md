```html
<ui-icon><!-- the material design icon name --></ui-icon>
```

**`<ui-icon>` 类型**

- `0: 'filled'`
- `1: 'outlined'`
- `2: 'round'`
- `3: 'twoTone'`
- `4: 'sharp'`

### Props

| Name       | Type           | Default | Description                                                                                                                                     |
| ---------- | -------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`     | string, number | `0`     | 图标类型                                                                                                                                        |
| `outlined` | boolean        | `false` | 轮廓图标可自定义笔触和填充属性，以提供一种轻巧，干净的样式，该样式在密集的 UI 中效果很好。 可以调整轮廓图标的笔划粗细，以补充或对比字体的粗细。 |
| `round`    | boolean        | `false` | 圆形图标使用的转角半径与使用较重的字体，弯曲的徽标或圆形元素来表达其风格的品牌搭配得很好。                                                      |
| `twoTone`  | boolean        | `false` | 双色图标使用笔触，填充和颜色的属性添加了尺寸。 笔触和填充色的对比使您可以使用多种品牌颜色，并可以提高清晰度。                                   |
| `sharp`    | boolean        | `false` | 尖锐图标显示带有直边的角，以确保即使在较小的比例下也清晰可辨的样式。 这些矩形可以支持品牌风格，而圆形不能很好地体现这种风格。                   |
| `size`     | number         | `24`    | 图标尺寸                                                                                                                                        |
| `dark`     | boolean        | `false` | 深色图标（用于浅色背景上）                                                                                                                      |
| `light`    | boolean        | `false` | 浅色图标（用于深色背景上）                                                                                                                      |
| `inactive` | boolean        | `false` | 禁用或不活动状态                                                                                                                                |

> 尽管字体中的图标可以缩放为任意大小，但根据 Material Design Icons 准则，我们建议将它们显示为 `18`, `24`, `36` 或 `48`px。

### Slots

| Name      | Props | Description                                    |
| --------- | ----- | ---------------------------------------------- |
| `default` |       | default 插槽包含 material design 图标名及 HTML |

### Events

| Name    | Type                      | Description    |
| ------- | ------------------------- | -------------- |
| `click` | `function(event: object)` | 点击图标时触发 |
