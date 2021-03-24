- `$validate(formData, customFieldset)`

  ```ts
  interface VueInstance {
    $validate(formData: object, customFieldset?: string[]);
  }
  ```

| Param            | Type   | Default | Description                |
| ---------------- | ------ | ------- | -------------------------- |
| `formData`       | object | `{}`    | 一组表单数据对象           |
| `customFieldset` | array  | `[]`    | 可选。需要验证的字段名称。 |

- **BalmUI 验证器规则** 格式：

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

- 在 vue 组件中的用法：

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

| Result          | Type    | Description                         |
| --------------- | ------- | ----------------------------------- |
| `valid`         | boolean | 验证结果                            |
| `validFields`   | array   | 通过验证的字段                      |
| `invalidFields` | array   | 未通过验证的字段                    |
| `message`       | string  | 第一个未通过验证的字段提示语        |
| `messages`      | array   | 所有未通过验证的字段提示语          |
| `validMsg`      | object  | 提示语对象化（格式类似 `formData`） |

> 提示：`validMsg` 可以和 `<ui-textfield-helper>`/`<ui-select-helper>` 一起使用来触发 `<ui-textfield>`/`<ui-select>` 的无效输入样式

- 验证动态表单

  - `$validations.clear()`
  - `$validations.get(fieldName)`
  - `$validations.set(fieldName, validationRule)`
  - `$validations.set(validationRules)`

  > - <del>`$resetValidations()`</del> is deprecated in 8.17.0
  > - <del>`$setValidations()`</del> is deprecated in 8.23.0

  ```ts
  interface BalmUIValidationRule {
    label: string;
    validator: string;
    customRule?: {
      validate(fieldValue: any, formData: object): boolean;
      message: string;
    };
  }

  type BalmUICustomValidationsObject = {
    [fieldName: string]: BalmUIValidationRule;
  };

  // New in 8.23.0
  interface BalmUIValidations {
    clear(): void;
    get(
      fieldName?: string
    ): BalmUICustomValidationsObject | BalmUIValidationRule; // 显示当前已设置的验证规则
    set(fieldName: string, validationRule: BalmUIValidationRule): void;
    set(validationRules: BalmUICustomValidationsObject): void;
  }

  interface VueInstance {
    $validations: BalmUIValidations;
  }
  ```

| Param         | Type   | Default | Description                                          |
| ------------- | ------ | ------- | ---------------------------------------------------- |
| `fieldName`   | string | `''`    | `formData` 的一个字段名称（BalmUI 验证器规则的 key） |
| `validation`  | object | `{}`    | 一个验证规则（BalmUI 验证器规则的 value）            |
| `validations` | object | `{}`    | 详见上方 BalmUI 验证器规则                           |

- 动态表单验证方式：

  - 1. 使用 `computed`

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

  - 2. 使用 `$validate` 的 `customFieldset` 参数

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

  - 3. 使用 `$validations.set`

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
