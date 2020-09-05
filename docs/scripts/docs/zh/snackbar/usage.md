### Default Usage

```scss
@use 'balm-ui/dist/balm-ui';
```

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-snackbar>` props with default value.
  UiSnackbar: {
    // some props
  }
});
```

### Individual Usage

```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/snackbar/snackbar';
```

```js
import Vue from 'vue';
import UiSnackbar from 'balm-ui/components/snackbar';

// Optional. Overwrite `<ui-snackbar>` props with default value.
Vue.use(UiSnackbar, {
  // some props
});
```
