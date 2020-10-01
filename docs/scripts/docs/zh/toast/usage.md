### Default Usage

```scss
@use 'balm-ui/dist/balm-ui';
```

```js
import Vue from 'vue';
import BalmUIPlus from 'balm-ui/dist/balm-ui-plus';

Vue.use(BalmUIPlus, {
  // Optional. Overwrite `$toast` options.
  $toast: {
    // some options
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
import $toast from 'balm-ui/plugins/toast';

// Optional. Overwrite `$toast` options.
Vue.use($toast, {
  // some options
});
```
