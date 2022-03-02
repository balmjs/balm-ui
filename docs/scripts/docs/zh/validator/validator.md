```js
import { useValidator } from 'balm-ui';
// 或
// import { useValidator } from 'balm-ui/plugins/validator';

const validator = useValidator();
```

- 验证方法

  ```ts
  interface BalmUIValidator {
    validate(
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

> 提示：`validMsg` 可以配合 `<ui-textfield-helper>`/`<ui-select-helper>` 一起使用来触发 `<ui-textfield>`/`<ui-select>` 错误提示的样式

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

  type BalmUIValidations = {
    [fieldName: string]: BalmUIValidationRule;
  };
  ```

## 2.1 默认验证

> ⚠️ 不支持 `<script setup>`

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
```

- Composition API

  ```js
  import { reactive, toRefs } from 'vue';
  import { useValidator } from 'balm-ui';

  // const validations = ...

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

  // const validations = ...

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

## 2.2 动态表单验证

```ts
// New in 9.15.0
interface BalmUIValidator {
  clear(): void;
  get(fieldName?: string): BalmUIValidations | BalmUIValidationRule; // 显示当前已设置的验证规则
  set(fieldName: string, validationRule: BalmUIValidationRule): void;
  set(validations: BalmUIValidations): void;
}
```

| Param         | Type   | Default | Description                                          |
| ------------- | ------ | ------- | ---------------------------------------------------- |
| `fieldName`   | string | `''`    | `formData` 的一个字段名称（BalmUI 验证器规则的 key） |
| `validation`  | object | `{}`    | 一个验证规则（BalmUI 验证器规则的 value）            |
| `validations` | object | `{}`    | 详见上方 BalmUI 验证器规则                           |

- 1. 使用 `computed`

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

- 2. 使用 `customFieldset`

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

- 3. 使用 `validator.set` 设置自定义验证规则

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
