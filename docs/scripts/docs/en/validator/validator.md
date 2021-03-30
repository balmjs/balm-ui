- Validation Method

  ```ts
  interface VueInstance {
    $validate(
      formData: { [fieldName: string]: any },
      customFieldset?: string[]
    ): BalmUIValidationResult;
  }
  ```

| Param            | Type   | Default | Description                                   |
| ---------------- | ------ | ------- | --------------------------------------------- |
| `formData`       | object | `{}`    | Mandatory. A form data object.                |
| `customFieldset` | array  | `[]`    | Optional. The field names of the validations. |

- Validation Result

  ```ts
  interface BalmUIValidationResult {
    valid: boolean;
    validFields: string[];
    invalidFields: string[];
    message: string;
    messages: string[];
    validMsg: { [fieldName: string]: string };
  }
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

- Validation Rule

  ```ts
  interface BalmUIValidationRule {
    label?: string;
    validator: string; // 'customRule1, customRule2, ...'
    ...customRule?: {
      validate(fieldValue: any, formData: { [fieldName: string]: any }): boolean;
      message: string;
    };
  }

  type BalmUICustomValidations = {
    [fieldName: string]: BalmUIValidationRule;
  };
  ```

## 2.1 Default Validation

```js
// Custom local validation rules
const validations = {
  fieldName1: {
    label: 'Field Label',
    validator: 'required, customRule1',
    customRule1: {
      validate(fieldValue, formData) {
        // Validation method
        return true;
      },
      message: '%s is required' // The '%s' symbol will automatically replace the label text
    }
    // More custom rules
    // customRule2: { ... }
  }
  // More form fields
  // fieldName2: {}
};

export default {
  validations,
  data() {
    return {
      formData: {
        fieldName1: '',
        fieldName2: ''
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

## 2.2 Dynamic Form Validation

```ts
// New in 8.23.0
interface BalmUIValidations {
  clear(): void;
  get(fieldName?: string): BalmUICustomValidations | BalmUIValidationRule; // show current validation rule(s)
  set(fieldName: string, validationRule: BalmUIValidationRule): void;
  set(validations: BalmUICustomValidations): void;
}

interface VueInstance {
  $validations: BalmUIValidations;
}
```

> - <del>`$resetValidations()`</del> is deprecated in 8.17.0
> - <del>`$setValidations()`</del> is deprecated in 8.23.0

| Param         | Type   | Default | Description                                                 |
| ------------- | ------ | ------- | ----------------------------------------------------------- |
| `fieldName`   | string | `''`    | A field name of the `formData`. (BalmUI validator rule key) |
| `validation`  | object | `{}`    | A validation. (BalmUI validator rule value)                 |
| `validations` | object | `{}`    | (See) BalmUI validator rules.                               |

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

- 2. using `customFieldset`

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

- 3. using `$validations.set` for validations

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
    beforeDestroy() {
      this.$validations.clear(); // IMPORTANT!!!
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
        this.$validations.set(customValidations);

        let result = this.$validate(this.formData);
        // ...
    }
  };
  ```
