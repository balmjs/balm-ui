```js
import Vue from 'vue';
import BalmUIPlus from 'balm-ui/dist/balm-ui-plus';

Vue.use(BalmUIPlus, {
  // Optional. Overwrite `$alert` options.
  alert: {
    // some options
  }
});
```

### Standalone Usage

- SASS
  ```css
  @use 'balm-ui/components/core.scss';
  @use 'balm-ui/components/dialog/dialog.scss';
  @use 'balm-ui/plugins/alert/alert.scss';
  ```
- CSS
  ```html
  <!-- build:css css/vendors.css -->
  <link rel="stylesheet" href="/node_modules/balm-ui/components/core.css" />
  <link rel="stylesheet" href="/node_modules/balm-ui/components/dialog/dialog.css" />
  <link rel="stylesheet" href="/node_modules/balm-ui/plugins/alert/alert.css" />
  <!-- endbuild -->
  ```

```js
import Vue from 'vue';
import alert from 'balm-ui/plugins/alert';

// Optional. Overwrite `$alert` options.
Vue.use(alert, {
  // some options
});
```
