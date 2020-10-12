```scss
@use 'balm-ui/dist/balm-ui';
```

```js
import BalmUIPlus from 'balm-ui/dist/balm-ui-plus';

// `app`: Vue app
app.use(BalmUIPlus, {
  // Optional. Overwrite `<ui-skeleton>` props with default value.
  UiSkeleton: {
    // some props
  }
});
```
