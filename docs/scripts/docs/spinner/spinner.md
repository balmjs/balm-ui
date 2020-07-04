```html
<ui-spinner></ui-spinner>
```

#### Props

| Name          | Type    | Default   | Description                                                                         |
| ------------- | ------- | --------- | ----------------------------------------------------------------------------------- |
| `active`      | boolean | `false`   | Puts the circular progress indicator in an indeterminate state.                     |
| `progress`    | number  | `0`       | Sets the progress bar to this value. Value should be between `[0, 1]`.              |
| `size`        | string  | `'large'` | To set the circular progress size.                                                  |
| `fourColored` | boolean | `false`   | You may choose to have the indicator in inderminate state animate through 4 colors. |
| `label`       | string  | `''`      | Label indicating how the progress bar should be announced to the user.              |
| `closed`      | boolean | `false`   | Hides the circular progress indicator.                                              |

- **Sizing:** `'large'`(`'L'`), `'medium'`(`'M'`), `'small'`(`'S'`).
