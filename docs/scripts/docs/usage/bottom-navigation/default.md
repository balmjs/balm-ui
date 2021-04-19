```scss
@use 'balm-ui/dist/balm-ui';
```

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';
import BalmUINext from 'balm-ui/dist/balm-ui-next';

Vue.use(BalmUI);
Vue.use(BalmUINext, {
  // Optional. Overwrite `<ui-bottom-navigation>` props with default value.
  UiBottomNavigation: {
    // some props
  }
});
```
