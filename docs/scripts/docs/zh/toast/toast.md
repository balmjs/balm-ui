- `$toast(message)`
- `$toast(options)`

  ```ts
  interface VueInstance {
    $toast(options: string | object): Promise<void>;
  }
  ```

### Options

| Option      | Type   | Default | Description                                                                          |
| ----------- | ------ | ------- | ------------------------------------------------------------------------------------ |
| `className` | string | `''`    | 自定义短消息提示的 class                                                             |
| `timeoutMs` | number | `1800`  | 自动关闭的超时时间（以毫秒为单位）。值必须在 `1000` 和 `4000` 之间，否则会引发错误。 |
| `message`   | string | `''`    | 短消息文本                                                                           |

### 在非 `.vue` 组件中使用 `$toast`

> New in 8.1.0

```js
import { useToast } from 'balm-ui/dist/balm-ui-plus';
// 或
// import { useToast } from 'balm-ui/plugins/toast';

const $toast = useToast();
$toast('Hello BalmUI');
```
