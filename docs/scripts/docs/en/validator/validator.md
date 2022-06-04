```js
import { useValidator } from 'balm-ui';
// OR
// import { useValidator } from 'balm-ui/plugins/validator';

const validator = useValidator();
```

- Validation Method

  ```ts
  interface BalmUIValidator {
    validate(
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
    key: string; // field name
    label?: string;
    validator: string; // 'customRule1, customRule2, ...'
    ...customRule?: {
      validate(fieldValue: any, formData: { [fieldName: string]: any }): boolean;
      message: string | (fieldValue: any, formData: { [fieldName: string]: any }) => string;
    };
  }
  ```

## 2.1 Default Validation

> ⚠️ `<script setup>` is not supported

```js
// Custom local validation rules
const validations = [
  {
    key: 'fieldName1',
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
  // {
  //   key: 'fieldName2',
  //   validator: 'required'
  // }
];
```

- Composition API

  ```js
  import { reactive, toRefs } from 'vue';
  import { useValidator } from 'balm-ui';

  // const validations = [...]

  const state = reactive({
    formData: {
      fieldName1: '',
      fieldName2: ''
    }
  });

  export default {
    setup() {
      const validator = useValidator();

      function onSubmit() {
        const {
          valid,
          validFields,
          invalidFields,
          message,
          messages,
          validMsg
        } = validator.validate(state.formData);
      }

      return {
        validations,
        ...toRefs(state),
        onSubmit
      };
    }
  };
  ```

- Options API

  ```js
  import { useValidator } from 'balm-ui';

  // const validations = [...]

  export default {
    data() {
      return {
        validator: useValidator(),
        validations,
        formData: {
          fieldName1: '',
          fieldName2: ''
        }
      };
    },
    methods: {
      onSubmit() {
        const {
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

## 2.2 Dynamic Form Validation

```ts
// New in 9.15.0
interface BalmUIValidator {
  clear(): void;
  get(fieldName?: string): BalmUIValidationRule[] | BalmUIValidationRule; // show current validation rule(s)
  set(fieldName: string, validationRule: BalmUIValidationRule): void;
  set(validations: BalmUIValidationRule[]): void;
}
```

| Param         | Type   | Default | Description                                               |
| ------------- | ------ | ------- | --------------------------------------------------------- |
| `fieldName`   | string | `''`    | A field name of the formdata. (BalmUI validator rule key) |
| `validation`  | object | `{}`    | A validation. (BalmUI validator rule value)               |
| `validations` | object | `[]`    | (See) BalmUI validator rules.                             |

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
          ? [
              {
                key: 'username',
                label: 'Username',
                validator: 'required'
              }
            ]
          : [
              {
                key: 'password',
                label: 'Password',
                validator: 'required'
              }
            ];
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

- 2. using `customFieldset`

  ```js
  import { useValidator } from 'balm-ui';

  const validations = [
    {
      key: 'username',
      label: 'Username',
      validator: 'required'
    },
    {
      key: 'password',
      label: 'Password',
      validator: 'required'
    }
  ];

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

- 3. using `validator.set` for validations

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
            ? [
                {
                  key: 'username',
                  label: 'Username',
                  validator: 'required'
                }
              ]
            : [
                {
                  key: 'password',
                  label: 'Password',
                  validator: 'required'
                }
              ];
        this.validator.set(customValidations);

        let result = this.validator.validate(this.formData);
        // ...
    }
  };
  ```
