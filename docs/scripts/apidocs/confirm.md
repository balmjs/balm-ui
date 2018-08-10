```js
// Usage 1
$confirm(message);

// Usage 2
$confirm(options);
```

#### Options

| Option     | Type       | Default    | Description                                           |
| ---------- | ---------- | ---------- | ----------------------------------------------------- |
| className  | `String`   | `''`       | The custom class name for the confirm dialog.         |
| title      | `String`   | `''`       | The title of the confirm dialog.                      |
| message    | `String`   | `''`       | The content to be displayed in the confirm dialog.    |
| acceptText | `String`   | `'OK'`     | Accept button content.                                |
| cancelText | `String`   | `'Cancel'` | Cancel button content.                                |
| callback   | `Function` | `false`    | Handle some event when the confirm button is clicked. |

#### Events

```js
// Usage 1
$confirm({
  message,
  callback(result) {
    // ...
  }
});

// Usage 2 (Recommended)
$confirm(message).then(result => {
  // ...
});
```

> `result` is a boolean value indicating whether OK or Cancel was selected (`true` means OK).
