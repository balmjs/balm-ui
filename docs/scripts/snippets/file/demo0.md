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

```js
import Vue from 'vue';
import UiFile from 'balm-ui/components/file';

// Optional. Overwrite `<ui-file>` props with default value.
Vue.use(UiFile, {
  // some props
});
```

- SASS
  ```css
  @use 'balm-ui/components/core.scss';
  @use 'balm-ui/components/button/button.scss';
  @use 'balm-ui/components/file/file.scss';
  ```
- CSS
  ```html
  <!-- build:css css/vendors.css -->
  <link rel="stylesheet" href="/node_modules/balm-ui/components/core.css" />
  <link rel="stylesheet" href="/node_modules/balm-ui/components/button/button.css" />
  <link rel="stylesheet" href="/node_modules/balm-ui/components/file/file.css" />
  <!-- endbuild -->
  ```
