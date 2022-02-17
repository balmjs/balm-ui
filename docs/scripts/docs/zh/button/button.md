## 按钮组件

```html
<ui-button><!-- the button text label --></ui-button>
```

**`<ui-button>` 类型**

- `0`: `'text'`
- `1`: `'outlined'`
- `2`: `'raised'`
- `3`: `'unelevated'`

### Props

| Name         | Type           | Default    | Description                                      |
| ------------ | -------------- | ---------- | ------------------------------------------------ |
| `type`       | string, number | `0`        | 按钮类型                                         |
| `outlined`   | boolean        | `false`    | 使用轮廓按钮样式                                 |
| `raised`     | boolean        | `false`    | 使用浮雕按钮样式                                 |
| `unelevated` | boolean        | `false`    | 使用扁平按钮样式                                 |
| `icon`       | string         | `''`       | 设置图标。详见 [Material Icons](/icons) 图标集。 |
| `disabled`   | boolean        | `false`    | 禁用按钮。同原生 `<button>` 属性。               |
| `nativeType` | string         | `'button'` | 原生按钮类型。                                   |

```ts
interface Button {
  nativeType: 'button' | 'submit' | 'reset';
}
```

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
