```scss
@use 'balm-ui/dist/balm-ui';
```

```js
import Vue from 'vue';
import BalmUINext from 'balm-ui/dist/balm-ui-next';

Vue.use(BalmUINext, {
  // Optional. Overwrite `<ui-bottom-navigation>` props with default value.
  UiBottomNavigation: {
    // some props
  }
});
```
