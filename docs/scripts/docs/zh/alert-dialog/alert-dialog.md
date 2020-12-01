```js
// Usage 1
$alert(message);

// Usage 2
$alert(options);
```

### Options

| Option          | Type     | Default | Description                                                   |
| --------------- | -------- | ------- | ------------------------------------------------------------- |
| `className`     | string   | `''`    | The custom class name for the alert dialog.                   |
| `title`         | string   | `''`    | The title of the alert dialog.                                |
| `state`         | string   | `''`    | State type. `['success', 'info', 'warning', 'error', 'help']` |
| `stateOutlined` | boolean  | `false` | Show outlined state.                                          |
| `message`       | string   | `''`    | The content to be displayed in the alert dialog.              |
| `raw`           | boolean  | `false` | Rendered plain HTML.                                          |
| `buttonText`    | string   | `'OK'`  | Alert button content.                                         |
| `callback`      | function | `false` | Handle some event when the alert button is clicked.           |

### Events

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

### Use `$alert` without `.vue` component

```js
import { useAlert } from 'balm-ui';
// OR
// import { useAlert } from 'balm-ui/plugins/alert';

const $alert = useAlert();
$alert('Hello BalmUI');
```
