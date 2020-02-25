Default Usage

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-table>` props with default value.
  UiTable: {
    // some props
  }
});
```

Standalone Usage

```js
import Vue from 'vue';
import UiTableComponent from 'balm-ui/components/table';

Vue.use(UiTableComponent, {
  // Optional. Overwrite `<ui-table>` props with default value.
  UiTable: {
    // some props
  }
});
```

- SASS
  ```css
  @use 'balm-ui/components/core.scss';
  @use 'balm-ui/components/table/table.scss';
  @use 'balm-ui/components/checkbox/checkbox.scss';
  @use 'balm-ui/components/icon/icon.scss';
  ```
- CSS
  ```html
  <!-- build:css css/vendors.css -->
  <link rel="stylesheet" href="/node_modules/balm-ui/components/core.css" />
  <link rel="stylesheet" href="/node_modules/balm-ui/components/table/table.css" />
  <link rel="stylesheet" href="/node_modules/balm-ui/components/checkbox/checkbox.css" />
  <link rel="stylesheet" href="/node_modules/balm-ui/components/icon/icon.css" />
  <!-- endbuild -->
  ```
