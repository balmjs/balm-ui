```html
<ui-pagination></ui-pagination>
```

#### Props

| Name               | Type    | Default  | Description                                       |
| ------------------ | ------- | -------- | ------------------------------------------------- |
| `page`             | number  | `1`      | Current page number.                              |
| `pageSize`         | number  | `10`     | The number of data items per page.                |
| `total`            | number  | `0`      | The total number of data items.                   |
| `pageSpan`         | number  | `3`      | Display the first N pages of the current page.    |
| `prev`             | string  | `null`   | The previous button text.                         |
| `next`             | string  | `null`   | The next button text.                             |
| `showJumper`       | boolean | `false`  | Determine whether you can jump to pages directly. |
| `jumperBeforeText` | string  | `'Goto'` | Add text before jumper.                           |
| `jumperAfterText`  | string  | `''`     | Add text after jumper.                            |
| `jumperButtonText` | string  | `''`     | The jumper button text.                           |
| `position`         | string  | `null`   | The pagination postion. [`left`, `right`]         |
| `mini`             | boolean | `false`  | Whether to use simple mode.                       |

#### Slots

| Name            | Slots                                                      | Description                                  |
| --------------- | ---------------------------------------------------------- | -------------------------------------------- |
| `prev`          |                                                            | The custom previous button.                  |
| `next`          |                                                            | The custom next button.                      |
| `before`        | `{ recordClass, pageCount, currentMinRow, currentMaxRow }` | The custom record info and can contain HTML. |
| `before-jumper` | `{ recordClass, pageCount, currentMinRow, currentMaxRow }` | The custom before jumper area content.       |
| `after-jumper`  | `{ recordClass, pageCount, currentMinRow, currentMaxRow }` | The custom after jumper area content.        |

- `pageCount`: Total number of rows.
- `currentMinRow` & `currentMaxRow`: The range currently in view.

```html
<template #before="{ recordClass, pageCount, currentMinRow, currentMaxRow }">
  <ui-form-field :class="recordClass">
    <label>Rows per page:</label>
    <ui-select
      outlined
      noLabel
      v-model="pageSize"
      :options="pageSizeOptions"
    ></ui-select>
    <span>
      {{ currentMinRow }}-{{ currentMaxRow }} of {{ total }}
    </span>
  </ui-form-field>
</template>
```

#### Events

| Name     | Type                     | Description                                |
| -------- | ------------------------ | ------------------------------------------ |
| `change` | `function(page: number)` | Emits when the pagination page is changed. |

> NOTE: If you are not using `v-model`, you should listen for the select using `@change` and update the `page` prop.

```html
// Automatic
<ui-pagination v-model="page"></ui-pagination>

// Manual
<ui-pagination
  :page="page"
  @change="$balmUI.onChange('page', $event)"
></ui-pagination>
```
