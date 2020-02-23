Default Usage

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-checkbox>` props with default value.
  UiCheckbox: {
    // some props
  }
});
```

Standalone Usage

```html
<!-- build:css css/vendors.css -->
<link rel="stylesheet" href="/node_modules/balm-ui/components/core.css" />
<link rel="stylesheet" href="/node_modules/balm-ui/components/form-field.css" />
<link rel="stylesheet" href="/node_modules/balm-ui/components/checkbox.css" />
<!-- endbuild -->
```

```js
import Vue from 'vue';
import UiFormField from 'balm-ui/components/form-field';
import UiCheckbox from 'balm-ui/components/checkbox';

Vue.use(UiFormField);
// Optional. Overwrite `<ui-checkbox>` props with default value.
Vue.use(UiCheckbox, {
  // some props
});
```
