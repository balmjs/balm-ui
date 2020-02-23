Default Usage

```html
<!-- build:css css/plugins.css -->
<link rel="stylesheet" href="/node_modules/flatpickr/dist/flatpickr.min.css" />
<!-- endbuild -->
```

```js
import Vue from 'vue';
import BalmUIPlus from 'balm-ui/dist/balm-ui-plus';

Vue.use(BalmUIPlus, {
  // Optional. Overwrite `<ui-rangepicker>` props with default value.
  UiRangepicker: {
    // some props
  }
});
```

Standalone Usage

```html
<!-- build:css css/vendors.css -->
<link rel="stylesheet" href="/node_modules/balm-ui/components/core.css" />
<link rel="stylesheet" href="/node_modules/balm-ui/components/textfield.css" />
<link rel="stylesheet" href="/node_modules/balm-ui/components/datepicker.css" />
<link rel="stylesheet" href="/node_modules/balm-ui/components/rangepicker.css" />
<link rel="stylesheet" href="/node_modules/flatpickr/dist/flatpickr.min.css" />
<!-- endbuild -->
```

```js
import Vue from 'vue';
import UiRangepicker from 'balm-ui/components/rangepicker';

// Optional. Overwrite `<ui-rangepicker>` props with default value.
Vue.use(UiRangepicker, {
  // some props
});
```
