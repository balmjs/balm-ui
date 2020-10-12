```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/chips/chips';
@use 'balm-ui/components/icon/icon'; // Optional
```

```js
import Vue from 'vue';
import UiChipsComponents from 'balm-ui/components/chips';

Vue.use(UiChipsComponents, {
  // Optional. Overwrite `<ui-chips>` props with default value.
  UiChips: {
    // some props
  }
});
```
