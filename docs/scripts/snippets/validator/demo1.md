```html
<ui-form item-margin-bottom="10">
  <ui-form-field class="form-item">
    <ui-textfield v-model="formData.mobile">Mobile</ui-textfield>
  </ui-form-field>
  <ui-form-field class="form-item">
    <ui-textfield v-model="formData.password" input-type="password">
      Password
    </ui-textfield>
  </ui-form-field>
  <ui-form-field class="form-item">
    <ui-textfield v-model="formData.repassword" input-type="password">
      Repeat Password
    </ui-textfield>
  </ui-form-field>
  <ui-form-field>
    <ui-select
      v-model="formData.gender"
      :options="genderOptions"
      default-label="Unknown"
    >
      Gender
    </ui-select>
  </ui-form-field>

  <ui-alert v-if="message" state="error">{{ message }}</ui-alert>

  <ui-form-field class="form-item form-actions">
    <ui-button raised @click="onSubmit">Submit</ui-button>
  </ui-form-field>
</ui-form>
```

```js
import { useValidator } from 'balm-ui';

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
      message: ''
    };
  },
  methods: {
    onSubmit() {
      let result = this.balmUI.validate(this.formData);
      let { valid, message } = result;
      this.message = message;

      if (valid) {
        this.$toast('ok');
      }
    }
  }
};
```
