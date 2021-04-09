```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/button/button';
@use 'balm-ui/components/icon/icon'; // Optional
```

```js
import Vue from 'vue';
import UiButton from 'balm-ui/components/button';
import vButton from 'balm-ui/directives/button'; // Optional

// Optional. Overwrite `<ui-button>` props with default value.
Vue.use(UiButton, {
  // some props
});
Vue.directive(vButton.name, vButton); // Optional
```
