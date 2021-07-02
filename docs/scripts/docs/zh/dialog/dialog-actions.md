```html
<ui-dialog-actions><!-- the dialog actions --></ui-dialog-actions>
```

### Props

| Name         | Type   | Default    | Description  |
| ------------ | ------ | ---------- | ------------ |
| `acceptText` | string | `'OK'`     | 确定按钮文本 |
| `cancelText` | string | `'Cancel'` | 取消按钮文本 |

### Slots

| Name      | Props         | Description                       |
| --------- | ------------- | --------------------------------- |
| `default` | `buttonClass` | default 插槽包含对话框动作及 HTML |

```html
<template #default="{ buttonClass }">
  <ui-button :class="buttonClass">BUTTON</ui-button>
</template>
```

**其他定制化**

- `data-mdc-dialog-button-default`: 添加到按钮以指示它是默认操作按钮
- `data-mdc-dialog-initial-focus`: 添加到元素以指示它是对话框打开后最初要关注的元素
