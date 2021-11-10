```scss
/* Included `theme.scss` */
@use 'balm-ui/components/core';

/* OR */
@use 'balm-ui/plugins/theme/theme';
```

```js
import $theme from 'balm-ui/plugins/theme';

// `app`: Vue app
app.use($theme, {
  // (Optional) New in 9.28.0, See ThemeColor type in APIs.
});
```
