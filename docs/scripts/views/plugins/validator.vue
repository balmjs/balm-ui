<template>
  <docs-page type="plugin" name="validator" demo-count="3" without-css>
    <template #hero>
      <h1 :class="$tt('headline1')">$validate</h1>
    </template>

    <!-- Content -->
    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.1 One validation message</h6>
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
          <ui-button raised @click="submit">Submit 1</ui-button>
        </ui-form-field>
      </ui-form>
      <ui-snippet :code="$store.demos[1]"></ui-snippet>
    </section>

    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.2 All validation messages</h6>
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
            <li v-for="(msg, index) in messages" :key="index">
              {{ msg }}
            </li>
          </ul>
        </ui-alert>
        <ui-form-field class="form-item form-actions">
          <ui-button raised @click="submit">Submit 2</ui-button>
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
            v-model="validMsg.mobile"
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
            v-model="validMsg.password"
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
            v-model="validMsg.repassword"
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
            v-model="validMsg.gender"
          ></ui-select-helper>
        </ui-form-field>
        <ui-form-field class="form-item form-actions">
          <ui-button raised @click="submit">Submit 3</ui-button>
        </ui-form-field>
      </ui-form>
      <ui-snippet :code="$store.demos[3]"></ui-snippet>
    </section>
  </docs-page>
</template>

<script>
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
  metaInfo: {
    titleTemplate: '%s - Validator'
  },
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
      message: '',
      messages: [],
      validMsg: {}
    };
  },
  methods: {
    submit() {
      let { valid, message, messages, validMsg } = this.$validate(
        this.formData
      );
      this.message = message;
      this.messages = messages;
      this.validMsg = validMsg;

      if (valid) {
        this.$toast('gg');
      }
    }
  }
};
</script>
