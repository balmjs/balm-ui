Default Usage

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-snackbar>` props with default value.
  UiSnackbar: {
    // some props
  }
});
```

Standalone Usage

```js
import Vue from 'vue';
import UiSnackbar from 'balm-ui/components/snackbar';

// Optional. Overwrite `<ui-snackbar>` props with default value.
Vue.use(UiSnackbar, {
  // some props
});
```

- SASS
  ```css
  @use 'balm-ui/components/core.scss';
  @use 'balm-ui/components/snackbar/snackbar.scss';
  ```
- CSS
  ```html
  <!-- build:css css/vendors.css -->
  <link rel="stylesheet" href="/node_modules/balm-ui/components/core.css" />
  <link rel="stylesheet" href="/node_modules/balm-ui/components/snackbar/snackbar.css" />
  <!-- endbuild -->
  ```
