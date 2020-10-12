```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/dialog/dialog';
@use 'balm-ui/plugins/confirm/confirm';
```

```js
import Vue from 'vue';
import $confirm from 'balm-ui/plugins/confirm';

// Optional. Overwrite `$confirm` options.
Vue.use($confirm, {
  // some options
});
```
