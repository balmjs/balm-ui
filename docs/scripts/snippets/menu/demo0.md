Default Usage

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-menu>` props.
  UiMenu: {
    // some props
  }
});
```

Standalone Usage

```js
import Vue from 'vue';
import UiMenuComponents from 'balm-ui/components/menu';

// (Recommended) Splitting CSS out from the main application, see BalmUI advanced usage.
import 'balm-ui/components/core.css';
import 'balm-ui/components/menu.css';

Vue.use(UiMenuComponents, {
  // Optional. Overwrite `<ui-menu>` props.
  UiMenu: {
    // some props
  }
});
```
