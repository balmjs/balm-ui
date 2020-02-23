Default Usage

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-linear-progress>` props with default value.
  UiLinearProgress: {
    // some props
  }
});
```

Standalone Usage

```html
<!-- build:css css/vendors.css -->
<link rel="stylesheet" href="/node_modules/balm-ui/components/core.css" />
<link rel="stylesheet" href="/node_modules/balm-ui/components/linear-progress.css" />
<!-- endbuild -->
```

```js
import Vue from 'vue';
import UiLinearProgress from 'balm-ui/components/linear-progress';

// Optional. Overwrite `<ui-linear-progress>` props with default value.
Vue.use(UiLinearProgress, {
  // some props
});
```
