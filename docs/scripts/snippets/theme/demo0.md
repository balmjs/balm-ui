Default Usage

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI);
```

Standalone Usage

- Included `theme.css`
  ```html
  <!-- build:css css/vendors.css -->
  <link rel="stylesheet" href="/node_modules/balm-ui/components/core.css" />
  <!-- endbuild -->
  ```
- OR
  ```html
  <!-- build:css css/vendors.css -->
  <link rel="stylesheet" href="/node_modules/balm-ui/plugins/theme.css" />
  <!-- endbuild -->
  ```

```js
import Vue from 'vue';
import theme from 'balm-ui/plugins/theme';

Vue.use(theme);
```
