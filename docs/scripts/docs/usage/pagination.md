### Default Usage

```scss
@use 'balm-ui/dist/balm-ui';
```

```js
import BalmUI from 'balm-ui';

// `app`: Vue app
app.use(BalmUI, {
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
import UiPagination from 'balm-ui/components/pagination';

// `app`: Vue app
// Optional. Overwrite `<ui-pagination>` props with default value.
app.use(UiPagination, {
  // some props
});
```
