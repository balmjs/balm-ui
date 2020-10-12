```scss
@use 'balm-ui/dist/balm-ui';
```

```js
import Vue from 'vue';
import BalmUI from 'balm-ui';

Vue.use(BalmUI, {
  // Optional. Overwrite the param of `$tt()`.
  $typography: ['custom-style-1', 'custom-style-2']
});
```
