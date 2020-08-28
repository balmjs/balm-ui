```js
// Usage 1
$toast(message);

// Usage 2
$toast(options);
```

### Options

| Option      | Type   | Default | Description                                                                                                                |
| ----------- | ------ | ------- | -------------------------------------------------------------------------------------------------------------------------- |
| `className` | string | `''`    | The custom class name for the toast.                                                                                       |
| `timeoutMs` | number | `4000`  | The amount of time in milliseconds to show the toast. Value must be between `4000` and `10000` or an error will be thrown. |
| `message`   | string | `''`    | The text message to display.                                                                                               |
