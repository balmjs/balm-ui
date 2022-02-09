```html
<ui-textfield-helper><!-- the helper text --></ui-textfield-helper>
```

### Props

| Name                   | Type            | Default | Description                                                 |
| ---------------------- | --------------- | ------- | ----------------------------------------------------------- |
| `validMsg` (`v-model`) | string, boolean | `false` | 验证消息文本                                                |
| `id`                   | string          | `null`  | 必填（可对应匹配 `<ui-textfield>` 的 `helperTextId` 属性）  |
| `visible`              | boolean         | `false` | 使帮助文本永远可见                                          |
| `withCounter`          | boolean         | `false` | 启用计数器（需要配置 `<ui-textfield>` 的 `maxlength` 属性） |

> 提示：请不要在 `<ui-textfield>` 和启用计数器的 `<ui-textfield-helper>` 之前插入任何标签

```html
<!-- Single line text field -->
<ui-textfield maxlength="40"></ui-textfield>
<ui-textfield-helper with-counter></ui-textfield-helper>

<!-- Single line text field with an internal character counter -->
<ui-textfield maxlength="40" with-counter></ui-textfield>
```

### Slots

| Name      | Props | Description                           |
| --------- | ----- | ------------------------------------- |
| `default` |       | default 插槽包含文本框帮助文字及 HTML |
