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
/* Included `theme.scss` */
@use 'balm-ui/components/core.scss';

/* OR */
@use 'balm-ui/plugins/theme/theme.scss';
```

```js
import Vue from 'vue';
import theme from 'balm-ui/plugins/theme';

Vue.use(theme);
```
