Default Usage

```js
import Vue from 'vue';
import BalmUIPlus from 'balm-ui/dist/balm-ui-plus';

Vue.use(BalmUIPlus, {
  // Optional. Overwrite `<ui-file>` props with default value.
  UiFile: {
    // some props
  }
});
```

Standalone Usage

```html
<!-- build:css css/vendors.css -->
<link rel="stylesheet" href="/node_modules/balm-ui/components/core.css" />
<link rel="stylesheet" href="/node_modules/balm-ui/components/button.css" />
<link rel="stylesheet" href="/node_modules/balm-ui/components/file.css" />
<!-- endbuild -->
```

```js
import Vue from 'vue';
import UiFile from 'balm-ui/components/file';

// Optional. Overwrite `<ui-file>` props with default value.
Vue.use(UiFile, {
  // some props
});
```
