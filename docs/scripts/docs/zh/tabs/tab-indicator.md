```html
<ui-tab-indicator></ui-tab-indicator>
```

### Props

| Name   | Type    | Default       | Description      |
| ------ | ------- | ------------- | ---------------- |
| `type` | string  | `'underline'` | 标签页指示器类型 |
| `fade` | boolean | `false`       | 淡入淡出效果     |

```ts
interface TabIndicator {
  type: 'underline' | 'icon';
}
```

### Slots

| Name      | Props | Description                              |
| --------- | ----- | ---------------------------------------- |
| `default` |       | default 插槽包含指示器自定义图标 及 HTML |

> 提示：`underline` 类型没有 slot
