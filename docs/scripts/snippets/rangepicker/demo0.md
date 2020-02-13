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
  // Optional. Overwrite `<ui-rangepicker>` props.
  UiRangepicker: {
    // some props
  }
});
```

Standalone Usage

```js
import Vue from 'vue';
import UiRangepicker from 'balm-ui/components/rangepicker';

// (Recommended) Splitting CSS out from the main application, see BalmUI advanced usage.
import 'balm-ui/components/core.css';
import 'balm-ui/components/textfield.css';
import 'balm-ui/components/datepicker.css';
import 'balm-ui/components/rangepicker.css';
import 'flatpickr/dist/flatpickr.min.css';

// Optional. Overwrite `<ui-rangepicker>` props.
Vue.use(UiRangepicker, {
  // some props
});
```
