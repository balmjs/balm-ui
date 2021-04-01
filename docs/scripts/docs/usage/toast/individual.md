```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/snackbar/snackbar';
@use 'balm-ui/plugins/toast/toast'; // New in 8.28.0
```

```js
import Vue from 'vue';
import $toast from 'balm-ui/plugins/toast';

// Optional. Overwrite `$toast` options.
Vue.use($toast, {
  // some options
});
```
