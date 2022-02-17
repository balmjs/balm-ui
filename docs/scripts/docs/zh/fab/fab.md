```html
<ui-fab><!-- Icon --></ui-fab>

<ui-fab extended><!-- Text label --></ui-fab>
```

**`<ui-fab>` 类型**

- `0`: `'regular'`
- `1`: `'extended'`

### Props

| Name       | Type           | Default | Description                                              |
| ---------- | -------------- | ------- | -------------------------------------------------------- |
| `type`     | string, number | `0`     | 浮动按钮类型                                             |
| `extended` | boolean        | `false` | 扩展浮动按钮。将浮动按钮修改为更大的尺寸，包括文本标签。 |
| `icon`     | string         | `''`    | 设置图标。详见 [Material Icons](/icons) 图标集。         |
| `mini`     | boolean        | `false` | 迷你浮动按钮                                             |
| `exited`   | boolean        | `false` | 对浮动按钮进行动画处理                                   |

### Slots

| Name      | Props       | Description                        |
| --------- | ----------- | ---------------------------------- |
| `default` | `iconClass` | default 插槽包含浮动按钮文字或图标 |
| `before`  | `iconClass` | 自定义扩展浮动按钮的首图标         |
| `after`   | `iconClass` | 自定义扩展浮动按钮的尾图标         |

> 提示：扩展浮动按钮的 default 插槽没有 `slot-scope`

```html
<ui-fab>
  <template #default="{ iconClass }">
    <ui-icon :class="iconClass">ICON</ui-icon>
  </template>
</ui-fab>

<ui-fab extended>
  <template #before="{ iconClass }">
    <ui-icon :class="iconClass">ICON</ui-icon>
  </template>
  Text label
</ui-fab>
```

### Events

| Name    | Type                      | Description        |
| ------- | ------------------------- | ------------------ |
| `click` | `function(event: object)` | 点击浮动按钮时触发 |
