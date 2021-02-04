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

  <ui-alert v-if="messages.length" state="error">
    <ul>
      <li v-for="(message, index) in messages" :key="index">{{ message }}</li>
    </ul>
  </ui-alert>

  <ui-form-field class="form-item form-actions">
    <ui-button raised @click="submit">Submit</ui-button>
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
      messages: []
    };
  },
  methods: {
    submit() {
      let result = this.$validate(this.formData);
      let { valid, messages } = result;
      this.messages = messages;

      if (valid) {
        console.log('gg');
      }
    }
  }
};
```
