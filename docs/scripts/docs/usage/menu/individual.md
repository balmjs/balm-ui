```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/menu/menu';
@use 'balm-ui/components/list/list';
```

```js
import Vue from 'vue';
import UiMenuComponents from 'balm-ui/components/menu';

Vue.use(UiMenuComponents, {
  // Optional. Overwrite `<ui-menu>` props with default value.
  UiMenu: {
    // some props
  }
});
```
