### Default Usage

```scss
@use 'balm-ui/dist/balm-ui';
```

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI);
```

### Individual Usage

```scss
/* Included `theme.scss` */
@use 'balm-ui/components/core';

/* OR */
@use 'balm-ui/plugins/theme/theme';
```

```js
import Vue from 'vue';
import theme from 'balm-ui/plugins/theme';

Vue.use(theme);
```
