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
import elevation from 'balm-ui/directives/elevation';

Vue.directive(elevation.name, elevation);
```
