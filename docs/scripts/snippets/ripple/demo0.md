Default Usage

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI);
```

Standalone Usage

- Included `ripple.css`
  ```html
  <!-- build:css css/vendors.css -->
  <link rel="stylesheet" href="/node_modules/balm-ui/components/core.css" />
  <!-- endbuild -->
  ```
- OR
  ```html
  <!-- build:css css/vendors.css -->
  <link rel="stylesheet" href="/node_modules/balm-ui/directives/ripple.css" />
  <!-- endbuild -->
  ```

```js
import Vue from 'vue';
import ripple from 'balm-ui/directives/ripple';

Vue.directive(ripple.name, ripple);
```
