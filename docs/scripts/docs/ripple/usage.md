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
/* Included `ripple.scss` */
@use 'balm-ui/components/core';

/* OR */
@use 'balm-ui/directives/ripple/ripple';
```

```js
import Vue from 'vue';
import ripple from 'balm-ui/directives/ripple';

Vue.directive(ripple.name, ripple);
```
