Default Usage

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-menu-anchor>` props.
  UiMenuAnchor: {
    // some props
  },
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
import 'balm-ui/components/menu.css';

// Optional.
UiMenuComponents.config({
  // Overwrite `<ui-menu-anchor>` props.
  UiMenuAnchor: {
    // some props
  },
  // Overwrite `<ui-menu>` props.
  UiMenu: {
    // some props
  }
});

for (let key in UiMenuComponents) {
  let Component = UiMenuComponents[key];
  Vue.component(Component.name, Component);
}
```
