<template>
  <docs-page type="plugin" name="validator" demo-count="1" without-css>
    <template #hero>
      <h1 :class="$tt('headline1')">$validate</h1>
    </template>

    <!-- Content -->
    <ui-form>
      <legend>Form Area</legend>
      <ui-form-field class="form-item">
        <ui-textfield
          id="mobile"
          v-model="formData.mobile"
          helper-text-id="mobile-helper-text"
          >Mobile</ui-textfield
        >
        <ui-textfield-helper
          id="mobile-helper-text"
          v-model="validMsg.mobile"
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
          v-model="validMsg.password"
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
          v-model="validMsg.repassword"
        ></ui-textfield-helper>
      </ui-form-field>
      <ui-form-field class="form-item form-actions">
        <ui-button raised @click="submit">Submit</ui-button>
      </ui-form-field>
    </ui-form>
    <ui-snippet :code="$store.demos[1]"></ui-snippet>
  </docs-page>
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
      let { valid, validMsg } = this.$validate(this.formData);
      this.validMsg = validMsg;

      if (valid) {
        this.$toast('gg');
      }
    }
  }
};
</script>
