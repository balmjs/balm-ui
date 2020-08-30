### Default Usage

```scss
@use 'balm-ui/dist/balm-ui';
```

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-pagination>` props with default value.
  UiPagination: {
    // some props
  }
});
```

### Individual Usage

```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/table/table';
@use 'balm-ui/components/pagination/pagination';
```

```js
import Vue from 'vue';
import UiPagination from 'balm-ui/components/pagination';

// Optional. Overwrite `<ui-pagination>` props with default value.
Vue.use(UiPagination, {
  // some props
});
```
