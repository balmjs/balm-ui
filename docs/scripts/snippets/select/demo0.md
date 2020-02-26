```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-select>` props with default value.
  UiSelect: {
    // some props
  }
});
```

### Standalone Usage

- SASS
  ```css
  @use 'balm-ui/components/core.scss';
  @use 'balm-ui/components/list/list.scss';
  @use 'balm-ui/components/menu/menu.scss';
  @use 'balm-ui/components/form-field/form-item.scss';
  @use 'balm-ui/components/select/select.scss';
  @use 'balm-ui/components/icon/icon.scss';
  ```
- CSS
  ```html
  <!-- build:css css/vendors.css -->
  <link rel="stylesheet" href="/node_modules/balm-ui/components/core.css" />
  <link rel="stylesheet" href="/node_modules/balm-ui/components/list/list.css" />
  <link rel="stylesheet" href="/node_modules/balm-ui/components/menu/menu.css" />
  <link rel="stylesheet" href="/node_modules/balm-ui/components/form-field/form-item.css" />
  <link rel="stylesheet" href="/node_modules/balm-ui/components/select/select.css" />
  <link rel="stylesheet" href="/node_modules/balm-ui/components/icon/icon.css" />
  <!-- endbuild -->
  ```

```js
import Vue from 'vue';
import UiSelect from 'balm-ui/components/select';

// Optional. Overwrite `<ui-select>` props with default value.
Vue.use(UiSelect, {
  // some props
});
```
