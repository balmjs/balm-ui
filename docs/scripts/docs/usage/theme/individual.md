```scss
/* Included `theme.scss` */
@use 'balm-ui/components/core';

/* OR */
@use 'balm-ui/plugins/theme/theme';
```

```js
import Vue from 'vue';
import $theme from 'balm-ui/plugins/theme';

Vue.use($theme, {
  // (Optional) New in 8.38.0, See ThemeColor type in APIs.
});
```
