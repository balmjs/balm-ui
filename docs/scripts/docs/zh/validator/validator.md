- 验证方法

  ```ts
  interface VueInstance {
    $validate(
      formData: { [fieldName: string]: any },
      customFieldset?: string[]
    ): BalmUIValidationResult;
  }
  ```

| Param            | Type   | Default | Description                |
| ---------------- | ------ | ------- | -------------------------- |
| `formData`       | object | `{}`    | 一组表单数据对象           |
| `customFieldset` | array  | `[]`    | 可选。需要验证的字段名称。 |

- 验证结果

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

| Result          | Type    | Description                         |
| --------------- | ------- | ----------------------------------- |
| `valid`         | boolean | 验证结果                            |
| `validFields`   | array   | 通过验证的字段                      |
| `invalidFields` | array   | 未通过验证的字段                    |
| `message`       | string  | 第一个未通过验证的字段提示语        |
| `messages`      | array   | 所有未通过验证的字段提示语          |
| `validMsg`      | object  | 提示语对象化（格式类似 `formData`） |

> 提示：`validMsg` 可以和 `<ui-textfield-helper>`/`<ui-select-helper>` 一起使用来触发 `<ui-textfield>`/`<ui-select>` 的无效输入样式

- 验证规则

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

## 2.1 默认验证

```js
// 自定义局部验证规则
const validations = {
  fieldName1: {
    label: 'Field Label',
    validator: 'required, customRule1',
    customRule1: {
      validate(fieldValue, formData) {
        // 验证方法
        return true;
      },
      message: '%s is required' // '%s' 符号将自动替换 label 的文本
    }
    // 更多自定义规则
    // customRule2: { ... }
  }
  // 更多表单字段
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

## 2.2 动态表单验证

```ts
// New in 8.23.0
interface BalmUIValidations {
  clear(): void;
  get(fieldName?: string): BalmUICustomValidations | BalmUIValidationRule; // 显示当前已设置的验证规则
  set(fieldName: string, validationRule: BalmUIValidationRule): void;
  set(validations: BalmUICustomValidations): void;
}

interface VueInstance {
  $validations: BalmUIValidations;
}
```

> - <del>`$resetValidations()`</del> is deprecated in 8.17.0
> - <del>`$setValidations()`</del> is deprecated in 8.23.0

| Param         | Type   | Default | Description                                          |
| ------------- | ------ | ------- | ---------------------------------------------------- |
| `fieldName`   | string | `''`    | `formData` 的一个字段名称（BalmUI 验证器规则的 key） |
| `validation`  | object | `{}`    | 一个验证规则（BalmUI 验证器规则的 value）            |
| `validations` | object | `{}`    | 详见上方 BalmUI 验证器规则                           |

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

- 2. 使用 `customFieldset`

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

- 3. 使用 `$validations.set` 设置自定义验证规则

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
