<template>
  <docs-page type="plugin" name="validator" demo-count="3" without-css>
    <template #hero>
      <h1 :class="$tt('headline1')">useValidator();</h1>
    </template>

    <!-- Content -->
    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.1 One validation message</h6>
      <ui-form item-margin-bottom="10">
        <ui-form-field class="form-item">
          <ui-textfield v-model="formData.mobile">Mobile </ui-textfield>
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
          <ui-button raised @click="onSubmit">Submit 1</ui-button>
        </ui-form-field>
      </ui-form>
      <ui-snippet :code="$store.demos[1]"></ui-snippet>
    </section>

    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.2 All validation messages</h6>
      <ui-form item-margin-bottom="10">
        <ui-form-field class="form-item">
          <ui-textfield v-model="formData.mobile">Mobile </ui-textfield>
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
            <li v-for="(msg, index) in messages" :key="index">
              {{ msg }}
            </li>
          </ul>
        </ui-alert>
        <ui-form-field class="form-item form-actions">
          <ui-button raised @click="onSubmit">Submit 2</ui-button>
        </ui-form-field>
      </ui-form>
      <ui-snippet :code="$store.demos[2]"></ui-snippet>
    </section>

    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.3 The helper text validation messages</h6>
      <ui-form item-margin-bottom="10">
        <ui-form-field class="form-item">
          <ui-textfield
            v-model="formData.mobile"
            helper-text-id="mobile-helper-text"
          >
            Mobile
          </ui-textfield>
          <ui-textfield-helper
            id="mobile-helper-text"
            :valid-msg="validMsg.mobile"
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
            :valid-msg="validMsg.password"
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
            :valid-msg="validMsg.repassword"
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
            :valid-msg="validMsg.gender"
          ></ui-select-helper>
        </ui-form-field>
        <ui-form-field class="form-item form-actions">
          <ui-button raised @click="onSubmit">Submit 3</ui-button>
        </ui-form-field>
      </ui-form>
      <ui-snippet :code="$store.demos[3]"></ui-snippet>
    </section>
  </docs-page>
</template>


<script>
import { reactive, toRefs } from 'vue';
import { useValidator, useToast } from 'balm-ui';

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

const state = reactive({
  formData: {
    mobile: '',
    password: '',
    repassword: '',
    gender: ''
  },
  message: '',
  messages: [],
  validMsg: {}
});

export default {
  metaInfo() {
    return {
      subtitle: 'Validator'
    };
  },
  // Composition API
  setup() {
    const validator = useValidator();
    const toast = useToast();

    function onSubmit() {
      const result = validator.validate(state.formData);

      const { valid, message, messages, validMsg } = result;
      state.message = message;
      state.messages = messages;
      state.validMsg = validMsg;

      if (valid) {
        toast('ok');
      }
    }

    return {
      validations,
      genderOptions,
      ...toRefs(state),
      onSubmit
    };
  }
  // Options API
  // data() {
  //   return {
  //     validator: useValidator(),
  //     validations,
  //     genderOptions,
  //     formData: {
  //       mobile: '',
  //       password: '',
  //       repassword: '',
  //       gender: ''
  //     },
  //     message: '',
  //     messages: [],
  //     validMsg: {}
  //   };
  // },
  // methods: {
  //   onSubmit() {
  //     const result = this.validator.validate(this.formData);

  //     const { valid, message, messages, validMsg } = result;
  //     this.message = message;
  //     this.messages = messages;
  //     this.validMsg = validMsg;

  //     if (valid) {
  //       this.$toast('ok');
  //     }
  //   }
  // }
};
</script>
