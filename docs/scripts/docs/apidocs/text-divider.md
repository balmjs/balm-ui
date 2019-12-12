```html
<ui-text-divider><!-- Inline Text --></ui-text-divider>
```

### `<ui-text-divider>` Types

- `0`: `'horizontal'`
- `1`: `'vertical'`

#### Props

| Name     | Type           | Default | Description                    |
| -------- | -------------- | ------- | ------------------------------ |
| `type`   | string, number | `0`     | Mandatory. Text divider types. |
| `noText` | boolean        | `false` | Show divider without text.     |

#### Slots

| Name      | Slots | Description                                                   |
| --------- | ----- | ------------------------------------------------------------- |
| `default` |       | The default slot holds the divider text and can contain HTML. |
| `left`    |       | Applicable only for the vertical text divider.                |
| `right`   |       | Applicable only for the vertical text divider.                |
