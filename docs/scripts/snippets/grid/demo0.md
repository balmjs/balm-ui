Default Usage

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-grid>` props.
  UiGrid: {
    // some props
  }
});
```

Standalone Usage

```js
import Vue from 'vue';
import UiGridComponents from 'balm-ui/components/grid';

// (Recommended) Splitting CSS out from the main application, see BalmUI advanced usage.
import 'balm-ui/components/core.css';
import 'balm-ui/components/grid.css';

Vue.use(UiGridComponents, {
  // Optional. Overwrite `<ui-grid>` props.
  UiGrid: {
    // some props
  }
});
```
