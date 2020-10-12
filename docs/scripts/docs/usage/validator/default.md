```js
import BalmUI from 'balm-ui';
import validatorRules from './config/validator-rules';

// `app`: Vue app
app.use(BalmUI, {
  // Optional. Set global validator rules.
  $validator: validatorRules
});
```
