```html
<ui-alert><!-- message --></ui-alert>
```

### Props

| Name            | Type    | Default | Description      |
| --------------- | ------- | ------- | ---------------- |
| `state`         | string  | `''`    | 状态图标类型     |
| `stateOutlined` | boolean | `false` | 显示轮廓状态图标 |
| `closable`      | boolean | `false` | 是否可关闭       |

```ts
interface Alert {
  state: 'success' | 'info' | 'warning' | 'error' | 'help';
}
```

### Slots

| Name      | Props | Description                     |
| --------- | ----- | ------------------------------- |
| `default` |       | default 插槽包含消息内容及 HTML |
