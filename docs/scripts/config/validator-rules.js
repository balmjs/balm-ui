import { types } from 'balm-ui';

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
  },
  email: {
    validate(value) {
      return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(value);
    },
    message: 'Invalid E-mail'
  }
};
