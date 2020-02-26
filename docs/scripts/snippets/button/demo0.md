```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-button>` and `<ui-a>` props with default value.
  UiButton: {
    // some props
  }
});
```

### Standalone Usage

- SASS
  ```css
  @use 'balm-ui/components/core.scss';
  @use 'balm-ui/components/button/button.scss';
  @use 'balm-ui/components/icon/icon.scss';
  ```
- CSS
  ```html
  <!-- build:css css/vendors.css -->
  <link rel="stylesheet" href="/node_modules/balm-ui/components/core.css" />
  <link rel="stylesheet" href="/node_modules/balm-ui/components/button/button.css" />
  <link rel="stylesheet" href="/node_modules/balm-ui/components/icon/icon.css" />
  <!-- endbuild -->
  ```

```js
import Vue from 'vue';
import UiButtonComponents from 'balm-ui/components/button';

Vue.use(UiButtonComponents, {
  // Optional. Overwrite `<ui-button>` and `<ui-a>` props with default value.
  UiButton: {
    // some props
  }
});
```
