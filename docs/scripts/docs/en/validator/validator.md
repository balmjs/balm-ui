```js
const balmUI = useValidator();
```

```js
balmUI.validate(formData, customFieldset);
```

| Param            | Type   | Default | Description                                   |
| ---------------- | ------ | ------- | --------------------------------------------- |
| `formData`       | object | `{}`    | Mandatory. A form data object.                |
| `customFieldset` | array  | `[]`    | Optional. The field names of the validations. |

- **BalmUI validator rules** format:

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
// Define validator
const validations = {
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
};
```

- using Composable API

  ```js
  import { reactive, toRefs } from 'vue';
  import { useValidator } from 'balm-ui';

  const state = reactive({
    formData: {
      fieldName: ''
    },
    validMsg: {
      fieldName: ''
    }
  });

  function useActions() {
    const balmUI = useValidator();

    function onSubmit() {
      let {
        valid,
        validFields,
        invalidFields,
        messages,
        message,
        validMsg
      } = balmUI.validate(state.formData);

      state.validMsg = validMsg;
    }

    return {
      onSubmit
    };
  }

  export default {
    setup() {
      return {
        validations,
        ...toRefs(state),
        ...useActions()
      };
    }
  };
  ```

- using Legacy API

  ```js
  import { useValidator } from 'balm-ui';

  export default {
    data() {
      return {
        validations,
        formData: {
          fieldName: ''
        },
        validMsg: {
          fieldName: ''
        }
      };
    },
    created() {
      this.balmUI = useValidator();
    },
    methods: {
      onSubmit() {
        let {
          valid,
          validFields,
          invalidFields,
          messages,
          message,
          validMsg
        } = this.balmUI.validate(this.formData);

        this.validMsg = validMsg;
      }
    }
  };
  ```

| Result          | Type    | Description                                            |
| --------------- | ------- | ------------------------------------------------------ |
| `valid`         | boolean | The validator result.                                  |
| `validFields`   | array   | Valid fields.                                          |
| `invalidFields` | array   | Invalid fields.                                        |
| `messages`      | array   | The messages of all invalid fields.                    |
| `message`       | string  | The message of the first invalid field.                |
| `validMsg`      | object  | The messages as an object. (Same format as `formData`) |

- Set validations for the dynamic form

```js
// New in 6.12.0
balmUI.setValidations(fieldName, validationRule);
balmUI.setValidations(validationRules);
```

| Param         | Type   | Default | Description                                               |
| ------------- | ------ | ------- | --------------------------------------------------------- |
| `fieldName`   | string | `''`    | A field name of the formdata. (BalmUI validator rule key) |
| `validation`  | object | `{}`    | A validation. (BalmUI validator rule value)               |
| `validations` | object | `{}`    | (See) BalmUI validator rules.                             |

```js
// New in 7.4.0
balmUI.resetValidations();
```
