```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/table/table';
@use 'balm-ui/components/checkbox/checkbox'; // Required only for data table with row selection
@use 'balm-ui/components/icon-button/icon-button'; // Required only for data table with column sorting
@use 'balm-ui/components/pagination/pagination'; // Recommended
@use 'balm-ui/components/icon/icon';
```

```js
import UiTable from 'balm-ui/components/table';

// `app`: Vue app
// Optional. Overwrite `<ui-table>` props with default value.
app.use(UiTable, {
  // some props
});
```
