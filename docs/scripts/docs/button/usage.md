### Default Usage

```scss
@use 'balm-ui/dist/balm-ui';
```

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-button>` props with default value.
  UiButton: {
    // some props
  }
});
```

### Individual Usage

```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/button/button';
@use 'balm-ui/components/icon/icon';
```

```js
import Vue from 'vue';
import UiButton from 'balm-ui/components/button';

// Optional. Overwrite `<ui-button>` props with default value.
Vue.use(UiButton, {
  // some props
});
```
