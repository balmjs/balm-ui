```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/top-app-bar/top-app-bar';
@use 'balm-ui/components/icon-button/icon-button';
@use 'balm-ui/components/icon/icon';
```

```js
import Vue from 'vue';
import UiTopAppBar from 'balm-ui/components/top-app-bar';

// Optional. Overwrite `<ui-top-app-bar>` props with default value.
Vue.use(UiTopAppBar, {
  // some props
});
```
