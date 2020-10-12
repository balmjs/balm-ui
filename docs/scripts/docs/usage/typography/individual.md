```scss
/* Included `typography.scss` */
@use 'balm-ui/components/core';

/* OR */
@use 'balm-ui/plugins/typography/typography';
```

```js
import Vue from 'vue';
import $typography from 'balm-ui/plugins/typography';

// Optional. Overwrite the param of `$tt()`.
Vue.use($typography, ['custom-style-1', 'custom-style-2']);
```
