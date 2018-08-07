import { utils } from '../../../src/scripts/plus'; // 'balm-ui-plus'

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
    message: 'Invalid password [6, 8]'
  },
  email: {
    validate(value) {
      return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(value);
    },
    message: 'Invalid E-mail'
  },
  idNumberRule: {
    validate: function(value) {
      return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(
        value
      );
    },
    message: 'Invalid ID card No.'
  }
};
