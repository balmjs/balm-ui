### Default Usage

```scss
@use 'balm-ui/dist/balm-ui';
```

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-tabs>` props with default value.
  UiTabs: {
    // some props
  }
});
```

### Individual Usage

```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/tabs/tabs';
@use 'balm-ui/components/icon/icon';
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
