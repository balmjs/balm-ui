```js
$validate(formData, customLocalRules);
```

| Param            | Type     | Default | Description                       |
| ---------------- | -------- | ------- | --------------------------------- |
| formData         | `Object` | `{}`    | Mandatory. A form data object.    |
| customLocalRules | `Object` | `{}`    | Optional. BalmUI validator rules. |

- BalmUI validator rules format:

```js
{
  fieldName1: {
    validate(fieldValue1, formData) {
      // Validation method
      return true;
    },
    message: '%s is required'
  },
  // More rules
  // fieldName2: { ... }
}
```

- Usage in a vue component:

```js
export default {
  // Define validator
  validations: {
    fieldName: {
      label: 'Field Label',
      validator: 'required, customRule1',
      customRule1: {
        validate(fieldValue, formData) {
          // Validation method
          return true;
        },
        message: 'Invalid format'
      }
      // customRule2: { ... }
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
      let {
        isValid,
        valid,
        invalid,
        messages,
        message,
        errorMsg
      } = this.$validate(this.formData);

      this.errorMsg = errorMsg;
    }
  }
};
```

| Result   | Type      | Description                                            |
| -------- | --------- | ------------------------------------------------------ |
| isValid  | `Boolean` | The validator result.                                  |
| valid    | `Array`   | Valid fields.                                          |
| invalid  | `Array`   | Invalid fields.                                        |
| messages | `Array`   | The messages of all invalid fields.                    |
| message  | `String`  | The message of the first invalid field.                |
| errorMsg | `Object`  | The messages as an object. (Same format as `formData`) |
