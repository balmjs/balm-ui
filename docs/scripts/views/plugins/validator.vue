<template>
  <ui-page-structure type="plugin" name="validator" demoCount="1" withoutCss>
    <template #hero>
      <h3 :class="$tt('headline3')">$validate</h3>
    </template>

    <!-- Content -->
    <fieldset>
      <legend>Form Area</legend>
      <ui-form-field block class="form-item">
        <ui-textfield
          id="mobile"
          v-model="formData.mobile"
          helperTextId="mobile-helper-text"
          >Mobile</ui-textfield
        >
        <ui-textfield-helper
          id="mobile-helper-text"
          :validMsg="validMsg.mobile"
        ></ui-textfield-helper>
      </ui-form-field>
      <ui-form-field block class="form-item">
        <ui-textfield
          inputType="password"
          id="password"
          v-model="formData.password"
          helperTextId="password-helper-text"
          >Password</ui-textfield
        >
        <ui-textfield-helper
          id="password-helper-text"
          :validMsg="validMsg.password"
        ></ui-textfield-helper>
      </ui-form-field>
      <ui-form-field block class="form-item">
        <ui-textfield
          inputType="password"
          id="repassword"
          v-model="formData.repassword"
          helperTextId="repassword-helper-text"
          >Repeat Password</ui-textfield
        >
        <ui-textfield-helper
          id="repassword-helper-text"
          :validMsg="validMsg.repassword"
        ></ui-textfield-helper>
      </ui-form-field>
      <div class="form-item form-actions">
        <ui-button raised @click="submit">Submit</ui-button>
      </div>
    </fieldset>
    <ui-snippet :code="$store.demos[1]"></ui-snippet>
  </ui-page-structure>
</template>

<script>
export default {
  metaInfo: {
    titleTemplate: '%s - Validator'
  },
  validations: {
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
  },
  data() {
    return {
      formData: {
        mobile: '',
        password: '',
        repassword: ''
      },
      validMsg: {}
    };
  },
  methods: {
    submit() {
      let result = this.$validate(this.formData);
      let { valid, validMsg } = result;
      this.validMsg = validMsg;

      console.log(result);

      if (valid) {
        this.$toast('gg');
      }
    }
  }
};
</script>
