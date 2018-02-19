import getType from '../helpers/typeof';

const defaultRules = {
  required: {
    validate(value) {
      return value.length > 0;
    },
    message: '%s is required'
  }
};

const LABEL_PLACEHOLDER = '%s';

const BalmUI_ValidatorPlugin = {
  install(Vue, customRules = {}) {
    let validationRules = Object.assign({}, defaultRules, customRules);

    const $validate = function(formData = {}, rules = {}) {
      let currentFormData = Object.assign({}, formData);
      let currentRules = Object.assign({}, validationRules, rules);

      let result = {
        isValid: true, // 是否验证通过
        valid: [], // 有效字段
        invalid: [], // 无效字段
        message: '', // 第一个无效字段的提示语
        messages: [] // 所有无效字段的提示语
      };

      let validations = this.$options.validations || {};
      // 获取待验证字段
      let files = Object.keys(validations);
      let l = files.length;
      let i = 0;

      for (; i < l; i++) {
        let fieldName = files[i]; // 字段名
        let fieldOption = validations[fieldName]; // 对应验证配置
        let label = fieldOption.label || ''; // 字段别名

        let filedRules = fieldOption.validator
          .split(',')
          .map(validator => validator.trim()); // 当前字段需要的所有验证方法
        let rulesLength = filedRules.length;
        let x = 0;
        let fieldAllValid = true;

        for (; x < rulesLength; x++) {
          let ruleName = filedRules[x];
          let rule = fieldOption[ruleName] || currentRules[ruleName]; // 当前验证方法

          if (rule && getType(rule.validate) === 'function') {
            if (
              !rule.validate.apply(this, [
                currentFormData[fieldName],
                currentFormData
              ])
            ) {
              fieldAllValid = false;
              let message = '';

              // 错误提示
              if (getType(rule.message) === 'function') {
                message = rule.message.apply(this, [
                  fieldName,
                  currentFormData[fieldName],
                  currentFormData
                ]);
              } else {
                message = rule.message.replace(LABEL_PLACEHOLDER, label);
              }

              if (!result.message) {
                result.message = message;
              }

              result.messages.push(message);
            }
          } else {
            console.warn(
              `The field [${fieldName}] is missing a validation rule: '${ruleName}'`
            );
          }
        }

        if (fieldAllValid) {
          result.valid.push(fieldName);
        } else {
          result.isValid = false;
          result.invalid.push(fieldName);
        }
      }

      return result;
    };

    Vue.prototype.$validate = $validate; // NOTE: named '$validate'
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(BalmUI_ValidatorPlugin);
}

export default BalmUI_ValidatorPlugin;
