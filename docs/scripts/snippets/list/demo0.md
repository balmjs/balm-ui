Default Usage

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-list>` props with default value.
  UiList: {
    // some props
  }
});
```

Standalone Usage

```js
import Vue from 'vue';
import UiListComponents from 'balm-ui/components/list';

Vue.use(UiListComponents, {
  // Optional. Overwrite `<ui-list>` props with default value.
  UiList: {
    // some props
  }
});
```

- SASS
  ```css
  @use 'balm-ui/components/core.scss';
  @use 'balm-ui/components/list/list.scss';
  @use 'balm-ui/components/icon/icon.scss';
  ```
- CSS
  ```html
  <!-- build:css css/vendors.css -->
  <link rel="stylesheet" href="/node_modules/balm-ui/components/core.css" />
  <link rel="stylesheet" href="/node_modules/balm-ui/components/list/list.css" />
  <link rel="stylesheet" href="/node_modules/balm-ui/components/icon/icon.css" />
  <!-- endbuild -->
  ```
