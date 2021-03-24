```html
<ui-card-media>
  <!-- <ui-card-media-content> -->
</ui-card-media>
```

### Props

| Name        | Type    | Default | Description                                              |
| ----------- | ------- | ------- | -------------------------------------------------------- |
| `square`    | boolean | `false` | 自动缩放媒体区域的高度以使其宽度相等。                   |
|             |
| `rectangle` | boolean | `false` | 根据其宽度自动缩放媒体区域的高度，并保持 16:9 的纵横比。 |

### Slots

| Name      | Props | Description                               |
| --------- | ----- | ----------------------------------------- |
| `default` |       | default 插槽包含卡片媒体内容子组件及 HTML |

**子组件：**

- `<ui-card-media-content>`
