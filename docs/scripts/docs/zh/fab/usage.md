### Default Usage

```scss
@use 'balm-ui/dist/balm-ui';
```

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-fab>` props with default value.
  UiFab: {
    // some props
  }
});
```

### Individual Usage

```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/fab/fab';
@use 'balm-ui/components/icon/icon'; // Recommended
```

```js
import Vue from 'vue';
import UiFab from 'balm-ui/components/fab';

// Optional. Overwrite `<ui-fab>` props with default value.
Vue.use(UiFab, {
  // some props
});
```
