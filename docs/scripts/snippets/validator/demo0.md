Default Usage

```js
import Vue from 'vue';
import BalmUIPlus from 'balm-ui/dist/balm-ui-plus';
import validatorRules from './config/validator-rules';

Vue.use(BalmUIPlus, {
  // Optional. Set global validator rules.
  validator: validatorRules
});
```

Standalone Usage

```js
import Vue from 'vue';
import validator from 'balm-ui/plugins/validator';
import validatorRules from './config/validator-rules';

// Optional. Set global validator rules.
Vue.use(validator, validatorRules);
```

Custom global validator rules

```js
import { types } from 'balm-ui/dist/balm-ui-plus'; // Default Usage
// OR
// import types from 'balm-ui/utils/types'; // Standalone Usage

export default {
  required: {
    validate(value) {
      let result = false;
      if (types.isString(value)) {
        result = value.trim() !== '';
      } else if (types.isArray(value)) {
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
      return /^1[0-9]\d{9}$/.test(value);
    },
    message: 'Invalid phone number'
  },
  password: {
    validate(value) {
      return /^\w+$/.test(value);
    },
    message: 'Invalid password: must be a letter, digit or underline'
  }
};
```
