```scss
@use 'balm-ui/dist/balm-ui';
```

```js
import BalmUINext from 'balm-ui/dist/balm-ui-next';

// `app`: Vue app
app.use(BalmUINext, {
  // Optional. Overwrite `<ui-bottom-navigation>` props with default value.
  UiBottomNavigation: {
    // some props
  }
});
```
