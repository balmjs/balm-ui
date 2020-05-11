```html
<ui-alert><!-- message --></ui-alert>
```

#### Props

| Name            | Type    | Default | Description                                                   |
| --------------- | ------- | ------- | ------------------------------------------------------------- |
| `state`         | string  | `''`    | State type. `['success', 'info', 'warning', 'error', 'help']` |
| `stateOutlined` | boolean | `false` | Show outlined state.                                          |
| `closable`      | boolean | `false` | Whether alert can be closed.                                  |

#### Slots

| Name      | Props | Description                                                      |
| --------- | ----- | ---------------------------------------------------------------- |
| `default` |       | The default slot holds the message content and can contain HTML. |
