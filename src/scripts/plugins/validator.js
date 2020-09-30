import { getCurrentInstance } from 'vue';
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
const FIELD_LABEL = 'label';
const FIELD_VALIDATOR = 'validator';
const LABEL_PLACEHOLDER = '%s';

let globalValidationRules = {};

class UiValidator {
  constructor() {
    const { ctx } = getCurrentInstance();
    this.ctx = ctx;
  }

  validate(formData = {}, customFieldset = []) {
    let result = {
      valid: true,
      validFields: [], // Valid fieldnames
      invalidFields: [], // Invalid fieldnames
      messages: [], // All invalid fields' messages
      message: '', // First invalid field's message
      validMsg: {}
    };

    let validations =
      this.ctx.validations || this.ctx.$options.validations || {};
    let validationFields = Object.keys(validations);

    if (customFieldset.length) {
      validationFields = validationFields.filter((field) =>
        customFieldset.includes(field)
      );
    }

    for (let i = 0, fieldCount = validationFields.length; i < fieldCount; i++) {
      let fieldName = validationFields[i]; // Field name
      let fieldOption = validations[fieldName]; // The validation option of current field
      let fieldLabel = fieldOption[FIELD_LABEL] || ''; // Field alias name
      let fieldRules = fieldOption[FIELD_VALIDATOR].split(
        ','
      ).map((validator) => validator.trim()); // All validation methods of current field
      let isAllValidOfField = true;

      for (let j = 0, rulesCount = fieldRules.length; j < rulesCount; j++) {
        let ruleName = fieldRules[j];
        let localValidationRule = fieldOption[ruleName];
        let rule = localValidationRule || globalValidationRules[ruleName]; // Current validation method

        if (rule && getType(rule.validate) === 'function') {
          let fieldValue = formData[fieldName];
          let fieldArgs = [fieldValue, formData];
          if (!rule.validate.apply(this.ctx.$data, fieldArgs)) {
            isAllValidOfField = false;
            let message = '';

            switch (getType(rule.message)) {
              case 'string':
                message = rule.message.replace(LABEL_PLACEHOLDER, fieldLabel);
                break;
              case 'function':
                message = rule.message.apply(this.ctx.$data, fieldArgs);
                break;
              default:
                console.warn(
                  `'[${fieldName}.message]' must be a string or function.`
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
            `The field [${fieldName}] is missing a validation rule: '${ruleName}'.`
          );
        }
      }

      if (isAllValidOfField) {
        result.validFields.push(fieldName);
      } else {
        result.invalidFields.push(fieldName);
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
  }

  resetValidations() {
    this.ctx.$options.validations = {};
  }

  setValidations(fieldName, validationRule = {}) {
    if (!this.ctx.$options.validations) {
      $resetValidations();
    }

    if (getType(fieldName) === 'object') {
      this.ctx.$options.validations = Object.assign(
        {},
        this.ctx.$options.validations,
        fieldName
      );
    } else {
      this.ctx.$options.validations[fieldName] = validationRule;
    }
  }
}

const BalmUI_ValidatorPlugin = {
  install(app, customRules = {}) {
    globalValidationRules = Object.assign({}, defaultRules, customRules);
  }
};

const useValidator = () => new UiValidator();

export default BalmUI_ValidatorPlugin;
export { useValidator };
