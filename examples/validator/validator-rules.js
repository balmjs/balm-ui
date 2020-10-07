var validatorRules = {
  required: {
    validate: function (value) {
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
    validate: function (value) {
      return /^1[0-9]\d{9}$/.test(value);
    },
    message: 'Invalid phone number'
  },
  password: {
    validate: function (value) {
      return /^\w+$/.test(value);
    },
    message: 'Invalid password: must be a letter, digit or underline'
  }
};
