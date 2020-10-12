```scss
/* Included `typography.scss` */
@use 'balm-ui/components/core';

/* OR */
@use 'balm-ui/plugins/typography/typography';
```

```js
import $typography from 'balm-ui/plugins/typography';

// `app`: Vue app
// Optional. Overwrite the param of `$tt()`.
app.use($typography, ['custom-style-1', 'custom-style-2']);
```
