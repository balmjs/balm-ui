```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/tabs/tabs';
@use 'balm-ui/components/icon/icon'; // Optional
```

```js
import Vue from 'vue';
import UiTabsComponents from 'balm-ui/components/tabs';

Vue.use(UiTabsComponents, {
  // Optional. Overwrite `<ui-tabs>` props with default value.
  UiTabs: {
    // some props
  }
});
```
