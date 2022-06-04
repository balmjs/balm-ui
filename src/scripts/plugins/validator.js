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
const LABEL_PLACEHOLDER = '%s';

let globalValidationRules = {};

function upgradeMessage(from, to) {
  console.warn(
    '[$validator]',
    `The '${from}' has been deprecated. Use the '${to}' instead`
  );
}

class UiValidator {
  constructor() {
    const currentInstance = getCurrentInstance();
    this.instance = currentInstance;
    this.validations = [];
    this.customValidations = [];
  }

  validate(formData = {}, customFieldset = []) {
    const { setupState, data } = this.instance;

    let result = {
      valid: true,
      validFields: [], // Valid field names
      invalidFields: [], // Invalid field names
      messages: [], // All invalid fields' messages
      message: '', // First invalid field's message
      validMsg: {}
    };

    this.validations = this.customValidations.length
      ? this.customValidations
      : setupState.validations || data.validations || [];

    if (!Array.isArray(this.validations)) {
      throw new Error('[$validator]: validations must be an array in 10.7.0');
    }

    for (let i = 0, fieldCount = this.validations.length; i < fieldCount; i++) {
      const fieldOption = this.validations[i]; // The validation option of current field
      const { key, label, validator } = fieldOption;
      const fieldName = key; // Field name
      const needValidator =
        !customFieldset.length || customFieldset.includes(fieldName);

      if (needValidator) {
        const fieldLabel = label || fieldName; // Field alias name
        const fieldRules = validator
          .split(',')
          .map((validator) => validator.trim()); // All validation methods of current field
        let isAllValidOfField = true;

        for (let j = 0, rulesCount = fieldRules.length; j < rulesCount; j++) {
          let ruleName = fieldRules[j];
          let localValidationRule = fieldOption[ruleName];
          let rule = localValidationRule || globalValidationRules[ruleName]; // Current validation method

          if (rule && getType(rule.validate) === 'function') {
            let fieldValue = formData[fieldName];
            let fieldArgs = [fieldValue, formData];
            if (!rule.validate.apply(this.instance.$data, fieldArgs)) {
              isAllValidOfField = false;
              let message = '';

              switch (getType(rule.message)) {
                case 'string':
                  message = rule.message.replace(LABEL_PLACEHOLDER, fieldLabel);
                  break;
                case 'function':
                  message = rule.message.apply(this.instance.$data, fieldArgs);
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
  }

  resetValidations() {
    upgradeMessage('resetValidations', 'clear');
  }

  setValidations() {
    upgradeMessage('setValidations', 'set');
  }

  clear() {
    this.customValidations = [];
  }

  get(fieldName = '') {
    return fieldName
      ? this.customValidations.find(({ key }) => key === fieldName)
      : this.customValidations;
  }

  set(fieldName, validationRule = {}) {
    if (Array.isArray(fieldName)) {
      this.customValidations = fieldName;
    } else {
      const index = this.customValidations.findIndex(
        ({ key }) => key === fieldName
      );
      if (~index) {
        this.customValidations[index] = Object.assign({}, validationRule);
      } else {
        this.customValidations = [
          Object.assign({ key: fieldName }, validationRule)
        ];
      }
    }
  }
}

function install(app, customRules = {}) {
  globalValidationRules = Object.assign({}, defaultRules, customRules);
}

const $validator = {
  install
};

const useValidator = () => new UiValidator();

export default $validator;
export { install, useValidator };
