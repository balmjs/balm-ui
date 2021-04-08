- `$toast(message)`
- `$toast(options)`

  ```ts
  type ToastMessage = string;

  interface ToastOptions {
    className?: string;
    timeoutMs?: number;
    message: ToastMessage;
    position?: string;
  }

  interface VueInstance {
    $toast(options: ToastMessage | ToastOptions): Promise<void>;
  }
  ```

### Options

| Option      | Type   | Default    | Description                                                                                                               | Version |
| ----------- | ------ | ---------- | ------------------------------------------------------------------------------------------------------------------------- | ------- |
| `className` | string | `''`       | The custom class name for the toast.                                                                                      |         |
| `timeoutMs` | number | `2750`     | The amount of time in milliseconds to show the toast. Value must be between `2000` and `3500` or an error will be thrown. |         |
| `message`   | string | `''`       | The text message to display.                                                                                              |         |
| `position`  | string | `'bottom'` | Toast position.                                                                                                           | 9.21.0  |

### Use `$toast` without `.vue` component

```js
import { useToast } from 'balm-ui/dist/balm-ui-plus';
// OR
// import { useToast } from 'balm-ui/plugins/toast';

const $toast = useToast();
$toast('Hello BalmUI');
```
