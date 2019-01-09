```html
<ui-snackbar><!-- the label text --></ui-snackbar>
```

#### Props

| Name             | Type               | Default    | Description                                                                                                                                   |
| ---------------- | ------------------ | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| open (v-model)   | `Boolean`          | `false`    | Mandatory.                                                                                                                                    |
| timeoutMs        | `Number`, `String` | `5000`     | Optional. The automatic dismiss timeout in milliseconds. Value must be between `4000` and `10000` or an error will be thrown.                 |
| labelText        | `String`           | `''`       | Mandatory. Message text.                                                                                                                      |
| actionButtonText | `String`           | `null`     | Optional. The action button/icon elements, if present.                                                                                        |
| actionType       | `String`           | `'button'` | Optional. Set action button or icon.                                                                                                          |
| stacked          | `Boolean`          | `false`    | Optional. Positions the action button/icon below the label instead of alongside it.                                                           |
| leading          | `Boolean`          | `false`    | Optional. Positions the snackbar on the leading edge of the screen (left in LTR, right in RTL) instead of centered. (tablet and desktop only) |

#### Slots

| Name      | Description                                             |
| --------- | ------------------------------------------------------- |
| (default) | The default slot holds the label text for the snackbar. |

#### Events

| Name   | Type                      | Description                        |
| ------ | ------------------------- | ---------------------------------- |
| change | `Function(open: boolean)` | Emits when the snackbar is hidden. |
| closed | `Function()`              | Emits when the snackbar is closed. |

> NOTE: If you are not using `v-model`, you should listen for the snackbar using `@change` and update the `open` prop.

```html
// Automatic
<ui-snackbar v-model="open"></ui-snackbar>

// Manual
<ui-snackbar
  :open="open"
  @change="$balmUI.onChange('open', $event)"
></ui-snackbar>
```

#### Sass Variables

Coming Soon...
