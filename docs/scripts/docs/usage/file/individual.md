```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/button/button';
@use 'balm-ui/components/file/file';
@use 'balm-ui/components/icon/icon'; // Optional
```

```js
import Vue from 'vue';
import UiFile from 'balm-ui/components/file';

// Optional. Overwrite `<ui-file>` props with default value.
Vue.use(UiFile, {
  // some props
});
```
