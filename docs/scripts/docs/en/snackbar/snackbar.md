```html
<ui-snackbar><!-- the message text --></ui-snackbar>
```

### Props

| Name                     | Type    | Default | Description                                                                                                                                   |
| ------------------------ | ------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `actionType`             | number  | `0`     | Mandatory. Set action button or dismiss icon for the snackbar. (`0`: action button, `1`: dismiss icon)                                        |
| `modelValue` (`v-model`) | boolean | `false` | Mandatory.                                                                                                                                    |
| `timeoutMs`              | number  | `5000`  | Optional. The automatic dismiss timeout in milliseconds. Value must be between `4000` and `10000` or an error will be thrown.                 |
| `message`                | string  | `''`    | Mandatory. Message text.                                                                                                                      |
| `actionButtonText`       | string  | `''`    | Optional. The action button/icon elements, if present.                                                                                        |
| `stacked`                | boolean | `false` | Optional. Positions the action button/icon below the message instead of alongside it.                                                         |
| `leading`                | boolean | `false` | Optional. Positions the snackbar on the leading edge of the screen (left in LTR, right in RTL) instead of centered. (tablet and desktop only) |

### Slots

| Name      | Props         | Description                                               |
| --------- | ------------- | --------------------------------------------------------- |
| `default` |               | The default slot holds the message text for the snackbar. |
| `action`  | `actionClass` | The custom action button.                                 |

### Events

| Name                | Type                      | Description                        |
| ------------------- | ------------------------- | ---------------------------------- |
| `update:modelValue` | `function(open: boolean)` | Emits when the snackbar is hidden. |
| `closed`            | `function()`              | Emits when the snackbar is closed. |

> NOTE: If you are not using `v-model`, you should listen for the snackbar using `@update:modelValue` and update the `modelValue` prop.

- Automatic

  ```html
  <ui-snackbar v-model="open"></ui-snackbar>
  ```

- Manual

  ```html
  <ui-snackbar
    :model-value="open"
    @update:modelValue="balmUI.onChange('open', $event)"
  ></ui-snackbar>
  ```
