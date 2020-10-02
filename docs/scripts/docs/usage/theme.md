### Default Usage

```scss
@use 'balm-ui/dist/balm-ui';
```

```js
import BalmUI from 'balm-ui';

// `app`: Vue app
app.use(BalmUI);
```

### Individual Usage

```scss
/* Included `theme.scss` */
@use 'balm-ui/components/core';

/* OR */
@use 'balm-ui/plugins/theme/theme';
```

```js
import $theme from 'balm-ui/plugins/theme';

// `app`: Vue app
app.use($theme);
```
