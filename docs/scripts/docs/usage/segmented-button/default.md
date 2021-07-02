```scss
@use 'balm-ui/dist/balm-ui';
```

```js
import BalmUI from 'balm-ui';

// `app`: Vue app
app.use(BalmUI, {
  // Optional. Overwrite `<ui-segmented-buttons>` props with default value.
  UiSegmentedButtons: {
    // some props
  }
});
```
