Default Usage

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite the param of `$tt()`.
  typography: ['custom-module-1', 'custom-module-2']
});
```

Standalone Usage

- Included `typography.css`
  ```html
  <!-- build:css css/vendors.css -->
  <link rel="stylesheet" href="/node_modules/balm-ui/components/core.css" />
  <link rel="stylesheet" href="/path/to/custom-typography.css" />
  <!-- endbuild -->
  ```
- OR
  ```html
  <!-- build:css css/vendors.css -->
  <link rel="stylesheet" href="/node_modules/balm-ui/plugins/typography.css" />
  <link rel="stylesheet" href="/path/to/custom-typography.css" />
  <!-- endbuild -->
  ```

```js
import Vue from 'vue';
import typography from 'balm-ui/plugins/typography';

// Optional. Overwrite the param of `$tt()`.
Vue.use(typography, ['custom-module-1', 'custom-module-2']);
```
