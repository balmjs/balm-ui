### Default Usage

```scss
@use 'balm-ui/dist/balm-ui';
```

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-grid>` props with default value.
  UiGrid: {
    // some props
  }
});
```

### Individual Usage

```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/grid/grid';
```

```js
import Vue from 'vue';
import UiGridComponents from 'balm-ui/components/grid';
import UiGridPlugin from 'balm-ui/plugins/grid'; // Optional

Vue.use(UiGridComponents, {
  // Optional. Overwrite `<ui-grid>` props with default value.
  UiGrid: {
    // some props
  }
});
Vue.use(UiGridPlugin); // Optional
```
