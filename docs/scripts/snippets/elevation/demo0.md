```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI);
```

### Standalone Usage

- SASS
  ```css
  @use 'balm-ui/components/core.scss';
  @use 'balm-ui/directives/elevation/elevation.scss';
  ```
- CSS
  ```html
  <!-- build:css css/vendors.css -->
  <link rel="stylesheet" href="/node_modules/balm-ui/components/core.css" />
  <link rel="stylesheet" href="/node_modules/balm-ui/directives/elevation/elevation.css" />
  <!-- endbuild -->
  ```

```js
import Vue from 'vue';
import elevation from 'balm-ui/directives/elevation';

Vue.directive(elevation.name, elevation);
```
