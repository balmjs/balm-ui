```html
<ui-linear-progress></ui-linear-progress>
```

#### Props

| Name       | Type    | Default | Description                                                            |
| ---------- | ------- | ------- | ---------------------------------------------------------------------- |
| `active`   | boolean | `false` | Puts the linear progress indicator in an indeterminate state.          |
| `progress` | number  | `0`     | Sets the progress bar to this value. Value should be between `[0, 1]`. |
| `buffer`   | number  | `0`     | Sets the buffer bar to this value. Value should be between `[0, 1]`.   |
| `reversed` | boolean | `false` | Reverses the direction of the linear progress indicator.               |
| `label`    | string  | `null`  | Label indicating how the progress bar should be announced to the user. |
| `closed`   | boolean | `false` | Hides the linear progress indicator.                                   |
