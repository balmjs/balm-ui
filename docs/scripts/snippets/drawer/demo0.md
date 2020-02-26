```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI);
```

### Standalone Usage

- SASS
  ```css
  @use 'balm-ui/components/core.scss';
  @use 'balm-ui/components/drawer/drawer.scss';
  @use 'balm-ui/components/list/list.scss';
  ```
- CSS
  ```html
  <!-- build:css css/vendors.css -->
  <link rel="stylesheet" href="/node_modules/balm-ui/components/core.css" />
  <link rel="stylesheet" href="/node_modules/balm-ui/components/drawer/drawer.css" />
  <link rel="stylesheet" href="/node_modules/balm-ui/components/list/list.css" />
  <!-- endbuild -->
  ```

```js
import Vue from 'vue';
import UiDrawerComponents from 'balm-ui/components/drawer';

Vue.use(UiDrawerComponents);
```
