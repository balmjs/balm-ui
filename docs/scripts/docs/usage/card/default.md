```scss
@use 'balm-ui/dist/balm-ui';
```

```js
import BalmUI from 'balm-ui';

// `app`: Vue app
app.use(BalmUI, {
  // Optional. Overwrite `<ui-card>` props with default value.
  UiCard: {
    // some props
  },
  // Optional. Overwrite `<ui-card-media>` props with default value.
  UiCardMedia: {
    // some props
  },
  // Optional. Overwrite `<ui-card-actions>` props with default value.
  UiCardActions: {
    // some props
  }
});
```
