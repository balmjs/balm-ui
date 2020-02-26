```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-grid>` props with default value.
  UiGrid: {
    // some props
  }
});
```

### Standalone Usage

- SASS
  ```css
  @use 'balm-ui/components/core.scss';
  @use 'balm-ui/components/grid/grid.scss';
  ```
- CSS
  ```html
  <!-- build:css css/vendors.css -->
  <link rel="stylesheet" href="/node_modules/balm-ui/components/core.css" />
  <link rel="stylesheet" href="/node_modules/balm-ui/components/grid/grid.css" />
  <!-- endbuild -->
  ```

```js
import Vue from 'vue';
import UiGridComponents from 'balm-ui/components/grid';

Vue.use(UiGridComponents, {
  // Optional. Overwrite `<ui-grid>` props with default value.
  UiGrid: {
    // some props
  }
});
```
