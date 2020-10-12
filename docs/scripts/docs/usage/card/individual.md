```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/card/card';
```

```js
import UiCardComponents from 'balm-ui/components/card';

// `app`: Vue app
app.use(UiCardComponents, {
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
