### Default Usage

```scss
@use 'balm-ui/dist/balm-ui';
```

```js
import Vue from 'vue';
import BalmUIPlus from 'balm-ui/dist/balm-ui-plus';

Vue.use(BalmUIPlus, {
  // Optional. Overwrite `<ui-skeleton>` props with default value.
  UiSkeleton: {
    // some props
  }
});
```

### Individual Usage

```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/skeleton/skeleton';
```

```js
import Vue from 'vue';
import UiSkeleton from 'balm-ui/components/skeleton';

// Optional. Overwrite `<ui-skeleton>` props with default value.
Vue.use(UiSkeleton, {
  // some props
});
```
