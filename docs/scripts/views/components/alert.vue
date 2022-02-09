<template>
  <docs-page name="alert" demo-count="1" without-css>
    <template #hero>
      <div class="hero-demo">
        <ui-alert :state="state" :state-outlined="stateOutlined">{{
          message
        }}</ui-alert>
      </div>
      <div class="hero-options">
        <div class="hero-option hero-options">
          <ui-select v-model="state" :options="StateTypeOptions">
            State Type
          </ui-select>
          <ui-form-field>
            <ui-checkbox
              v-model="stateOutlined"
              input-id="state-outlined"
            ></ui-checkbox>
            <label for="state-outlined">Outlined State</label>
          </ui-form-field>
        </div>
        <ui-textfield v-model="message" class="hero-option">
          Alert Message
        </ui-textfield>
      </div>
    </template>

    <!-- Content -->
    <section class="demo-wrapper">
      <div class="demo">
        <ui-alert state="success">Success Message</ui-alert>
        <ui-alert state="info">Info Message</ui-alert>
        <ui-alert state="warning" closable>Warning Message</ui-alert>
        <ui-alert state="error">Error Message</ui-alert>
      </div>
      <ui-snippet :code="$store.demos[1]"></ui-snippet>
    </section>
  </docs-page>
</template>

<script>
const StateTypeOptions = [
  {
    label: 'Success',
    value: 'success'
  },
  {
    label: 'Info',
    value: 'info'
  },
  {
    label: 'Warning',
    value: 'warning'
  },
  {
    label: 'Error',
    value: 'error'
  },
  {
    label: 'Help',
    value: 'help'
  }
];

export default {
  metaInfo() {
    return {
      subtitle: 'Alert'
    };
  },
  data() {
    return {
      // hero
      StateTypeOptions,
      state: 'success',
      stateOutlined: false,
      message: 'Message'
    };
  }
};
</script>
