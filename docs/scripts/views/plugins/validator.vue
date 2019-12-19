<template>
  <div :class="[$tt('body1'), 'demo--validator']">
    <header class="hero plugin">
      <h3 :class="$tt('headline3')">$validate</h3>
    </header>

    <ui-toc-affix withoutCss></ui-toc-affix>

    <div :class="$tt('body2')">
      <h4 v-anchor:id="'ui-usage'" :class="$tt('headline4')">0. Usage</h4>
      <ui-markdown :text="code[0]"></ui-markdown>

      <h4 v-anchor:id="'ui-demo'" :class="$tt('headline4')">1. Demo</h4>
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
      <ui-accordion>
        <ui-markdown :code="code[1]"></ui-markdown>
      </ui-accordion>

      <h4 v-anchor:id="'ui-apis'" :class="$tt('headline4')">2. APIs</h4>
      <ui-apidocs name="validator" type="plugin"></ui-apidocs>
    </div>
  </div>
</template>

<script>
import snippets from '@/mixins/snippets';

export default {
  metaInfo: {
    titleTemplate: '%s - Validator'
  },
  mixins: [snippets],
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
  created() {
    this.showCode('validator');
  },
  methods: {
    submit() {
      let result = this.$validate(this.formData);
      let { valid, validMsg } = result;
      this.validMsg = validMsg;

      console.log(result);

      if (valid) {
        console.log('gg');
        this.$toast('gg');
      }
    }
  }
};
</script>
