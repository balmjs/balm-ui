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

| Option      | Type   | Default    | Description                                                                          | Version |
| ----------- | ------ | ---------- | ------------------------------------------------------------------------------------ | ------- |
| `className` | string | `''`       | 自定义短消息提示的 class                                                             |         |
| `timeoutMs` | number | `2750`     | 自动关闭的超时时间（以毫秒为单位）。值必须在 `2000` 和 `3500` 之间，否则会引发错误。 |         |
| `message`   | string | `''`       | 短消息文本                                                                           |         |
| `position`  | string | `'bottom'` | 短消息提示的位置                                                                     | 9.21.0  |

### 在非 `.vue` 组件中使用 `$toast`

```js
import { useToast } from 'balm-ui/dist/balm-ui-plus';
// 或
// import { useToast } from 'balm-ui/plugins/toast';

const $toast = useToast();
$toast('Hello BalmUI');
```
