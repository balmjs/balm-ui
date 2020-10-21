```js
$validate(formData, customFieldset);
```

| Param            | Type   | Default | Description                                   |
| ---------------- | ------ | ------- | --------------------------------------------- |
| `formData`       | object | `{}`    | Mandatory. A form data object.                |
| `customFieldset` | array  | `[]`    | Optional. The field names of the validations. |

- **BalmUI validator rules** format:

```js
{
  fieldName1: {
    validate(fieldValue, formData) {
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
const validations = {
  fieldName1: {
    label: 'Field Label1',
    validator: 'required, customRule1',
    customRule1: {
      validate(fieldValue, formData) {
        // Validation method
        return true;
      },
      message: 'Invalid format'
    }
    // customRule2: {}
  }
  // fieldName2: {}
};

export default {
  // Define validator
  validations,
  data() {
    return {
      formData: {
        fieldName: ''
      }
    };
  },
  methods: {
    onSubmit() {
      let {
        valid,
        validFields,
        invalidFields,
        message,
        messages,
        validMsg
      } = this.$validate(this.formData);
    }
  }
};
```

| Result          | Type    | Description                                            |
| --------------- | ------- | ------------------------------------------------------ |
| `valid`         | boolean | The validator result.                                  |
| `validFields`   | array   | Valid fields.                                          |
| `invalidFields` | array   | Invalid fields.                                        |
| `message`       | string  | The message of the first invalid field.                |
| `messages`      | array   | The messages of all invalid fields.                    |
| `validMsg`      | object  | The messages as an object. (Same format as `formData`) |

> NOTE: `validMsg` can be used with `<ui-textfield-helper>`/`<ui-select-helper>` to trigger the `<ui-textfield>`/`<ui-select>` invalid styling

- Set validations for the dynamic form

```js
// New in 6.12.0
$setValidations(fieldName, validationRule);
$setValidations(validationRules);
```

| Param         | Type   | Default | Description                                               |
| ------------- | ------ | ------- | --------------------------------------------------------- |
| `fieldName`   | string | `''`    | A field name of the formdata. (BalmUI validator rule key) |
| `validation`  | object | `{}`    | A validation. (BalmUI validator rule value)               |
| `validations` | object | `{}`    | (See) BalmUI validator rules.                             |

```js
// New in 7.4.0
$resetValidations();
```

- For the dynamic form verification:

  - 1. using `computed`

    ```js
    export default {
      data() {
        return {
          step: 1,
          formData: {
            username: '',
            password: ''
          }
        };
      },
      computed: {
        validations() {
          return this.step === 1
            ? {
                username: {
                  label: 'Username',
                  validator: 'required'
                }
              }
            : {
                password: {
                  label: 'Password',
                  validator: 'required'
                }
              };
        }
      },
      methods: {
        onSubmit() {
          let result = this.$validate(this.formData);
          // ...
        }
      }
    };
    ```

  - 2. using `customFieldset` for `$validate`

    ```js
    export default {
      validations: {
        username: {
          label: 'Username',
          validator: 'required'
        },
        password: {
          label: 'Password',
          validator: 'required'
        }
      },
      data() {
        return {
          step: 1,
          formData: {
            username: '',
            password: ''
          }
        };
      },
      methods: {
        onSubmit() {
          let customFieldset = this.step === 1 ? ['username'] : ['password'];
          let result = this.$validate(this.formData, customFieldset);
          // ...
        }
      }
    };
    ```

  - 3. using `$resetValidations` and `$setValidations`

    ```js
    export default {
      data() {
        return {
          step: 1,
          formData: {
            username: '',
            password: ''
          }
        }
      },
      methods: {
        onSubmit() {
          this.$resetValidations();

          let customValidations =
            this.step === 1
              ? {
                  username: {
                    label: 'Username',
                    validator: 'required'
                  }
                }
              : {
                  password: {
                    label: 'Password',
                    validator: 'required'
                  }
                };
          this.$setValidations(customValidations);

          let result = this.$validate(this.formData);
          // ...
      }
    };
    ```
