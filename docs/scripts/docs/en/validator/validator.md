```js
import { useValidator } from 'balm-ui';
// OR
// import { useValidator } from 'balm-ui/plugins/validator';

const validator = useValidator();
```

```js
validator.validate(formData, customFieldset);
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
// Define validator
const validations = {
  fieldName1: {
    label: 'Field Label',
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
```

- using Composable API

  ```js
  import { reactive, toRefs } from 'vue';
  import { useValidator } from 'balm-ui';

  // const validations = ...

  const state = reactive({
    formData: {
      fieldName: ''
    }
  });

  export default {
    setup() {
      const validator = useValidator();

      return {
        validator,
        validations,
        ...toRefs(state)
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
        } = this.validator.validate(state.formData);
      }
    }
  };
  ```

- using Legacy API

  ```js
  import { useValidator } from 'balm-ui';

  // const validations = ...

  export default {
    data() {
      return {
        validator: useValidator(),
        validations,
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
        } = this.validator.validate(this.formData);
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

```ts
// New in 9.15.0
validator.clear();
validator.get(fieldName?: string); // show current validation rule(s)
validator.set(fieldName: string, validationRule: object);
validator.set(validations: object);
```

> - <del>`validator.resetValidations()`</del> is deprecated in 8.17.0
> - <del>`validator.setValidations()`</del> is deprecated in 9.15.0

| Param         | Type   | Default | Description                                               |
| ------------- | ------ | ------- | --------------------------------------------------------- |
| `fieldName`   | string | `''`    | A field name of the formdata. (BalmUI validator rule key) |
| `validation`  | object | `{}`    | A validation. (BalmUI validator rule value)               |
| `validations` | object | `{}`    | (See) BalmUI validator rules.                             |

- For the dynamic form verification:

  - 1. using `computed`

    ```js
    import { useValidator } from 'balm-ui';

    export default {
      data() {
        return {
          validator: useValidator(),
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
          let result = this.validator.validate(this.formData);
          // ...
        }
      }
    };
    ```

  - 2. using `customFieldset` for `validator.validate`

    ```js
    import { useValidator } from 'balm-ui';

    const validations = {
      username: {
        label: 'Username',
        validator: 'required'
      },
      password: {
        label: 'Password',
        validator: 'required'
      }
    };

    export default {
      data() {
        return {
          validator: useValidator(),
          validations,
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
          let result = this.validator.validate(this.formData, customFieldset);
          // ...
        }
      }
    };
    ```

  - 3. using `validator.setValidations`

    ```js
    import { useValidator } from 'balm-ui';

    export default {
      data() {
        return {
          validator: useValidator(),
          step: 1,
          formData: {
            username: '',
            password: ''
          }
        }
      },
      methods: {
        onSubmit() {
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
          this.validator.set(customValidations);

          let result = this.validator.validate(this.formData);
          // ...
      }
    };
    ```
