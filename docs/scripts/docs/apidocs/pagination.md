```html
<ui-pagination></ui-pagination>
```

#### Props

| Name           | Type    | Default  | Description                                       |
| -------------- | ------- | -------- | ------------------------------------------------- |
| `page`         | number  | `1`      | Current page number.                              |
| `recordCount`  | number  | `0`      | The total number of data items.                   |
| `pageSize`     | number  | `10`     | The number of data items per page.                |
| `pageSpan`     | number  | `3`      | Display the first N pages of the current page.    |
| `prev`         | string  | `null`   | The previous button text.                         |
| `next`         | string  | `null`   | The next button text.                             |
| `showJumper`   | boolean | `false`  | Determine whether you can jump to pages directly. |
| `jumperBefore` | string  | `'Goto'` | Add text before jumper.                           |
| `jumperAfter`  | string  | `''`     | Add text after jumper.                            |
| `jumperButton` | string  | `''`     | The jumper button text.                           |
| `position`     | string  | `null`   | The pagination postion. [`left`, `right`]         |
| `showRecord`   | boolean | `false`  | To display the total number and range area.       |
| `mini`         | boolean | `false`  | Whether to use simple mode.                       |

#### Slots

| Name      | Slots           | Description                                                         |
| --------- | --------------- | ------------------------------------------------------------------- |
| `default` | `{ pageCount }` | The default slot holds the custom record info and can contain HTML. |

```html
<template #default="{ pageCount }">
  {{ pageCount }}
</template>
```

> `pageCount`: Total number of the pages.

#### Events

| Name     | Type                     | Description                                |
| -------- | ------------------------ | ------------------------------------------ |
| `change` | `function(page: number)` | Emits when the pagination page is changed. |

> NOTE: If you are not using `v-model`, you should listen for the select using `@change` and update the `page` prop.

```html
// Automatic
<ui-pagination v-model="page"></ui-pagination>

// Manual
<ui-pagination :page="page" @change="$balmUI.onChange('page', $event)"></ui-pagination>
```
