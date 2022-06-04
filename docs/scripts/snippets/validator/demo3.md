```html
<ui-form item-margin-bottom="10">
  <ui-form-field class="form-item">
    <ui-textfield v-model="formData.mobile" helper-text-id="mobile-helper-text">
      Mobile
    </ui-textfield>
    <ui-textfield-helper
      id="mobile-helper-text"
      v-model="validMsg.mobile"
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
      v-model="validMsg.password"
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
      v-model="validMsg.repassword"
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
      v-model="validMsg.gender"
    ></ui-select-helper>
  </ui-form-field>

  <ui-form-field class="form-item form-actions">
    <ui-button raised @click="submit">Submit</ui-button>
  </ui-form-field>
</ui-form>
```

```js
const validations = [
  {
    key: 'mobile',
    label: 'Mobile',
    validator: 'required, mobile'
  },
  {
    key: 'password',
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
  {
    key: 'repassword',
    label: 'Repeat Password',
    validator: 'required, password, repasswordRule',
    repasswordRule: {
      validate(value, data) {
        return value === data.password;
      },
      message: 'repassword !== password'
    }
  },
  {
    key: 'gender',
    label: 'Gender',
    validator: 'required'
  }
];

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
  validations,
  data() {
    return {
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
    submit() {
      let result = this.$validate(this.formData);
      let { valid, validMsg } = result;
      this.validMsg = validMsg;

      if (valid) {
        console.log('gg');
      }
    }
  }
};
```
