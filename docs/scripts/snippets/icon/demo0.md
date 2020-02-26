```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-icon>` props with default value.
  UiIcon: {
    // some props
  }
});
```

### Standalone Usage

- SASS
  ```css
  @use 'balm-ui/components/core.scss';
  @use 'balm-ui/components/icon/icon.scss';
  ```
- CSS
  ```html
  <!-- build:css css/vendors.css -->
  <link rel="stylesheet" href="/node_modules/balm-ui/components/core.css" />
  <link rel="stylesheet" href="/node_modules/balm-ui/components/icon/icon.css" />
  <!-- endbuild -->
  ```

```js
import Vue from 'vue';
import UiIcon from 'balm-ui/components/icon';

// Optional. Overwrite `<ui-icon>` props with default value.
Vue.use(UiIcon, {
  // some props
});
```
