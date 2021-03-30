```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/tree/tree';
@use 'balm-ui/components/icon/icon';
@use 'balm-ui/components/checkbox/checkbox'; // Optional
```

```js
import Vue from 'vue';
import UiTree from 'balm-ui/components/tree';

// Optional. Overwrite `<ui-tree>` props with default value.
Vue.use(UiTree, {
  // some props
});
```
