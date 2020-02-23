Default Usage

```js
import Vue from 'vue';
import BalmUIPlus from 'balm-ui/dist/balm-ui-plus';

Vue.use(BalmUIPlus, {
  // Optional. Overwrite `<ui-pagination>` props with default value.
  UiPagination: {
    // some props
  }
});
```

Standalone Usage

```html
<!-- build:css css/vendors.css -->
<link rel="stylesheet" href="/node_modules/balm-ui/components/core.css" />
<link rel="stylesheet" href="/node_modules/balm-ui/components/pagination.css" />
<!-- endbuild -->
```

```js
import Vue from 'vue';
import UiPagination from 'balm-ui/components/pagination';

// Optional. Overwrite `<ui-pagination>` props with default value.
Vue.use(UiPagination, {
  // some props
});
```
