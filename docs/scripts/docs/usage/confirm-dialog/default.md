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
