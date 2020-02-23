Default Usage

```js
import Vue from 'vue';
import BalmUIPlus from 'balm-ui/dist/balm-ui-plus';

Vue.use(BalmUIPlus, {
  // Optional. Overwrite `$confirm` options.
  confirm: {
    // some options
  }
});
```

Standalone Usage

```html
<!-- build:css css/vendors.css -->
<link rel="stylesheet" href="/node_modules/balm-ui/components/core.css" />
<link rel="stylesheet" href="/node_modules/balm-ui/components/dialog.css" />
<link rel="stylesheet" href="/node_modules/balm-ui/plugins/confirm.css" />
<!-- endbuild -->
```

```js
import Vue from 'vue';
import confirm from 'balm-ui/plugins/confirm';

// Optional. Overwrite `$confirm` options.
Vue.use(confirm, {
  // some options
});
```
