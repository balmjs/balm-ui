### Default Usage

```scss
@use 'balm-ui/dist/balm-ui';
```

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-progress>` props with default value.
  UiProgress: {
    // some props
  }
});
```

### Individual Usage

```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/progress/progress';
```

```js
import Vue from 'vue';
import UiProgress from 'balm-ui/components/progress';

// Optional. Overwrite `<ui-progress>` props with default value.
Vue.use(UiProgress, {
  // some props
});
```
