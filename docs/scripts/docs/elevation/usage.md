### Default Usage

```css
@use 'balm-ui/dist/balm-ui.scss';
```

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI);
```

### Individual Usage

```css
/* Included `elevation.scss` */
@use 'balm-ui/components/core.scss';

/* OR */
@use 'balm-ui/directives/elevation/elevation.scss';
```

```js
import Vue from 'vue';
import elevation from 'balm-ui/directives/elevation';

Vue.directive(elevation.name, elevation);
```
