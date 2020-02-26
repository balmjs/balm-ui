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

### Standalone Usage

- SASS
  ```css
  @use 'balm-ui/components/core.scss';
  @use 'balm-ui/components/switch/switch.scss';
  ```
- CSS
  ```html
  <!-- build:css css/vendors.css -->
  <link rel="stylesheet" href="/node_modules/balm-ui/components/core.css" />
  <link rel="stylesheet" href="/node_modules/balm-ui/components/switch/switch.css" />
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
