```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/image-list/image-list';
```

```js
import UiImageListComponents from 'balm-ui/components/image-list';

// `app`: Vue app
app.use(UiImageListComponents, {
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
