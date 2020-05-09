```html
<ui-alert><!-- message --></ui-alert>
```

#### Props

| Name           | Type    | Default | Description                                                  |
| -------------- | ------- | ------- | ------------------------------------------------------------ |
| `icon`         | string  | `''`    | Icon type. `['success', 'info', 'warning', 'error', 'help']` |
| `iconOutlined` | boolean | `false` | Show outlined icon.                                          |
| `closable`     | boolean | `false` | Whether alert can be closed.                                 |

#### Slots

| Name      | Props | Description                                                      |
| --------- | ----- | ---------------------------------------------------------------- |
| `default` |       | The default slot holds the message content and can contain HTML. |
