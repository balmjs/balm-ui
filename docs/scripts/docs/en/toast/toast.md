- `$toast(message)`
- `$toast(options)`

  ```ts
  type ToastMessage = string;

  interface ToastOptions {
    className?: string;
    timeoutMs?: number;
    message: ToastMessage;
    position?: 'bottom' | 'center' | 'top';
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
| `position`  | string | `'bottom'` | Toast position.                                                                                                           | 8.30.0  |

### Use `$toast` without `.vue` component

> New in 8.1.0

```js
import { useToast } from 'balm-ui';
// OR
// import { useToast } from 'balm-ui/plugins/toast';

const $toast = useToast();
$toast('Hello BalmUI');
```
