Default Usage

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-tabs>` props.
  UiTabs: {
    // some props
  }
});
```

Standalone Usage

```js
import Vue from 'vue';
import UiTabsComponents from 'balm-ui/components/tabs';

// (Recommended) Splitting CSS out from the main application, see BalmUI advanced usage.
import 'balm-ui/components/tabs.css';
import 'balm-ui/components/icon.css'; // Optional.

// Optional.
UiTabsComponents.config({
  // Overwrite `<ui-tabs>` props.
  UiTabs: {
    // some props
  }
});

for (let key in UiTabsComponents) {
  let Component = UiTabsComponents[key];
  Vue.component(Component.name, Component);
}
```
