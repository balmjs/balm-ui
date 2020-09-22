<template>
  <div class="page--test">
    <ui-form>
      <legend>Form Area</legend>
      <ui-form-field class="form-item">
        <ui-textfield id="mobile" v-model="formData.mobile" v-model:valid-msg="validMsg.mobile">
          Mobile
          <template #helper-text>{{ validMsg.mobile }}</template>
        </ui-textfield>
      </ui-form-field>
      <ui-form-field class="form-item">
        <ui-textfield
          id="password"
          v-model="formData.password"
          v-model:valid-msg="validMsg.password"
          input-type="password"
        >Password</ui-textfield>
      </ui-form-field>
      <ui-form-field class="form-item">
        <ui-textfield
          id="repassword"
          v-model="formData.repassword"
          v-model:valid-msg="validMsg.repassword"
          input-type="password"
        >Repeat Password</ui-textfield>
      </ui-form-field>
      <ui-form-field class="form-item form-actions">
        <ui-button raised @click="submit">Submit</ui-button>
      </ui-form-field>
    </ui-form>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import { useValidator } from 'balm-ui';

export default {
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
  setup() {
    let validator = useValidator();

    return {
      validator
    };
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
      let result = this.validator.validate(this.formData);
      let { valid, validMsg } = result;
      this.validMsg = validMsg;

      console.log(result);

      if (valid) {
        console.log('gg');
      }
    }
  }
};
</script>

<style></style>
