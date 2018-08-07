Default Usage

```js
import Vue from 'vue';
import BalmUIPlus from 'balm-ui/dist/balm-ui-plus';
import validatorRules from './config/custom-validator-rules';

Vue.use(BalmUIPlus, {
  // Optional. Set global validator rules.
  validator: validatorRules
});
```

Standalone Usage

```js
import Vue from 'vue';
import validator from 'balm-ui/plugins/validator';
import validatorRules from './config/custom-validator-rules';

// Optional. Set global validator rules.
Vue.use(validator, validatorRules);
```

Custom validator rules

```js
import { utils } from 'balm-ui/dist/balm-ui-plus'; // Default Usage
// OR
// import * as utils from 'balm-ui/utils/type'; // Standalone Usage

export default {
  required: {
    validate(value) {
      let result = false;
      if (utils.isString(value)) {
        result = value.trim() !== '';
      } else if (utils.isArray(value)) {
        return value.length;
      } else {
        result = value;
      }
      return result;
    },
    message: '%s is required'
  },
  mobile: {
    validate(value) {
      return /^1[34578]\d{9}$/.test(value);
    },
    message: 'Invalid phone number'
  },
  password: {
    validate(value) {
      return /^\w{6,8}$/.test(value);
    },
    message: 'Invalid password'
  }
};
```
