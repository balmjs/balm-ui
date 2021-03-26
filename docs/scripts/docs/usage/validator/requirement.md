- Set global validation rules

  ```js
  import { helpers } from 'balm-ui'; // Default Usage
  // OR
  // import helpers from 'balm-ui/utils/helpers'; // ### Individual Usage

  export default {
    required: {
      validate(value) {
        return !helpers.isEmpty(value);
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
      message: '%s must be a letter, digit or underline'
    }
  };
  ```
