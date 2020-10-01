### Default Usage

```scss
@use 'balm-ui/dist/balm-ui';
```

```js
import Vue from 'vue';
import BalmUIPlus from 'balm-ui/dist/balm-ui-plus';

Vue.use(BalmUIPlus, {
  // Optional. Overwrite `$confirm` options.
  $confirm: {
    // some options
  }
});
```

### Individual Usage

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
