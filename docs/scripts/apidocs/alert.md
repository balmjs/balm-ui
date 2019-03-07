```js
// Usage 1
$alert(message);

// Usage 2
$alert(options);
```

#### Options

| Option       | Type     | Default | Description                                         |
| ------------ | -------- | ------- | --------------------------------------------------- |
| `className`  | string   | `''`    | The custom class name for the alert dialog.         |
| `title`      | string   | `''`    | The title of the alert dialog.                      |
| `message`    | string   | `''`    | The content to be displayed in the alert dialog.    |
| `buttonText` | string   | `'OK'`  | Alert button content.                               |
| `callback`   | function | `false` | Handle some event when the alert button is clicked. |

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
