### Default Usage

```scss
@use 'balm-ui/dist/balm-ui';
```

```js
import Vue from 'vue';
import BalmUIPlus from 'balm-ui/dist/balm-ui-plus';

Vue.use(BalmUIPlus, {
  // Optional. Overwrite `$alert` options.
  alert: {
    // some options
  }
});
```

### Individual Usage

```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/dialog/dialog';
@use 'balm-ui/plugins/alert/alert';
```

```js
import Vue from 'vue';
import $alert from 'balm-ui/plugins/alert';

// Optional. Overwrite `$alert` options.
Vue.use($alert, {
  // some options
});
```
