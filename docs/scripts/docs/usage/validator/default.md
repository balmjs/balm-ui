```js
import Vue from 'vue';
import BalmUI from 'balm-ui';
import validatorRules from './config/validator-rules';

Vue.use(BalmUI, {
  // Optional. Set global validator rules.
  $validator: validatorRules
});
```
