```html
<ui-form>
  <legend>Form Area</legend>
  <ui-form-field class="form-item">
    <ui-textfield
      id="mobile"
      v-model="formData.mobile"
      helper-text-id="mobile-helper-text"
      >Mobile
    </ui-textfield>
    <ui-textfield-helper
      id="mobile-helper-text"
      v-model:validMsg="validMsg.mobile"
    ></ui-textfield-helper>
  </ui-form-field>
  <ui-form-field class="form-item">
    <ui-textfield
      id="password"
      v-model="formData.password"
      input-type="password"
      helper-text-id="password-helper-text"
      >Password</ui-textfield
    >
    <ui-textfield-helper
      id="password-helper-text"
      v-model:validMsg="validMsg.password"
    ></ui-textfield-helper>
  </ui-form-field>
  <ui-form-field class="form-item">
    <ui-textfield
      id="repassword"
      v-model="formData.repassword"
      input-type="password"
      helper-text-id="repassword-helper-text"
      >Repeat Password</ui-textfield
    >
    <ui-textfield-helper
      id="repassword-helper-text"
      v-model:validMsg="validMsg.repassword"
    ></ui-textfield-helper>
  </ui-form-field>
  <ui-form-field class="form-item form-actions">
    <ui-button raised @click="onSubmit">Submit</ui-button>
  </ui-form-field>
</ui-form>
```

```js
const validations = {
  mobile: {
    label: 'Mobile',
    validator: 'required, mobile'
  },
  password: {
    label: 'Password',
    validator: 'required, password, minRule, maxRule',
    minRule: {
      validate(value) {
        return value.trim().length >= 6;
      },
      message: '%s minLength >= 6'
    },
    maxRule: {
      validate(value) {
        return value.trim().length <= 8;
      },
      message: '%s maxLength <= 8'
    }
  },
  repassword: {
    label: 'Repeat Password',
    validator: 'required, password, repasswordRule',
    repasswordRule: {
      validate(value, data) {
        return value === data.password;
      },
      message: 'repassword !== password'
    }
  }
};
```

- using Composable API

  ```js
  import { reactive, toRefs } from 'vue';
  import { useValidator } from 'balm-ui';

  // const validations = ...

  const state = reactive({
    formData: {
      mobile: '',
      password: '',
      repassword: ''
    },
    validMsg: {}
  });

  export default {
    setup() {
      const balmUI = useValidator();

      return {
        balmUI,
        validations,
        ...toRefs(state)
      };
    },
    methods: {
      onSubmit() {
        let result = this.balmUI.validate(state.formData);
        let { valid, validMsg } = result;
        state.validMsg = validMsg;

        console.log(result);

        if (valid) {
          this.$toast('gg');
        }
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
        balmUI: useValidator(),
        validations,
        formData: {
          mobile: '',
          password: '',
          repassword: ''
        },
        validMsg: {}
      };
    },
    setup() {
      const balmUI = useValidator();

      return {
        balmUI,
        validations,
        ...toRefs(state)
      };
    },
    methods: {
      onSubmit() {
        let result = this.balmUI.validate(this.formData);
        let { valid, validMsg } = result;
        this.validMsg = validMsg;

        console.log(result);

        if (valid) {
          this.$toast('gg');
        }
      }
    }
  };
  ```
