```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI);
```

### Standalone Usage

- SASS
  ```css
  /* Included `ripple.scss` */
  @use 'balm-ui/components/core.scss';

  /* OR */
  @use 'balm-ui/directives/ripple/ripple.scss';
  ```
- CSS
  ```html
  <!-- Included `ripple.css` -->
  <!-- build:css css/vendors.css -->
  <link rel="stylesheet" href="/node_modules/balm-ui/components/core.css" />
  <!-- endbuild -->

  <!-- OR -->
  <!-- build:css css/vendors.css -->
  <link rel="stylesheet" href="/node_modules/balm-ui/directives/ripple/ripple.css" />
  <!-- endbuild -->
  ```

```js
import Vue from 'vue';
import ripple from 'balm-ui/directives/ripple';

Vue.directive(ripple.name, ripple);
```
