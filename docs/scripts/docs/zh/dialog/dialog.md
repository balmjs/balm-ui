```html
<ui-dialog><!-- the dialog child components --></ui-dialog>
```

> 提示：`<ui-dialog>` 的动作必须包含至少一个 `<ui-button>` 或 `<ui-icon-button>`

### Props

| Name                     | Type    | Default | Description                                                                                                              | Version |
| ------------------------ | ------- | ------- | ------------------------------------------------------------------------------------------------------------------------ | ------- |
| `modelValue` (`v-model`) | boolean | `false` | Mandatory.                                                                                                               |         |
| `escapeKey`              | boolean | `true`  | Sets the action reflected when the Escape key is pressed. Setting to `false` disables closing the dialog via Escape key. | 9.13.0  |
| `closable`               | boolean | `true`  | Closes the dialog, when a user actions on the accept or cancel button.                                                   |         |
| `maskClosable`           | boolean | `false` | Closes the dialog, when the dialog backdrop is clicked.                                                                  |         |
| `noBackdrop`             | boolean | `false` | Hides the dialog backdrop.                                                                                               |         |
| `resetScroll`            | boolean | `false` | Reset scroll bar, when the dialog is closed.                                                                             |         |
| `scrollable`             | boolean | `false` | Optional. Applied automatically when the dialog has overflowing content to warrant scrolling.                            |         |
| `stacked`                | boolean | `false` | Optional. Applied automatically when the dialog's action buttons can't fit on a single line and must be stacked.         |         |

### Slots

| Name      | Props | Description                                         |
| --------- | ----- | --------------------------------------------------- |
| `default` |       | The default slot holds the dialog child components. |

**Child components:**

- `<ui-dialog-title>`
- `<ui-dialog-content>`
- `<ui-dialog-actions>`

### Events

| Name                | Type                            | Description                               |
| ------------------- | ------------------------------- | ----------------------------------------- |
| `update:modelValue` | `function(modelValue: boolean)` | Emits when the dialog is changed.         |
| `close`             | `function()`                    | Emits when the dialog is closed.          |
| `confirm`           | `function(result: boolean)`     | Emits when the action buttons is clicked. |
| `accept`            | `function()`                    | Emits when the accept button is clicked.  |
| `cancel`            | `function()`                    | Emits when the cancel button is clicked.  |

> NOTE: If you are not using `v-model`, you should listen for the dialog using `@update:modelValue` and update the `modelValue` prop.

- Automatic

  ```html
  <ui-dialog v-model="open"></ui-dialog>
  ```

- Manual

  ```html
  <ui-dialog
    :model-value="open"
    @update:modelValue="balmUI.onChange('open', $event)"
  ></ui-dialog>
  ```
