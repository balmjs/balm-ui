```scss
@use 'balm-ui/dist/balm-ui';
```

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-top-app-bar>` props with default value.
  UiTopAppBar: {
    // some props
  }
});
```
