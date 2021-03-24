```html
<ui-banner><!-- the banner message --></ui-banner>
```

### Props

| Name                  | Type    | Default | Description        |
| --------------------- | ------- | ------- | ------------------ |
| `open` (`v-model`)    | boolean | `false` | 顶部消息栏显示状态 |
| `message`             | string  | `''`    | 消息文本           |
| `primaryButtonText`   | boolean | `'OK'`  | 主按钮文本         |
| `secondaryButtonText` | boolean | `''`    | 辅按钮文本         |

### Slots

| Name      | Props        | Description                     |
| --------- | ------------ | ------------------------------- |
| `default` |              | default 插槽包含消息文本及 HTML |
| `image`   | `imageClass` | 自定义图片区域                  |
| `actions` |              | 自定义动作按钮                  |

### Events

| Name     | Type                       | Description          |
| -------- | -------------------------- | -------------------- |
| `change` | `function(open: boolean)`  | 顶部消息栏隐藏时触发 |
| `closed` | `function(reason: string)` | 顶部消息栏关闭时触发 |

> 提示：如果你不使用 `v-model` 绑定数据，你应该使用 `@change` 监听顶部消息栏显示状态并更新 `open` 属性

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
