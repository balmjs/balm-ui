```html
<ui-spinner></ui-spinner>
```

### Props

| Name          | Type    | Default   | Description                              |
| ------------- | ------- | --------- | ---------------------------------------- |
| `active`      | boolean | `false`   | 启用加载中状态                           |
| `progress`    | number  | `0`       | 设置进度条的值。值应介于 `[0, 1]` 之间。 |
| `size`        | string  | `'large'` | 设置进度条尺寸                           |
| `fourColored` | boolean | `false`   | 启用 4 种颜色循环                        |
| `label`       | string  | `''`      | 进度条的标签                             |
| `closed`      | boolean | `false`   | 隐藏进度条                               |

- **尺寸值：**

  ```ts
  interface Spinner {
    size: 'large' | 'L' | 'medium' | 'M' | 'small' | 'S';
  }
  ```
