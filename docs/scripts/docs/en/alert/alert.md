```html
<ui-alert><!-- message --></ui-alert>
```

### Props

| Name            | Type    | Default | Description                  |
| --------------- | ------- | ------- | ---------------------------- |
| `state`         | string  | `''`    | State type.                  |
| `stateOutlined` | boolean | `false` | Show outlined state.         |
| `closable`      | boolean | `false` | Whether alert can be closed. |

```ts
interface Alert {
  state: 'success' | 'info' | 'warning' | 'error' | 'help';
}
```

### Slots

| Name      | Props | Description                                                      |
| --------- | ----- | ---------------------------------------------------------------- |
| `default` |       | The default slot holds the message content and can contain HTML. |
