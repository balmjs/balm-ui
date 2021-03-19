```html
<ui-pagination></ui-pagination>
```

### Props

| Name                   | Type            | Default           | Description                                                     | Version |
| ---------------------- | --------------- | ----------------- | --------------------------------------------------------------- | ------- |
| `page`                 | number          | `1`               | Current page number.                                            |         |
| `total`                | number          | `0`               | The total number of data items.                                 |         |
| `pageSpan`             | number, boolean | `3`               | Display the first N pages of the current page. (MIN VALUE: `3`) |         |
| `showTotal`            | boolean         | `false`           | Display total info.                                             |         |
| `pageSize`             | number, array   | `10`              | The number of data items per page.                              |         |
| `pageSizeText`         | string, array   | `'Rows per page'` | The page size before/after text.                                |         |
| `showJumper`           | boolean         | `false`           | Determine whether you can jump to pages directly.               |         |
| `jumperText`           | string, array   | `'Goto'`          | The jumper before/after text.                                   |         |
| `jumperButtonOutlined` | boolean         | `false`           | Styles an outlined jumper button.                               | 8.20.0  |
| `jumperButtonText`     | string          | `''`              | The jumper button text.                                         |         |
| `position`             | string          | `''`              | The pagination postion. [`'left'`, `'center'`, `'right'`]       |         |
| `mini`                 | boolean         | `false`           | Whether to use simple mode.                                     |         |

### Slots

| Name      | Props                            | Description                      | Version |
| --------- | -------------------------------- | -------------------------------- | ------- |
| `default` | `currentMinRow`, `currentMaxRow` | The custom page size area.       | 8.11.0  |
| `first`   |                                  | The custom first button icon.    |         |
| `prev`    |                                  | The custom previous button icon. |         |
| `next`    |                                  | The custom next button icon.     |         |
| `last`    |                                  | The custom last button icon.     |         |

### Events

| Name     | Type                     | Description                                |
| -------- | ------------------------ | ------------------------------------------ |
| `change` | `function(page: number)` | Emits when the pagination page is changed. |

> NOTE: If you are not using `v-model`, you should listen for the pagination using `@change` and update the `page` prop.

- Automatic

  ```html
  <ui-pagination v-model="page"></ui-pagination>
  ```

- Manual

  ```html
  <ui-pagination
    :page="page"
    @change="$balmUI.onChange('page', $event)"
  ></ui-pagination>
  ```
