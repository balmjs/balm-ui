```scss
@use 'balm-ui/dist/balm-ui';
```

```js
import BalmUI from 'balm-ui/dist/balm-ui';

// `app`: Vue app
app.use(BalmUI, {
  // Optional. Overwrite `<ui-rangepicker>` props with default value.
  UiRangepicker: {
    // some props
  }
});
```
