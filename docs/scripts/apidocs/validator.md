```js
$validate(formData, customLocalRules);
```

| Param            | Type     | Default | Description                           |
| ---------------- | -------- | ------- | ------------------------------------- |
| formData         | `Object` | `{}`    | Mandatory. A form data object.        |
| customLocalRules | `Object` | `{}`    | Optional. A validator rule of BalmUI. |

- BalmUI validator rule format:

```js
{
  fieldName: {
    validate(fieldValue, formData) {
      // Validation method
      return true;
    },
    message: '%s is required'
  }
}
```

The usage in a vue component:

```js
export default {
  // Define validator
  validations: {
    fieldName: {
      label: 'Field Label',
      validator: 'required, customValidation',
      customValidation: {
        validate(fieldValue, formData) {
          // Validation method
          return true;
        },
        message: 'Invalid format'
      }
    }
  },
  data() {
    return {
      formData: {
        fieldName: ''
      },
      errorMsg: {
        fieldName: ''
      }
    };
  },
  methods: {
    submit() {
      let result = this.$validate(this.formData);
      let { isValid, valid, invalid, messages, message, errorMsg } = result;

      this.errorMsg = errorMsg;
    }
  }
};
```

| Result   | Type      | Description                             |
| -------- | --------- | --------------------------------------- |
| isValid  | `Boolean` | The validator result.                   |
| valid    | `Array`   | Valid fields.                           |
| invalid  | `Array`   | Invalid fields.                         |
| messages | `Array`   | The messages of all invalid fields.     |
| message  | `String`  | The message of the first invalid field. |
| errorMsg | `Object`  | The messages as an object.              |
