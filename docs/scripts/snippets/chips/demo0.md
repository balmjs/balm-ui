```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-chips>` props with default value.
  UiChips: {
    // some props
  }
});
```

### Standalone Usage

- SASS
  ```css
  @use 'balm-ui/components/core.scss';
  @use 'balm-ui/components/chips/chips.scss';
  @use 'balm-ui/components/icon/icon.scss';
  ```
- CSS
  ```html
  <!-- build:css css/vendors.css -->
  <link rel="stylesheet" href="/node_modules/balm-ui/components/core.css" />
  <link rel="stylesheet" href="/node_modules/balm-ui/components/chips/chips.css" />
  <link rel="stylesheet" href="/node_modules/balm-ui/components/icon/icon.css" />
  <!-- endbuild -->
  ```

```js
import Vue from 'vue';
import UiChipsComponents from 'balm-ui/components/chips';

Vue.use(UiChipsComponents, {
  // Optional. Overwrite `<ui-chips>` props with default value.
  UiChips: {
    // some props
  }
});
```
