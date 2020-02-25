Default Usage

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI);
```

Standalone Usage

```js
import Vue from 'vue';
import theme from 'balm-ui/plugins/theme';

Vue.use(theme);
```

- SASS
  ```css
  /* Included `theme.scss` */
  @use 'balm-ui/components/core.scss';

  /* OR */
  @use 'balm-ui/plugins/theme/theme.scss';
  ```
- CSS
  ```html
  <!-- Included `theme.css` -->
  <!-- build:css css/vendors.css -->
  <link rel="stylesheet" href="/node_modules/balm-ui/components/core.css" />
  <!-- endbuild -->

  <!-- OR -->
  <!-- build:css css/vendors.css -->
  <link rel="stylesheet" href="/node_modules/balm-ui/plugins/theme/theme.css" />
  <!-- endbuild -->
  ```
