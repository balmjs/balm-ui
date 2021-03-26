```js
import $validator from 'balm-ui/plugins/validator';
import validatorRules from './config/validator-rules';

// `app`: Vue app
// Optional. Set global validation rules.
app.use($validator, validatorRules);
```
