```js
import Vue from 'vue';
import BalmUIPlus from 'balm-ui/dist/balm-ui-plus';

Vue.use(BalmUIPlus, {
  // Optional. Overwrite `$toast` options.
  toast: {
    // some options
  }
});
```

### Standalone Usage

- SASS
  ```css
  @use 'balm-ui/components/core.scss';
  @use 'balm-ui/components/snackbar/snackbar.scss';
  ```
- CSS
  ```html
  <!-- build:css css/vendors.css -->
  <link rel="stylesheet" href="/node_modules/balm-ui/components/core.css" />
  <link rel="stylesheet" href="/node_modules/balm-ui/components/snackbar/snackbar.css" />
  <!-- endbuild -->
  ```

```js
import Vue from 'vue';
import toast from 'balm-ui/plugins/toast';

// Optional. Overwrite `$toast` options.
Vue.use(toast, {
  // some options
});
```
