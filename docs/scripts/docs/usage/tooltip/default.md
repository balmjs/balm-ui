```scss
@use 'balm-ui/dist/balm-ui';
```

```js
import BalmUI from 'balm-ui';

// `app`: Vue app
app.use(BalmUI, {
  // Optional. Overwrite `<ui-tooltip>` props with default value.
  UiTooltip: {
    // some props
  }
});
```
