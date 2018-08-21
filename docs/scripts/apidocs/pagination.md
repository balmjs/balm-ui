```html
<ui-pagination></ui-pagination>
```

#### Props

| Name         | Type      | Default  | Description                                       |
| ------------ | --------- | -------- | ------------------------------------------------- |
| page         | `Number`  | `1`      | Current page number.                              |
| recordCount  | `Number`  | `0`      | The total number of data items.                   |
| pageSize     | `Number`  | `10`     | The number of data items per page.                |
| pageSpan     | `Number`  | `3`      | Display the first N pages of the current page.    |
| prev         | `String`  | `null`   | The previous button text.                         |
| next         | `String`  | `null`   | The next button text.                             |
| showJumper   | `Boolean` | `false`  | Determine whether you can jump to pages directly. |
| jumperBefore | `String`  | `'Goto'` | Add text before jumper.                           |
| jumperAfter  | `String`  | `''`     | Add text after jumper.                            |
| jumperButton | `String`  | `''`     | The jumper button text.                           |
| position     | `String`  | `null`   | The pagination postion. [`left`, `right`]         |
| showRecord   | `Boolean` | `false`  | To display the total number and range area.       |
| mini         | `Boolean` | `false`  | Whether to use simple mode.                       |

#### Slots

| Name      | Description                                                         | `slot-scope`    |
| --------- | ------------------------------------------------------------------- | --------------- |
| (default) | The default slot holds the custom record info and can contain HTML. | `{ pageCount }` |

```html
<template slot-scope="{ pageCount }">
  {{ pageCount }}
</template>
```

> `pageCount`: Total number of the pages.

#### Events

| Name   | Type                     | Description                                |
| ------ | ------------------------ | ------------------------------------------ |
| change | `Function(page: number)` | Emits when the pagination page is changed. |

> NOTE: If you are not using `v-model`, you should listen for the select using `@change` and update the `page` prop.

```html
// Automatic
<ui-pagination v-model="page"></ui-pagination>

// Manual
<ui-pagination :page="page" @change="$balmUI.onChange('page', $event)"></ui-pagination>
```

#### Sass Variables

- Global
  - `$mdc-pagination-color`
  - `$mdc-pagination-corner-radius`
- Default
  - `$mdc-pagination-fill-color`
  - `$mdc-pagination-text-color`
  - `$mdc-pagination-border-color`
- Hover
  - `$mdc-pagination-hover-fill-color`
  - `$mdc-pagination-hover-text-color`
  - `$mdc-pagination-hover-border-color`
- Activated
  - `$mdc-pagination-active-fill-color`
  - `$mdc-pagination-active-text-color`
  - `$mdc-pagination-active-border-color`
