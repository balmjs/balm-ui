```html
<ui-form item-margin-bottom="10">
  <ui-form-field class="form-item">
    <ui-textfield v-model="formData.mobile" helper-text-id="mobile-helper-text">
      Mobile
    </ui-textfield>
    <ui-textfield-helper
      id="mobile-helper-text"
      v-model:validMsg="validMsg.mobile"
    ></ui-textfield-helper>
  </ui-form-field>
  <ui-form-field class="form-item">
    <ui-textfield
      v-model="formData.password"
      input-type="password"
      helper-text-id="password-helper-text"
    >
      Password
    </ui-textfield>
    <ui-textfield-helper
      id="password-helper-text"
      v-model:validMsg="validMsg.password"
    ></ui-textfield-helper>
  </ui-form-field>
  <ui-form-field class="form-item">
    <ui-textfield
      v-model="formData.repassword"
      input-type="password"
      helper-text-id="repassword-helper-text"
    >
      Repeat Password
    </ui-textfield>
    <ui-textfield-helper
      id="repassword-helper-text"
      v-model:validMsg="validMsg.repassword"
    ></ui-textfield-helper>
  </ui-form-field>
  <ui-form-field>
    <ui-select
      v-model="formData.gender"
      :options="genderOptions"
      default-label="Unknown"
      helper-text-id="gender-helper-text"
    >
      Gender
    </ui-select>
    <ui-select-helper
      id="gender-helper-text"
      v-model:validMsg="validMsg.gender"
    ></ui-select-helper>
  </ui-form-field>

  <ui-form-field class="form-item form-actions">
    <ui-button raised @click="onSubmit">Submit</ui-button>
  </ui-form-field>
</ui-form>
```

```js
import { useValidator } from 'balm-ui';

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
  },
  gender: {
    label: 'Gender',
    validator: 'required'
  }
};

const genderOptions = [
  {
    label: 'Male',
    value: 'M'
  },
  {
    label: 'Female',
    value: 'F'
  }
];

export default {
  data() {
    return {
      balmUI: useValidator(),
      validations,
      genderOptions,
      formData: {
        mobile: '',
        password: '',
        repassword: '',
        gender: ''
      },
      validMsg: {}
    };
  },
  methods: {
    onSubmit() {
      let result = this.balmUI.validate(this.formData);
      let { valid, validMsg } = result;
      this.validMsg = validMsg;

      if (valid) {
        this.$toast('gg');
      }
    }
  }
};
```
