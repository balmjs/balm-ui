<template>
  <div :class="[$tt('body1'), 'demo--validator']">
    <section class="hero plugin">
      <h2 :class="$tt('headline4')">
        $validate
      </h2>
    </section>

    <div :class="$tt('body2')">
      <h4 :class="$tt('headline4')">1. Example</h4>
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
        <p class="form-item">
          <ui-textfield id="email"
            v-model="formData.email"
            helptextId="email-helper-text">Email</ui-textfield>
          <ui-textfield-helptext id="email-helper-text" :visible="errorMsg.email">
            {{ errorMsg.email }}
          </ui-textfield-helptext>
        </p>
        <p class="form-actions">
          <ui-button raised @click="submit">Submit</ui-button>
        </p>
      </fieldset>
    </div>
  </div>
</template>

<script>
export default {
  validations: {
    mobile: {
      label: 'Mobile',
      validator: 'required, mobile'
    },
    password: {
      label: 'Password',
      validator: 'required, password',
      password: {
        validate(value) {
          return /^\w{6,8}$/.test(value);
        },
        message: 'Invalid password'
      }
    },
    repassword: {
      label: 'Repeat Password',
      validator: 'required, password, repassword'
    },
    email: {
      label: 'E-mail',
      validator: 'required, email'
    }
  },
  data() {
    return {
      formData: {
        mobile: '',
        password: '',
        repassword: '',
        email: ''
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
</script>
