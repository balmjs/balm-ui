```html
<ui-image-item><!-- image and text --></ui-image-item>
```

### Props

| Name      | Type   | Default | Description                                        |
| --------- | ------ | ------- | -------------------------------------------------- |
| `image`   | string | `null`  | 为图片列表项添加一个 `<img>` 元素并设置 _src_ 属性 |
| `bgImage` | string | `null`  | 使用一个 `<div>` 代替`<img>` 元素                  |

### Slots

| Name      | Props | Description                                     |
| --------- | ----- | ----------------------------------------------- |
| `default` |       | default 插槽包含图片列表项的文字标签内容及 HTML |
| `image`   |       | 自定义图片                                      |

### Events

| Name    | Type                      | Description          |
| ------- | ------------------------- | -------------------- |
| `click` | `function(event: object)` | 点击图片列表项时触发 |
