```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/checkbox/checkbox'; // Required only for data table with row selection.
@use 'balm-ui/components/icon-button/icon-button'; // Required only for data table with column sorting.
@use 'balm-ui/components/table/table';
@use 'balm-ui/components/pagination/pagination'; // Recommended
```

```js
import Vue from 'vue';
import UiTable from 'balm-ui/components/table';

// Optional. Overwrite `<ui-table>` props with default value.
Vue.use(UiTable, {
  // some props
});
```
