Default Usage

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

Standalone Usage

```html
<!-- build:css css/vendors.css -->
<link rel="stylesheet" href="/node_modules/balm-ui/components/core.css" />
<link rel="stylesheet" href="/node_modules/balm-ui/components/list.css" />
<link rel="stylesheet" href="/node_modules/balm-ui/components/menu.css" />
<link rel="stylesheet" href="/node_modules/balm-ui/components/form-item.css" />
<link rel="stylesheet" href="/node_modules/balm-ui/components/select.css" />
<link rel="stylesheet" href="/node_modules/balm-ui/components/icon.css" />
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
