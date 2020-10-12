```js
import Vue from 'vue';
import $validator from 'balm-ui/plugins/validator';
import validatorRules from './config/validator-rules';

// Optional. Set global validator rules.
Vue.use($validator, validatorRules);
```
