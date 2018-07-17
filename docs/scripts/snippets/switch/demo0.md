Default Usage

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-switch>` props.
  UiSwitch: {
    // some props
  }
});
```

Standalone Usage

```js
import Vue from 'vue';
import UiSwitch from 'balm-ui/components/switch';

// (Recommended) Splitting CSS out from the main application, see BalmUI advanced usage.
import 'balm-ui/components/core.css';
import 'balm-ui/components/switch.css';

// Optional. Overwrite `<ui-switch>` props.
UiSwitch.config({
  // some props
});

Vue.component(UiSwitch.name, UiSwitch);
```
