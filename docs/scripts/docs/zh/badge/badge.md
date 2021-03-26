```html
<ui-badge></ui-badge>
```

### Props

| Name       | Type    | Default | Description            |
| ---------- | ------- | ------- | ---------------------- |
| `count`    | number  | `0`     | 徽章中显示的数字       |
| `overlap`  | boolean | `false` | 使徽章与其容器重叠     |
| `maxCount` | number  | `99`    | 可显示的最大数         |
| `dot`      | boolean | `false` | 使用小圆点代替数字显示 |
| `state`    | string  | `''`    | 徽章的状态类型         |

```ts
interface Badge {
  state: 'success' | 'info' | 'warning' | 'error' | 'help';
}
```

### Slots

| Name      | Props | Description                         |
| --------- | ----- | ----------------------------------- |
| `default` |       | default 插槽包含徽章文字内容及 HTML |
| `badge`   |       | 自定义徽章内容                      |
