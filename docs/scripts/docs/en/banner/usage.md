### Default Usage

```scss
@use 'balm-ui/dist/balm-ui';
```

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-banner>` props with default value.
  UiBanner: {
    // some props
  }
});
```

### Individual Usage

```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/banner/banner';
```

```js
import Vue from 'vue';
import UiBanner from 'balm-ui/components/banner';

// Optional. Overwrite `<ui-banner>` props with default value.
Vue.use(UiBanner, {
  // some props
});
```
