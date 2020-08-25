### Default Usage

```scss
@use 'balm-ui/dist/balm-ui';
```

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-file>` props with default value.
  UiFile: {
    // some props
  }
});
```

### Individual Usage

```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/button/button';
@use 'balm-ui/components/file/file';
```

```js
import Vue from 'vue';
import UiFile from 'balm-ui/components/file';

// Optional. Overwrite `<ui-file>` props with default value.
Vue.use(UiFile, {
  // some props
});
```
