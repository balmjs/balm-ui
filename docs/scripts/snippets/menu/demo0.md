```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-menu>` props with default value.
  UiMenu: {
    // some props
  }
});
```

### Standalone Usage

- SASS
  ```css
  @use 'balm-ui/components/core.scss';
  @use 'balm-ui/components/list/list.scss';
  @use 'balm-ui/components/menu/menu.scss';
  ```
- CSS
  ```html
  <!-- build:css css/vendors.css -->
  <link rel="stylesheet" href="/node_modules/balm-ui/components/core.css" />
  <link rel="stylesheet" href="/node_modules/balm-ui/components/list/list.css" />
  <link rel="stylesheet" href="/node_modules/balm-ui/components/menu/menu.css" />
  <!-- endbuild -->
  ```

```js
import Vue from 'vue';
import UiMenuComponents from 'balm-ui/components/menu';

Vue.use(UiMenuComponents, {
  // Optional. Overwrite `<ui-menu>` props with default value.
  UiMenu: {
    // some props
  }
});
```
