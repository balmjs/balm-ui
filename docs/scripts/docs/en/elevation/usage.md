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
/* Included `elevation.scss` */
@use 'balm-ui/components/core';

/* OR */
@use 'balm-ui/directives/elevation/elevation';
```

```js
import Vue from 'vue';
import vElevation from 'balm-ui/directives/elevation';

Vue.directive(vElevation.name, vElevation);
```
