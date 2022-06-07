import autoInit from '../config/auto-init';
import getType from '../utils/typeof';

const defaultRules = {
  required: {
    validate(value) {
      return value && value.length > 0;
    },
    message: '%s is required'
  }
};

// Define validator constants
const LABEL_PLACEHOLDER = '%s';

let customValidations = [];

class Validations {
  clear() {
    customValidations = [];
  }

  get(fieldName = '') {
    return fieldName
      ? customValidations.find(({ key }) => key === fieldName)
      : customValidations;
  }

  set(fieldName, validationRule = {}) {
    if (Array.isArray(fieldName)) {
      customValidations = fieldName;
    } else {
      const index = customValidations.findIndex(({ key }) => key === fieldName);
      if (~index) {
        customValidations[index] = Object.assign({}, validationRule);
      } else {
        customValidations = [Object.assign({ key: fieldName }, validationRule)];
      }
    }
  }
}

function upgradeMessage(from, to) {
  console.warn(
    '[$validator]',
    `The '${from}' has been deprecated. Use the '${to}' instead`
  );
}

const $validator = {
  install(Vue, customRules = {}) {
    let globalValidationRules = Object.assign({}, defaultRules, customRules);

    const $validate = function (formData = {}, customFieldset = []) {
      let result = {
        valid: true, // 是否验证通过
        validFields: [], // 有效字段
        invalidFields: [], // 无效字段
        messages: [], // 所有无效字段的提示语
        message: '', // 第一个无效字段的提示语
        validMsg: {}
      };

      // 获取待验证字段
      let validations = customValidations.length
        ? customValidations
        : this.validations || this.$options.validations || [];

      if (!Array.isArray(validations)) {
        throw new Error('[$validator]: validations must be an array in 8.50.0');
      }

      for (let i = 0, fieldCount = validations.length; i < fieldCount; i++) {
        const fieldOption = validations[i]; // 对应验证配置
        const { key, label, validator } = fieldOption;
        const fieldName = key; // 字段名
        const needValidator =
          !customFieldset.length || customFieldset.includes(fieldName);

        if (needValidator) {
          const fieldLabel = label || fieldName; // 字段别名
          const fieldRules = validator
            .split(',')
            .map((validator) => validator.trim()); // 当前字段需要的所有验证方法
          let isAllValidOfField = true; // 当前字段通过全部验证规则

          for (let j = 0, rulesCount = fieldRules.length; j < rulesCount; j++) {
            let ruleName = fieldRules[j];
            let localValidationRule = fieldOption[ruleName];
            let rule =
              getType(localValidationRule) === 'object'
                ? localValidationRule
                : globalValidationRules[ruleName]; // 当前验证方法

            if (rule && getType(rule.validate) === 'function') {
              let fieldValue = formData[fieldName];
              let fieldArgs = [fieldValue, formData];
              if (!rule.validate.apply(this, fieldArgs)) {
                isAllValidOfField = false;
                let message = '';

                switch (getType(rule.message)) {
                  case 'string':
                    message = rule.message.replace(
                      LABEL_PLACEHOLDER,
                      fieldLabel
                    );
                    break;
                  case 'function':
                    message = rule.message.apply(this, fieldArgs);
                    break;
                  default:
                    console.warn(
                      '[$validator]',
                      `'${fieldName}.message' must be a string or function`
                    );
                    break;
                }

                if (message) {
                  result.messages.push(message);
                }
                break;
              }
            } else {
              console.warn(
                '[$validator]',
                `The field '${fieldName}' is missing a validation rule: '${ruleName}'`
              );
            }
          }

          if (isAllValidOfField) {
            result.validFields.push(fieldName);
          } else {
            result.invalidFields.push(fieldName);
          }
        }
      }

      if (result.messages.length) {
        result.valid = false;
        result.message = result.messages[0];

        result.invalidFields.forEach((field, index) => {
          result.validMsg[field] = result.messages[index];
        });
      }

      result.validFields.forEach((field) => {
        result.validMsg[field] = '';
      });

      return result;
    };

    Vue.prototype.$resetValidations = () =>
      upgradeMessage('$resetValidations', '$validations.clear');
    Vue.prototype.$setValidations = () =>
      upgradeMessage('$setValidations', '$validations.set');
    Vue.prototype.$validations = new Validations();
    Vue.prototype.$validate = $validate;
  }
};

autoInit($validator);

export default $validator;
