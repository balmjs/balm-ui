```scss
@use 'balm-ui/dist/balm-ui';
```

```js
import BalmUI from 'balm-ui';
import BalmUIPlus from 'balm-ui/dist/balm-ui-plus';

// `app`: Vue app
app.use(BalmUI);
app.use(BalmUIPlus, {
  // Optional. Overwrite `<ui-navigation-bar>` props with default value.
  UiNavigationBar: {
    // some props
  }
});
```
