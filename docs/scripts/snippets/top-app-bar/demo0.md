Default Usage

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-top-app-bar>` props with default value.
  UiTopAppBar: {
    // some props
  }
});
```

Standalone Usage

```js
import Vue from 'vue';
import UiTopAppBar from 'balm-ui/components/top-app-bar';

// Optional. Overwrite `<ui-top-app-bar>` props with default value.
Vue.use(UiTopAppBar, {
  // some props
});
```

- SASS
  ```css
  @use 'balm-ui/components/core.scss';
  @use 'balm-ui/components/top-app-bar/top-app-bar.scss';
  @use 'balm-ui/components/icon-button/icon-button.scss';
  ```
- CSS
  ```html
  <!-- build:css css/vendors.css -->
  <link rel="stylesheet" href="/node_modules/balm-ui/components/core.css" />
  <link rel="stylesheet" href="/node_modules/balm-ui/components/top-app-bar/top-app-bar.css" />
  <link rel="stylesheet" href="/node_modules/balm-ui/components/icon-button/icon-button.css" />
  <!-- endbuild -->
  ```
