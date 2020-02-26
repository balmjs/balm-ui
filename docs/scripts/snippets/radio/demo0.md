```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-radio>` props with default value.
  UiRadio: {
    // some props
  }
});
```

### Standalone Usage

- SASS
  ```css
  @use 'balm-ui/components/core.scss';
  @use 'balm-ui/components/form-field/form-field.scss';
  @use 'balm-ui/components/radio/radio.scss';
  ```
- CSS
  ```html
  <!-- build:css css/vendors.css -->
  <link rel="stylesheet" href="/node_modules/balm-ui/components/core.css" />
  <link rel="stylesheet" href="/node_modules/balm-ui/components/form-field/form-field.css" />
  <link rel="stylesheet" href="/node_modules/balm-ui/components/radio/radio.css" />
  <!-- endbuild -->
  ```

```js
import Vue from 'vue';
import UiFormField from 'balm-ui/components/form-field';
import UiRadio from 'balm-ui/components/radio';

Vue.use(UiFormField);
// Optional. Overwrite `<ui-radio>` props with default value.
Vue.use(UiRadio, {
  // some props
});
```
