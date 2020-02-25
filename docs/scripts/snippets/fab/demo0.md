Default Usage

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-fab>` props with default value.
  UiFab: {
    // some props
  }
});
```

Standalone Usage

```js
import Vue from 'vue';
import UiFab from 'balm-ui/components/fab';

// Optional. Overwrite `<ui-fab>` props with default value.
Vue.use(UiFab, {
  // some props
});
```

- SASS
  ```css
  @use 'balm-ui/components/core.scss';
  @use 'balm-ui/components/fab/fab.scss';
  @use 'balm-ui/components/icon/icon.scss';
  ```
- CSS
  ```html
  <!-- build:css css/vendors.css -->
  <link rel="stylesheet" href="/node_modules/balm-ui/components/core.css" />
  <link rel="stylesheet" href="/node_modules/balm-ui/components/fab/fab.css" />
  <link rel="stylesheet" href="/node_modules/balm-ui/components/icon/icon.css" />
  <!-- endbuild -->
  ```
