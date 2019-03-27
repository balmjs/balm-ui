```js
$validate(formData, customFieldset);
```

| Param            | Type   | Default | Description                                   |
| ---------------- | ------ | ------- | --------------------------------------------- |
| `formData`       | object | `{}`    | Mandatory. A form data object.                |
| `customFieldset` | array  | `[]`    | Optional. The field names of the validations. |

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

| Result     | Type    | Description                                            |
| ---------- | ------- | ------------------------------------------------------ |
| `isValid`  | boolean | The validator result.                                  |
| `valid`    | array   | Valid fields.                                          |
| `invalid`  | array   | Invalid fields.                                        |
| `messages` | array   | The messages of all invalid fields.                    |
| `message`  | string  | The message of the first invalid field.                |
| `errorMsg` | object  | The messages as an object. (Same format as `formData`) |
