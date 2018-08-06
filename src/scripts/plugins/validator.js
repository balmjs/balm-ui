import autoInstall from '../config/auto-install';
import getType from '../utils/typeof';

const defaultRules = {
  required: {
    validate(value) {
      return value.length > 0;
    },
    message: '%s is required'
  }
};

// Define constants
const FIELD_LABEL = 'label';
const FIELD_VALIDATOR = 'validator';
const LABEL_PLACEHOLDER = '%s';

const BalmUI_ValidatorPlugin = {
  install(Vue, customGlobalRules = {}) {
    let validationRules = Object.assign({}, defaultRules, customGlobalRules);

    const $validate = function(formData = {}, customLocalRules = {}) {
      let currentFormData = Object.assign({}, formData);
      let currentRules = Object.assign({}, validationRules, customLocalRules);

      let result = {
        isValid: true, // 是否验证通过
        valid: [], // 有效字段
        invalid: [], // 无效字段
        messages: [], // 所有无效字段的提示语
        message: '', // 第一个无效字段的提示语
        errorMsg: {}
      };

      // 获取待验证字段
      let validations = this.$options.validations || {};
      let validationFields = Object.keys(validations);

      for (
        let i = 0, fieldCount = validationFields.length;
        i < fieldCount;
        i++
      ) {
        let fieldName = validationFields[i]; // 字段名
        let fieldOption = validations[fieldName]; // 对应验证配置
        let fieldLabel = fieldOption[FIELD_LABEL] || ''; // 字段别名
        let fieldRules = fieldOption[FIELD_VALIDATOR].split(',').map(
          validator => validator.trim()
        ); // 当前字段需要的所有验证方法
        let isAllValidOfField = true; // 当前字段通过全部验证规则

        for (let j = 0, rulesCount = fieldRules.length; j < rulesCount; j++) {
          let ruleName = fieldRules[j];
          let rule = fieldOption[ruleName] || currentRules[ruleName]; // 当前验证方法

          if (rule && getType(rule.validate) === 'function') {
            if (
              !rule.validate.apply(this, [
                currentFormData[fieldName],
                currentFormData
              ])
            ) {
              isAllValidOfField = false;

              let message =
                getType(rule.message) === 'function'
                  ? rule.message.apply(this, [
                      fieldName,
                      currentFormData[fieldName],
                      currentFormData
                    ])
                  : rule.message.replace(LABEL_PLACEHOLDER, fieldLabel);

              result.messages.push(message);
              break;
            }
          } else {
            console.warn(
              `The field [${fieldName}] is missing a validation rule: '${ruleName}'.`
            );
          }
        }

        if (isAllValidOfField) {
          result.valid.push(fieldName);
        } else {
          result.invalid.push(fieldName);
        }
      }

      if (result.messages.length) {
        result.isValid = false;
        result.message = result.messages[0];

        result.invalid.forEach((field, index) => {
          result.errorMsg[field] = result.messages[index];
        });
      }

      result.valid.forEach(field => {
        result.errorMsg[field] = '';
      });

      return result;
    };

    Vue.prototype.$validate = $validate;
  }
};

autoInstall(BalmUI_ValidatorPlugin);

export default BalmUI_ValidatorPlugin;
