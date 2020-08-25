### Default Usage

```scss
@use 'balm-ui/dist/balm-ui';
```

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite the param of `$tt()`.
  typography: ['custom-module-classname-1', 'custom-module-classname-2']
});
```

### Individual Usage

```scss
/* Included `typography.scss` */
@use 'balm-ui/components/core';

/* OR */
@use 'balm-ui/plugins/typography/typography';
```

```js
import Vue from 'vue';
import typography from 'balm-ui/plugins/typography';

// Optional. Overwrite the param of `$tt()`.
Vue.use(typography, ['custom-module-classname-1', 'custom-module-classname-2']);
```
