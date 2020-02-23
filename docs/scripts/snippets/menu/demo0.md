Default Usage

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-menu>` props with default value.
  UiMenu: {
    // some props
  }
});
```

Standalone Usage

```html
<!-- build:css css/vendors.css -->
<link rel="stylesheet" href="/node_modules/balm-ui/components/core.css" />
<link rel="stylesheet" href="/node_modules/balm-ui/components/list.css" />
<link rel="stylesheet" href="/node_modules/balm-ui/components/menu.css" />
<!-- endbuild -->
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
