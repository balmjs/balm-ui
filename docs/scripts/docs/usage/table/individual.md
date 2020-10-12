<<<<<<< HEAD:docs/scripts/docs/usage/table.md
### Default Usage

```scss
@use 'balm-ui/dist/balm-ui';
```

```js
import BalmUI from 'balm-ui';

// `app`: Vue app
app.use(BalmUI, {
  // Optional. Overwrite `<ui-table>` props with default value.
  UiTable: {
    // some props
  }
});
```

### Individual Usage

=======
>>>>>>> origin/8.x:docs/scripts/docs/usage/table/individual.md
```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/checkbox/checkbox'; // Required only for data table with row selection.
@use 'balm-ui/components/icon-button/icon-button'; // Required only for data table with column sorting.
@use 'balm-ui/components/table/table';
@use 'balm-ui/components/pagination/pagination'; // Recommended
```

```js
import UiTable from 'balm-ui/components/table';

// `app`: Vue app
// Optional. Overwrite `<ui-table>` props with default value.
app.use(UiTable, {
  // some props
});
```
