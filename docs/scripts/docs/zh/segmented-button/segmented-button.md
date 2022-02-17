```html
<ui-segmented-button></ui-segmented-button>
```

### Props

| Name       | Type    | Default | Description                                      |
| ---------- | ------- | ------- | ------------------------------------------------ |
| `selected` | boolean | `false` | 设置选中状态样式                                 |
| `text`     | string  | `''`    | 按钮文字                                         |
| `icon`     | string  | `''`    | 按钮图标。详见 [Material Icons](/icons) 图标集。 |

### Slots

| Name      | Props       | Description                     |
| --------- | ----------- | ------------------------------- |
| `default` |             | default 插槽包含按钮文字及 HTML |
| `before`  | `iconClass` | 自定义首图标                    |
| `after`   | `iconClass` | 自定义尾图标                    |

```html
<template #after="{ iconClass }">
  <ui-icon :class="iconClass">ICON</ui-icon>
</template>
```

### Events

| Name    | Type                      | Description    |
| ------- | ------------------------- | -------------- |
| `click` | `function(event: object)` | 点击按钮时触发 |
