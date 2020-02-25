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

```js
import Vue from 'vue';
import UiSkeleton from 'balm-ui/components/skeleton';

// Optional. Overwrite `<ui-skeleton>` props with default value.
Vue.use(UiSkeleton, {
  // some props
});
```

- SASS
  ```css
  @use 'balm-ui/components/core.scss';
  @use 'balm-ui/components/skeleton/skeleton.scss';
  ```
- CSS
  ```html
  <!-- build:css css/vendors.css -->
  <link rel="stylesheet" href="/node_modules/balm-ui/components/core.css" />
  <link rel="stylesheet" href="/node_modules/balm-ui/components/skeleton/skeleton.css" />
  <!-- endbuild -->
  ```
