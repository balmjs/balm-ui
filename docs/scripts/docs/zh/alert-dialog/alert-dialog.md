- `$alert(message)`
- `$alert(options)`

  ```ts
  interface VueInstance {
    $alert(options: string | object): Promise<void>;
  }
  ```

### Options

| Option          | Type     | Default | Description              |
| --------------- | -------- | ------- | ------------------------ |
| `className`     | string   | `''`    | 自定义警告框的 class     |
| `title`         | string   | `''`    | 设置警告框的标题         |
| `state`         | string   | `''`    | 警告框状态图标类型       |
| `stateOutlined` | boolean  | `false` | 显示轮廓状态图标         |
| `message`       | string   | `''`    | 设置警告框的内容         |
| `raw`           | boolean  | `false` | 渲染 HTML                |
| `buttonText`    | string   | `'OK'`  | 按钮文本                 |
| `callback`      | function | `false` | 点击确定按钮后的事件处理 |

```ts
interface AlertDialog {
  state: 'success' | 'info' | 'warning' | 'error' | 'help';
}
```

### Events

- 用法 1

  ```js
  $alert({
    message,
    callback() {
      // ...
    }
  });
  ```

- 用法 2（推荐）

  ```js
  $alert(message).then(() => {
    // ...
  });
  ```

### 在非 `.vue` 组件中使用 `$alert`

> New in 8.1.0

```js
import { useAlert } from 'balm-ui/dist/balm-ui-plus';
// 或
// import { useAlert } from 'balm-ui/plugins/alert';

const $alert = useAlert();
$alert('Hello BalmUI');
```
