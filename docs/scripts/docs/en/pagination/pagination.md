```html
<ui-pagination></ui-pagination>
```

### Props

| Name                     | Type            | Default           | Description                                                     | Version |
| ------------------------ | --------------- | ----------------- | --------------------------------------------------------------- | ------- |
| `modelValue` (`v-model`) | number          | `1`               | Current page number.                                            |         |
| `total`                  | number          | `0`               | The total number of data items.                                 |         |
| `pageSpan`               | number, boolean | `3`               | Display the first N pages of the current page. (MIN VALUE: `3`) |         |
| `showTotal`              | boolean         | `false`           | Display total info.                                             |         |
| `pageSize`               | number, array   | `10`              | The number of data items per page.                              |         |
| `pageSizeText`           | string, array   | `'Rows per page'` | The page size before/after text.                                |         |
| `ofText`                 | string          | `'of'`            | The page total of text.                                         | 9.39.0  |
| `unitText`               | string          | `''`              | The page total unit text.                                       | 10.11.0 |
| `showJumper`             | boolean         | `false`           | Determine whether you can jump to pages directly.               |         |
| `jumperText`             | string, array   | `'Goto'`          | The jumper before/after text.                                   |         |
| `jumperButtonOutlined`   | boolean         | `false`           | Styles an outlined jumper button.                               | 9.11.0  |
| `jumperButtonText`       | string          | `''`              | The jumper button text.                                         |         |
| `position`               | string          | `''`              | The pagination position.                                        |         |
| `mini`                   | boolean         | `false`           | Whether to use simple mode.                                     |         |

```ts
interface Pagination {
  position: 'left' | 'center' | 'right';
}
```

### Slots

| Name      | Props                            | Description                      | Version |
| --------- | -------------------------------- | -------------------------------- | ------- |
| `default` | `currentMinRow`, `currentMaxRow` | The custom page size area.       | 9.3.0   |
| `first`   |                                  | The custom first button icon.    |         |
| `prev`    |                                  | The custom previous button icon. |         |
| `next`    |                                  | The custom next button icon.     |         |
| `last`    |                                  | The custom last button icon.     |         |

### Events

| Name                | Type                         | Description                                     | Version |
| ------------------- | ---------------------------- | ----------------------------------------------- | ------- |
| `update:modelValue` | `function(page: number)`     | Emits when the pagination page is changed.      |         |
| `update:pageSize`   | `function(pageInfo: object)` | Emits when the pagination page size is changed. | 10.4.0  |

> NOTE: If you are not using `v-model`, you should listen for the pagination using `@update:modelValue` and update the `modelValue` prop.

- Automatic

  ```html
  <ui-pagination v-model="page"></ui-pagination>
  ```

- Manual

  ```html
  <ui-pagination
    :model-value="page"
    @update:model-value="balmUI.onChange('page', $event)"
  ></ui-pagination>
  ```
