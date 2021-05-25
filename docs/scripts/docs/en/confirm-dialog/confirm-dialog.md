- `$confirm(message)`
- `$confirm(options)`

  ```ts
  interface VueInstance {
    $confirm(options: string | object): Promise<boolean>;
  }
  ```

### Options

| Option          | Type     | Default    | Description                                           |
| --------------- | -------- | ---------- | ----------------------------------------------------- |
| `className`     | string   | `''`       | The custom class name for the confirm dialog.         |
| `title`         | string   | `''`       | The title of the confirm dialog.                      |
| `state`         | string   | `''`       | State type.                                           |
| `stateOutlined` | boolean  | `false`    | Show outlined state.                                  |
| `message`       | string   | `''`       | The content to be displayed in the confirm dialog.    |
| `raw`           | boolean  | `false`    | Rendered plain HTML.                                  |
| `acceptText`    | string   | `'OK'`     | Accept button content.                                |
| `cancelText`    | string   | `'Cancel'` | Cancel button content.                                |
| `callback`      | function | `false`    | Handle some event when the confirm button is clicked. |

```ts
interface ConfirmDialog {
  state: 'success' | 'info' | 'warning' | 'error' | 'help';
}
```

### Events

- Usage 1

  ```js
  $confirm({
    message,
    callback(result) {
      // ...
    }
  });
  ```

- Usage 2 (Recommended)

  ```js
  $confirm(message).then((result) => {
    // ...
  });
  ```

> `result` is a boolean value indicating whether OK or Cancel was selected (`true` means OK).

### Use `$confirm` without `.vue` component

> New in 8.1.0

```js
import { useConfirm } from 'balm-ui';
// OR
// import { useConfirm } from 'balm-ui/plugins/confirm';

const $confirm = useConfirm();
$confirm('Hello BalmUI');
```
