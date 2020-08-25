### Default Usage

```scss
@use 'balm-ui/dist/balm-ui';
```

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-icon>` props with default value.
  UiIcon: {
    // some props
  }
});
```

### Individual Usage

```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/icon/icon';
```

```js
import Vue from 'vue';
import UiIcon from 'balm-ui/components/icon';

// Optional. Overwrite `<ui-icon>` props with default value.
Vue.use(UiIcon, {
  // some props
});
```
