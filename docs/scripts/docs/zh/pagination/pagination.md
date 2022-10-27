```html
<ui-pagination></ui-pagination>
```

### Props

| Name                   | Type            | Default           | Description                          | Version |
| ---------------------- | --------------- | ----------------- | ------------------------------------ | ------- |
| `page`                 | number          | `1`               | 页码                                 |         |
| `total`                | number          | `0`               | 数据总数                             |         |
| `pageSpan`             | number, boolean | `3`               | 展示当前页码的前 N 页（最小值：`3`） |         |
| `showTotal`            | boolean         | `false`           | 显示数据量信息区域                   |         |
| `pageSize`             | number, array   | `10`              | 每页展示的数据量                     |         |
| `pageSizeText`         | string, array   | `'Rows per page'` | 每页数据量信息展示的前/后文字        |         |
| `ofText`               | string          | `'of'`            | 数据量信息区域中的 of 文字           | 8.47.0  |
| `unitText`             | string          | `''`              | 数据量信息区域中的 单位 文字         | 8.56.0  |
| `showJumper`           | boolean         | `false`           | 显示跳转区域                         |         |
| `jumperText`           | string, array   | `'Goto'`          | 跳转区域展示的前/后文字              |         |
| `jumperButtonOutlined` | boolean         | `false`           | 跳转按钮启用轮廓按钮样式             | 8.20.0  |
| `jumperButtonText`     | string          | `''`              | 跳转按钮文字                         |         |
| `position`             | string          | `''`              | 分页排版位置                         |         |
| `mini`                 | boolean         | `false`           | 使用迷你模式                         |         |

```ts
interface Pagination {
  position: 'left' | 'center' | 'right';
}
```

### Slots

| Name      | Props                            | Description          | Version |
| --------- | -------------------------------- | -------------------- | ------- |
| `default` | `currentMinRow`, `currentMaxRow` | 自定义数据量信息区域 | 8.11.0  |
| `first`   |                                  | 自定义首页按钮图标   |         |
| `prev`    |                                  | 自定义上页按钮图标   |         |
| `next`    |                                  | 自定义下页按钮图标   |         |
| `last`    |                                  | 自定义尾页按钮图标   |         |

### Events

| Name     | Type                     | Description    |
| -------- | ------------------------ | -------------- |
| `change` | `function(page: number)` | 页码变化时触发 |

> 提示：如果你不使用 `v-model` 绑定数据，你应该使用 `@change` 监听分页页码状态并更新 `page` 属性

- 自动

  ```html
  <ui-pagination v-model="page"></ui-pagination>
  ```

- 手动

  ```html
  <ui-pagination
    :page="page"
    @change="$balmUI.onChange('page', $event)"
  ></ui-pagination>
  ```
