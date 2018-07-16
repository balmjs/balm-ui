Default Usage

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-permanent-drawer>` props.
  UiPermanentDrawer: {
    // some props
  },
  // Optional. Overwrite `<ui-persistent-drawer>` props.
  UiPersistentDrawer: {
    // some props
  },
  // Optional. Overwrite `<ui-drawer-content>` props.
  UiDrawerContent: {
    // some props
  }
});
```

Standalone Usage

```js
import Vue from 'vue';
import UiDrawerComponents from 'balm-ui/components/drawer';

// (Recommended) Splitting CSS out from the main application, see BalmUI advanced usage.
import 'balm-ui/components/drawer.css';

// Optional.
UiDrawerComponents.config({
  // Overwrite `<ui-permanent-drawer>` props.
  UiPermanentDrawer: {
    // some props
  },
  // Overwrite `<ui-persistent-drawer>` props.
  UiPersistentDrawer: {
    // some props
  },
  // Overwrite `<ui-drawer-content>` props.
  UiDrawerContent: {
    // some props
  }
});

for (let key in UiDrawerComponents) {
  let Component = UiDrawerComponents[key];
  Vue.component(Component.name, Component);
}
```
