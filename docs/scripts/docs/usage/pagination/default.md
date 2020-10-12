```scss
@use 'balm-ui/dist/balm-ui';
```

```js
import BalmUI from 'balm-ui';

// `app`: Vue app
app.use(BalmUI, {
  // Optional. Overwrite `<ui-pagination>` props with default value.
  UiPagination: {
    // some props
  }
});
```
