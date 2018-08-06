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
          <ui-textfield-helptext id="mobile-helper-text">
            {{ validMsg.mobile }}
          </ui-textfield-helptext>
        </p>
        <p class="form-item">
          <ui-textfield type="password" id="password" v-model="formData.password">Password</ui-textfield>
        </p>
        <p class="form-item">
          <ui-textfield type="password" id="repassword" v-model="formData.repassword">Repeat Password</ui-textfield>
        </p>
        <p class="form-item">
          <ui-textfield id="email" v-model="formData.email">Email</ui-textfield>
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
      validator: 'required, password'
    },
    repassword: {
      label: '联系电话',
      validator: 'required, password, repassword'
    },
    email: {
      label: '省',
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
      validMsg: {}
    };
  },
  methods: {
    submit() {
      let result = this.$validate(this.formData);
      console.log(result);
    }
  }
};
</script>

