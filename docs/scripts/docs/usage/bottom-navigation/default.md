```scss
@use 'balm-ui/dist/balm-ui';
```

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';
import BalmUIPlus from 'balm-ui/dist/balm-ui-plus';

Vue.use(BalmUI);
Vue.use(BalmUIPlus, {
  // Optional. Overwrite `<ui-bottom-navigation>` props with default value.
  UiBottomNavigation: {
    // some props
  }
});
```
