Default Usage

```js
import Vue from 'vue';
import BalmUIPlus from 'balm-ui/dist/balm-ui-plus';

Vue.use(BalmUIPlus, {
  // Optional. Overwrite `<ui-pagination>` props.
  UiPagination: {
    // some props
  }
});
```

Standalone Usage

```js
import Vue from 'vue';
import UiPagination from 'balm-ui/components/pagination';

// (Recommended) Splitting CSS out from the main application, see BalmUI advanced usage.
import 'balm-ui/components/core.css';
import 'balm-ui/components/pagination.css';

// Optional. Overwrite `<ui-pagination>` props.
Vue.use(UiPagination, {
  // some props
});
```
