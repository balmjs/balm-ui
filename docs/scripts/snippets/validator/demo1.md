```html
<fieldset>
  <legend>Form Area</legend>
  <p class="form-item">
    <ui-textfield id="mobile"
      v-model="formData.mobile"
      helptextId="mobile-helper-text">Mobile</ui-textfield>
    <ui-textfield-helptext id="mobile-helper-text" :visible="errorMsg.mobile">
      {{ errorMsg.mobile }}
    </ui-textfield-helptext>
  </p>
  <p class="form-item">
    <ui-textfield type="password"
      id="password"
      v-model="formData.password"
      helptextId="password-helper-text">Password</ui-textfield>
    <ui-textfield-helptext id="password-helper-text" :visible="errorMsg.password">
      {{ errorMsg.password }}
    </ui-textfield-helptext>
  </p>
  <p class="form-item">
    <ui-textfield type="password"
      id="repassword"
      v-model="formData.repassword"
      helptextId="repassword-helper-text">Repeat Password</ui-textfield>
    <ui-textfield-helptext id="repassword-helper-text" :visible="errorMsg.repassword">
      {{ errorMsg.repassword }}
    </ui-textfield-helptext>
  </p>
  <p class="form-actions">
    <ui-button raised @click="submit">Submit</ui-button>
  </p>
</fieldset>
```

```js
export default {
  validations: {
    mobile: {
      label: 'Mobile',
      validator: 'required, mobile'
    },
    password: {
      label: 'Password',
      validator: 'required, password'
    },
    repassword: {
      label: 'Repeat Password',
      validator: 'required, password, repassword',
      repassword: {
        validate(value, data) {
          return value === data.password;
        },
        message: 'repassword !== password'
      }
    }
  },
  data() {
    return {
      formData: {
        mobile: '',
        password: '',
        repassword: ''
      },
      errorMsg: {}
    };
  },
  methods: {
    submit() {
      let result = this.$validate(this.formData);
      let { isValid, errorMsg } = result;
      this.errorMsg = errorMsg;

      console.log(result);

      if (isValid) {
        console.log('gg');
      }
    }
  }
};
```
