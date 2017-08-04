/**
 * Form Validator
 *
 * @author Elf-mousE
 * @updated 2017.08.04
 *
 * @usage
 *
 * ```js
 * // `/path/to/mixins/form-validator-rules.js`
 * export default {
 *   required: {
 *     validate(value) {
 *       return value.length;
 *     },
 *     message: '%s is required'
 *   },
 *   ...
 * };
 * ```
 *
 * ```js
 * import { mixins } from 'balm-ui-lite';
 * import formValidatorRules from '/path/to/mixins/form-validator-rules';
 *
 * export default {
 *   ...
 *   mixins: [mixins.formValidator],
 *   validationRules: formValidatorRules,
 *   validation: {
 *     fieldname1: {
 *       label: 'Some Label',
 *       validator: 'required,customRule1',
 *       customRule1: {
 *         validate(value, formData) {
 *           return true;
 *         },
 *         message: 'custom message'
 *       }
 *     },
 *     ...
 *   },
 *   data() {
 *     return {
 *       formData: {
 *         username: '',
 *         password: '',
 *         ...
 *       }
 *     };
 *   },
 *   methods: {
 *     submit() {
 *       let result = this.validate(this.formData);
 *       if (result.isValid) {
 *         // valid
 *       } else {
 *         // invalid
 *       }
 *     }
 *   },
 *   ...
 * };
 * ```
 */

const LABEL_PLACEHOLDER = '%s';

export default {
  methods: {
    validate(formData) {
      let result = {
        isValid: true, // 是否验证通过
        valid: [], // 有效字段
        invalid: [], // 无效字段
        message: '', // 第一个无效字段的提示语
        messages: [] // 所有无效字段的提示语
      };

      const VALIDATION = this.$options.validation || {};
      const RULES = this.$options.validationRules || {};

      for (let key in VALIDATION) {
        let value = formData[key];
        let field = VALIDATION[key];

        let validators = field.validator.split(',').map(validator => validator.trim());
        let label = field.label || '';

        for (let i = 0, len = validators.length; i < len; i++) {
          let curRuleName = validators[i];
          let curValidator = RULES[curRuleName] || field[curRuleName];

          if (curValidator) {
            if (curValidator.validate(value, formData)) {
              // success
              if (!result.valid.includes(key)) {
                result.valid.push(key);
              }
            } else {
              // failure
              result.isValid = false;
              result.invalid.push(key);
              let index = result.valid.findIndex(item => item === key);
              if (index > -1) {
                result.valid.splice(index, 1);
              }

              let message = curValidator.message.replace(LABEL_PLACEHOLDER, label);
              if (!result.message) {
                result.message = message;
              }
              result.messages.push(message);
              break;
            }
          } else {
            console.warn(`The '${key}' is missing a validation rule: [${curRuleName}]`);
          }
        }
      }

      return result;
    }
  }
};
