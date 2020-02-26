```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-tabs>` props with default value.
  UiTabs: {
    // some props
  }
});
```

### Standalone Usage

- SASS
  ```css
  @use 'balm-ui/components/core.scss';
  @use 'balm-ui/components/tabs/tabs.scss';
  @use 'balm-ui/components/icon/icon.scss';
  ```
- CSS
  ```html
  <!-- build:css css/vendors.css -->
  <link rel="stylesheet" href="/node_modules/balm-ui/components/core.css" />
  <link rel="stylesheet" href="/node_modules/balm-ui/components/tabs/tabs.css" />
  <link rel="stylesheet" href="/node_modules/balm-ui/components/icon/icon.css" />
  <!-- endbuild -->
  ```

```js
import Vue from 'vue';
import UiTabsComponents from 'balm-ui/components/tabs';

Vue.use(UiTabsComponents, {
  // Optional. Overwrite `<ui-tabs>` props with default value.
  UiTabs: {
    // some props
  }
});
```
