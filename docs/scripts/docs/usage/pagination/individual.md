```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/table/table';
@use 'balm-ui/components/pagination/pagination';
@use 'balm-ui/components/button/button';
@use 'balm-ui/components/icon/icon';
```

```js
import Vue from 'vue';
import UiPagination from 'balm-ui/components/pagination';

// Optional. Overwrite `<ui-pagination>` props with default value.
Vue.use(UiPagination, {
  // some props
});
```
