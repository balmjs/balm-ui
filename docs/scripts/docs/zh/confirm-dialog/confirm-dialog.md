- `$confirm(message)`
- `$confirm(options)`

  ```ts
  interface VueInstance {
    $confirm(options: string | object): Promise<boolean>;
  }
  ```

### Options

| Option          | Type     | Default    | Description          |
| --------------- | -------- | ---------- | -------------------- |
| `className`     | string   | `''`       | 自定义确认框的 class |
| `title`         | string   | `''`       | 设置确认框的标题     |
| `state`         | string   | `''`       | 确认框状态图标类型   |
| `stateOutlined` | boolean  | `false`    | 显示轮廓状态图标     |
| `message`       | string   | `''`       | 设置确认框的内容     |
| `raw`           | boolean  | `false`    | 渲染 HTML            |
| `acceptText`    | string   | `'OK'`     | 确定按钮文本         |
| `cancelText`    | string   | `'Cancel'` | 取消按钮文本         |
| `callback`      | function | `false`    | 点击按钮后的事件处理 |

```ts
interface ConfirmDialog {
  state: 'success' | 'info' | 'warning' | 'error' | 'help';
}
```

### Events

- 用法 1

  ```js
  $confirm({
    message,
    callback(result) {
      // ...
    }
  });
  ```

- 用法 2（推荐）

  ```js
  $confirm(message).then((result) => {
    // ...
  });
  ```

> `result` 是一个布尔值，指示是否选择了“确定”或“取消”（`true`表示确定）

### 在非 `.vue` 组件中使用 `$confirm`

```js
import { useConfirm } from 'balm-ui';
// 或
// import { useConfirm } from 'balm-ui/plugins/confirm';

const $confirm = useConfirm();
$confirm('Hello BalmUI');
```
