```js
// Usage 1
$confirm(message);

// Usage 2
$confirm(options);
```

### Options

| Option          | Type     | Default    | Description                                                   |
| --------------- | -------- | ---------- | ------------------------------------------------------------- |
| `className`     | string   | `''`       | The custom class name for the confirm dialog.                 |
| `title`         | string   | `''`       | The title of the confirm dialog.                              |
| `state`         | string   | `''`       | State type. `['success', 'info', 'warning', 'error', 'help']` |
| `stateOutlined` | boolean  | `false`    | Show outlined state.                                          |
| `message`       | string   | `''`       | The content to be displayed in the confirm dialog.            |
| `raw`           | boolean  | `false`    | Rendered plain HTML.                                          |
| `acceptText`    | string   | `'OK'`     | Accept button content.                                        |
| `cancelText`    | string   | `'Cancel'` | Cancel button content.                                        |
| `callback`      | function | `false`    | Handle some event when the confirm button is clicked.         |

### Events

```js
// Usage 1
$confirm({
  message,
  callback(result) {
    // ...
  }
});

// Usage 2 (Recommended)
$confirm(message).then((result) => {
  // ...
});
```

> `result` is a boolean value indicating whether OK or Cancel was selected (`true` means OK).
