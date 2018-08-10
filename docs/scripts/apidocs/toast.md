<!-- className: '',
  alignStart: false,
  message: '',
  timeout: 2750,
  multiline: false,
  fouc: false -->

```js
// Usage 1
$toast(message);

// Usage 2
$toast(options);
```

#### Options

| Option     | Type      | Default | Description                                                      |
| ---------- | --------- | ------- | ---------------------------------------------------------------- |
| className  | `String`  | `''`    | The custom class name for the toast.                             |
| alignStart | `Boolean` | `false` | To create a start-aligned toast.                                 |
| message    | `String`  | `''`    | The text message to display.                                     |
| timeout    | `Number`  | `2750`  | The amount of time in milliseconds to show the toast.            |
| multiline  | `Boolean` | `false` | Whether to show the toast with space for multiple lines of text. |
| fouc       | `Boolean` | `false` | Avoiding Flash-Of-Unstyled-Content.                              |
