```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/bottom-navigation/bottom-navigation';
@use 'balm-ui/components/tabs/tabs';
@use 'balm-ui/components/icon/icon'; // Optional
```

```js
import Vue from 'vue';
import UiBottomNavigation from 'balm-ui/components/bottom-navigation';
import UiTabsComponents from 'balm-ui/components/tabs';

// Optional. Overwrite `<ui-bottom-navigation>` props with default value.
Vue.use(UiBottomNavigation, {
  // some props
});
Vue.use(UiTabsComponents);
```
