### Default Usage

```scss
@use 'balm-ui/dist/balm-ui';
```

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-switch>` props with default value.
  UiSwitch: {
    // some props
  }
});
```

### Individual Usage

```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/switch/switch';
```

```js
import Vue from 'vue';
import UiSwitch from 'balm-ui/components/switch';

// Optional. Overwrite `<ui-switch>` props with default value.
Vue.use(UiSwitch, {
  // some props
});
```
