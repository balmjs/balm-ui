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

```js
import Vue from 'vue';
import UiRangepicker from 'balm-ui/components/rangepicker';

// Optional. Overwrite `<ui-rangepicker>` props with default value.
Vue.use(UiRangepicker, {
  // some props
});
```

- SASS
  ```css
  @use 'balm-ui/components/core.scss';
  @use 'balm-ui/components/textfield/textfield.scss';
  @use 'balm-ui/components/datepicker/datepicker.scss';
  @use 'balm-ui/components/rangepicker/rangepicker.scss';
  @use 'flatpickr/dist/flatpickr.min.css';
  ```
- CSS
  ```html
  <!-- build:css css/vendors.css -->
  <link rel="stylesheet" href="/node_modules/balm-ui/components/core.css" />
  <link rel="stylesheet" href="/node_modules/balm-ui/components/textfield/textfield.css" />
  <link rel="stylesheet" href="/node_modules/balm-ui/components/datepicker/datepicker.css" />
  <link rel="stylesheet" href="/node_modules/balm-ui/components/rangepicker/rangepicker.css" />
  <link rel="stylesheet" href="/node_modules/flatpickr/dist/flatpickr.min.css" />
  <!-- endbuild -->
  ```
