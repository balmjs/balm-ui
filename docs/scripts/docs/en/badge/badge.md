```html
<ui-badge></ui-badge>
```

### Props

| Name       | Type    | Default | Description                                  |
| ---------- | ------- | ------- | -------------------------------------------- |
| `count`    | number  | `0`     | Number to show in badge.                     |
| `overlap`  | boolean | `false` | Make the badge overlap with its container.   |
| `maxCount` | number  | `99`    | Max count to show.                           |
| `dot`      | boolean | `false` | Whether to display a dot instead of `count`. |
| `state`    | string  | `''`    | State type for text badge.                   |

```ts
interface Badge {
  state: 'success' | 'info' | 'warning' | 'error' | 'help';
}
```

### Slots

| Name      | Props | Description                                                   |
| --------- | ----- | ------------------------------------------------------------- |
| `default` |       | The default slot holds the text content and can contain HTML. |
| `badge`   |       | The badge slot holds the custom badge content.                |
