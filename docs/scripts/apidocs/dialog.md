```html
<ui-dialog><!-- the dialog child components --></ui-dialog>
```

#### Props

| Name           | Type      | Default | Description                                                            |
| -------------- | --------- | ------- | ---------------------------------------------------------------------- |
| open (v-model) | `Boolean` | `false` | Mandatory.                                                             |
| closable       | `Boolean` | `true`  | Closes the dialog, when a user actions on the accept or cancel button. |
| maskClosable   | `Boolean` | `false` | Closes the dialog, when the dialog backdrop is clicked.                |
| noBackdrop     | `Boolean` | `false` | Hides the dialog backdrop.                                             |
| resetScroll    | `Boolean` | `false` | Reset scroll bar, when the dialog is closed.                           |

#### Slots

| Name      | Description                                         |
| --------- | --------------------------------------------------- |
| (default) | The default slot holds the dialog child components. |

**Dialog child components:**

- `<ui-dialog-header>`
- `<ui-dialog-body>`
- `<ui-dialog-footer>`

#### Events

| Name    | Type                        | Description                               |
| ------- | --------------------------- | ----------------------------------------- |
| change  | `Function(open: boolean)`   | Emits when the dialog is changed.         |
| close   | `Function()`                | Emits when the dialog is closed.          |
| confirm | `Function(result: boolean)` | Emits when the action buttons is clicked. |
| accept  | `Function()`                | Emits when the accept button is clicked.  |
| cancel  | `Function()`                | Emits when the cancel button is clicked.  |

> NOTE: If you are not using `v-model`, you should listen for the dialog using `@change` and update the `open` prop.

```html
// Automatic
<ui-dialog v-model="open"></ui-dialog>

// Manual
<ui-dialog :open="open" @change="$balmUI.onChange('open', $event)"></ui-dialog>
```
