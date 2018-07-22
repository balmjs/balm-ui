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
import 'balm-ui/components/core.css';
import 'balm-ui/components/tabs.css';
import 'balm-ui/components/icon.css'; // Optional.

Vue.use(UiTabsComponents, {
  // Optional. Overwrite `<ui-tabs>` props.
  UiTabs: {
    // some props
  }
});
```
