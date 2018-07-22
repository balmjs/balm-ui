```html
<ui-snackbar><!-- the message --></ui-snackbar>
```

#### Props

| Name             | Type               | Default | Description                                                                                            |
| ---------------- | ------------------ | ------- | ------------------------------------------------------------------------------------------------------ |
| active (v-model) | `Boolean`          | `false` | Mandatory.                                                                                             |
| alignStart       | `Boolean`          | `false` | To create a start-aligned snackbar.                                                                    |
| message          | `String`           | `''`    | Required. The text message to display.                                                                 |
| timeout          | `Number`, `String` | `2750`  | Optional. The amount of time in milliseconds to show the snackbar.                                     |
| actionHandler    | `Function`         | `null`  | Optional. The function to execute when the action is clicked.                                          |
| actionText       | `String`           | `null`  | Required if actionHandler is set. The text to display for the action button.                           |
| multiline        | `Boolean`          | `false` | Optional. Whether to show the snackbar with space for multiple lines of text.                          |
| actionOnBottom   | `Boolean`          | `false` | Optional, applies when multiline is true. Whether to show the action below the multiple lines of text. |
| dismiss          | `Boolean`          | `true`  | By default the snackbar will be dimissed when the user presses the action button.                      |
| fouc             | `Boolean`          | `false` | Avoiding Flash-Of-Unstyled-Content.                                                                    |

#### Slots

| Name      | Description                                          |
| --------- | ---------------------------------------------------- |
| (default) | The default slot holds the message for the snackbar. |

#### Events

| Name   | Type                        | Description                        |
| ------ | --------------------------- | ---------------------------------- |
| change | `Function(active: boolean)` | Emits when the snackbar is hidden. |

> NOTE: If you are not using `v-model`, you should listen for the snackbar using `@change` and update the `active` prop.

```html
// Automatic
<ui-snackbar v-model="active"></ui-snackbar>

// Manual
<ui-snackbar :active="active" @change="$balmUI.onChange('active', $event)"></ui-snackbar>
```
