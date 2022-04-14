```html
<ui-dialog><!-- the dialog child components --></ui-dialog>
```

> NOTE: `<ui-dialog>` must be including a `<ui-button>` or `<ui-icon-button>` for actions.

### Props

| Name                     | Type    | Default | Description                                                                                                              | Version |
| ------------------------ | ------- | ------- | ------------------------------------------------------------------------------------------------------------------------ | ------- |
| `modelValue` (`v-model`) | boolean | `false` | Mandatory.                                                                                                               |         |
| `escapeKey`              | boolean | `true`  | Sets the action reflected when the Escape key is pressed. Setting to `false` disables closing the dialog via Escape key. | 9.13.0  |
| `closable`               | boolean | `true`  | Closes the dialog, when a user actions on the accept or cancel button.                                                   |         |
| `maskClosable`           | boolean | `false` | Closes the dialog, when the dialog scrim is clicked.                                                                     |         |
| `noScrim`                | boolean | `false` | Hides the dialog scrim.                                                                                                  |         |
| `resetScroll`            | boolean | `false` | Reset scroll bar, when the dialog is closed.                                                                             |         |
| `fullscreen`             | boolean | `false` | Styles a full-screen dialog.                                                                                             | 9.14.0  |

> NOTE: The `noBackdrop` prop rename to `noScrim` in 9.25.0

> NOTE: Full-screen dialogs are intended for mobile/small-screen devices. The dialog's size will adapt to the screen size, and so becomes modal if used on larger screen sizes.

### Slots

| Name      | Props | Description                                         |
| --------- | ----- | --------------------------------------------------- |
| `default` |       | The default slot holds the dialog child components. |

**Child components:**

- `<ui-dialog-title>`
- `<ui-dialog-content>`
- `<ui-dialog-actions>`

### Events

| Name                | Type                        | Description                               |
| ------------------- | --------------------------- | ----------------------------------------- |
| `update:modelValue` | `function(open: boolean)`   | Emits when the dialog is changed.         |
| `close`             | `function()`                | Emits when the dialog is closed.          |
| `confirm`           | `function(result: boolean)` | Emits when the action buttons is clicked. |
| `accept`            | `function()`                | Emits when the accept button is clicked.  |
| `cancel`            | `function()`                | Emits when the cancel button is clicked.  |

> NOTE: If you are not using `v-model`, you should listen for the dialog using `@update:modelValue` and update the `modelValue` prop.

- Automatic

  ```html
  <ui-dialog v-model="open"></ui-dialog>
  ```

- Manual

  ```html
  <ui-dialog
    :model-value="open"
    @update:model-value="balmUI.onChange('open', $event)"
  ></ui-dialog>
  ```
