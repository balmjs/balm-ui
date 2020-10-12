```scss
@use 'balm-ui/dist/balm-ui';
```

```js
import BalmUI from 'balm-ui';

// `app`: Vue app
app.use(BalmUI, {
  // Optional. Overwrite `<ui-top-app-bar>` props with default value.
  UiTopAppBar: {
    // some props
  }
});
```
