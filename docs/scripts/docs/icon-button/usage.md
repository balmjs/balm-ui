### Default Usage

```scss
@use 'balm-ui/dist/balm-ui';
```

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-icon-button>` props with default value.
  UiIconButton: {
    // some props
  }
});
```

### Individual Usage

```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/icon-button/icon-button';
@use 'balm-ui/components/icon/icon';
```

```js
import Vue from 'vue';
import UiIconButton from 'balm-ui/components/icon-button';

// Optional. Overwrite `<ui-icon-button>` props with default value.
Vue.use(UiIconButton, {
  // some props
});
```
