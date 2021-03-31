```html
<ui-banner><!-- the banner message --></ui-banner>
```

### Props

| Name                  | Type    | Default | Description                                                                  | Version |
| --------------------- | ------- | ------- | ---------------------------------------------------------------------------- | ------- |
| `open` (`v-model`)    | boolean | `false` | 横幅显示状态                                                                 |         |
| `centered`            | boolean | `false` | 内容居中显示。默认居左。                                                     | 8.27.0  |
| `fixed`               | boolean | `false` | 在顶部导航下方使用横幅时，横幅应固定在屏幕顶部。                             | 8.27.0  |
| `withImage`           | boolean | `false` | 图片可以帮助传达横幅广告的信息。                                             | 8.27.0  |
| `mobileStacked`       | boolean | `false` | 带有长文字的横幅在移动视图中，应将其操作区域放置在文字下方，而不是并排放置。 | 8.27.0  |
| `primaryButtonText`   | boolean | `'OK'`  | 主按钮文本                                                                   |         |
| `secondaryButtonText` | boolean | `''`    | 辅按钮文本                                                                   |         |

### Slots

| Name      | Props | Description                     |
| --------- | ----- | ------------------------------- |
| `default` |       | default 插槽包含消息文本及 HTML |
| `image`   |       | 自定义图标或图片区域            |
| `actions` |       | 自定义动作按钮                  |

### Events

| Name     | Type                       | Description    |
| -------- | -------------------------- | -------------- |
| `change` | `function(open: boolean)`  | 横幅隐藏时触发 |
| `closed` | `function(reason: string)` | 横幅关闭时触发 |

> 提示：如果你不使用 `v-model` 绑定数据，你应该使用 `@change` 监听横幅显示状态并更新 `open` 属性

- 自动

  ```html
  <ui-banner v-model="open"></ui-banner>
  ```

- 手动

  ```html
  <ui-banner
    :open="open"
    @change="$balmUI.onChange('open', $event)"
  ></ui-banner>
  ```
