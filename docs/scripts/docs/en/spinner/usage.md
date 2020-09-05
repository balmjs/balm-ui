### Default Usage

```scss
@use 'balm-ui/dist/balm-ui';
```

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-spinner>` props with default value.
  UiSpinner: {
    // some props
  }
});
```

### Individual Usage

```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/spinner/spinner';
```

```js
import Vue from 'vue';
import UiSpinner from 'balm-ui/components/spinner';

// Optional. Overwrite `<ui-spinner>` props with default value.
Vue.use(UiSpinner, {
  // some props
});
```
