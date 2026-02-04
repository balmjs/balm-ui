```scss
@use 'balm-ui/dist/balm-ui';
```

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-timerangepicker>` props with default value.
  UiTimerangepicker: {
    // some props
  }
});
```
