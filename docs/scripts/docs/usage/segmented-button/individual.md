```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/segmented-button/segmented-button';
@use 'balm-ui/components/icon/icon'; // Optional
```

```js
import UiSegmentedButtonComponents from 'balm-ui/components/segmented-button';

// `app`: Vue app
app.use(UiSegmentedButtonComponents, {
  // Optional. Overwrite `<ui-segmented-buttons>` props with default value.
  UiSegmentedButtons: {
    // some props
  }
});
```
