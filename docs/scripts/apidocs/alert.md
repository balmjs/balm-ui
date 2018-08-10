```js
// Usage 1
$alert(message);

// Usage 2
$alert(options);
```

#### Options

| Option     | Type       | Default | Description                                         |
| ---------- | ---------- | ------- | --------------------------------------------------- |
| className  | `String`   | `''`    | The custom class name for the alert dialog.         |
| title      | `String`   | `''`    | The title of the alert dialog.                      |
| message    | `String`   | `''`    | The content to be displayed in the alert dialog.    |
| buttonText | `String`   | `'OK'`  | Alert button content.                               |
| callback   | `Function` | `false` | Handle some event when the alert button is clicked. |

#### Events

```js
// Usage 1
$alert({
  message,
  callback() {
    // ...
  }
});

// Usage 2 (Recommended)
$alert(message).then(() => {
  // ...
});
```
