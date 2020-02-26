```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite `<ui-image-list>` props with default value.
  UiImageList: {
    // some props
  },
  // Optional. Overwrite `<ui-image-item>` props with default value.
  UiImageItem: {
    // some props
  }
});
```

### Standalone Usage

- SASS
  ```css
  @use 'balm-ui/components/core.scss';
  @use 'balm-ui/components/image-list/image-list.scss';
  ```
- CSS
  ```html
  <!-- build:css css/vendors.css -->
  <link rel="stylesheet" href="/node_modules/balm-ui/components/core.css" />
  <link rel="stylesheet" href="/node_modules/balm-ui/components/image-list/image-list.css" />
  <!-- endbuild -->
  ```

```js
import Vue from 'vue';
import UiImageListComponents from 'balm-ui/components/image-list';

Vue.use(UiImageListComponents, {
  // Optional. Overwrite `<ui-image-list>` props with default value.
  UiImageList: {
    // some props
  },
  // Optional. Overwrite `<ui-image-item>` props with default value.
  UiImageItem: {
    // some props
  }
});
```
