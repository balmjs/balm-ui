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
/* Included `ripple.scss` */
@use 'balm-ui/components/core.scss';

/* OR */
@use 'balm-ui/directives/ripple/ripple.scss';
```

```js
import Vue from 'vue';
import ripple from 'balm-ui/directives/ripple';

Vue.directive(ripple.name, ripple);
```
