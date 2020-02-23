Default Usage

```js
import Vue from 'vue';
import BalmUIPlus from 'balm-ui/dist/balm-ui-plus';

Vue.use(BalmUIPlus, {
  // Optional. Overwrite `<ui-skeleton>` props with default value.
  UiSkeleton: {
    // some props
  }
});
```

Standalone Usage

```html
<!-- build:css css/vendors.css -->
<link rel="stylesheet" href="/node_modules/balm-ui/components/core.css" />
<link rel="stylesheet" href="/node_modules/balm-ui/components/skeleton.css" />
<!-- endbuild -->
```

```js
import Vue from 'vue';
import UiSkeleton from 'balm-ui/components/skeleton';

// Optional. Overwrite `<ui-skeleton>` props with default value.
Vue.use(UiSkeleton, {
  // some props
});
```
