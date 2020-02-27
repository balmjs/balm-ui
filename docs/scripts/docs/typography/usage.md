### Default Usage

```css
@use 'balm-ui/dist/balm-ui.scss';
```

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite the param of `$tt()`.
  typography: ['custom-module-1', 'custom-module-2']
});
```

### Individual Usage

```css
/* Included `typography.scss` */
@use 'balm-ui/components/core.scss';

/* OR */
@use 'balm-ui/plugins/typography/typography.scss';
```

```js
import Vue from 'vue';
import typography from 'balm-ui/plugins/typography';

// Optional. Overwrite the param of `$tt()`.
Vue.use(typography, ['custom-module-1', 'custom-module-2']);
```
