```scss
@use 'balm-ui/dist/balm-ui';
```

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
