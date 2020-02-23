Default Usage

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-switch>` props with default value.
  UiSwitch: {
    // some props
  }
});
```

Standalone Usage

```html
<!-- build:css css/vendors.css -->
<link rel="stylesheet" href="/node_modules/balm-ui/components/core.css" />
<link rel="stylesheet" href="/node_modules/balm-ui/components/switch.css" />
<!-- endbuild -->
```

```js
import Vue from 'vue';
import UiSwitch from 'balm-ui/components/switch';

// Optional. Overwrite `<ui-switch>` props with default value.
Vue.use(UiSwitch, {
  // some props
});
```
