<template>
  <ui-page name="alert" demoCount="1" withoutCss>
    <template #hero>
      <div class="hero-demo">
        <ui-alert :state="state" :stateOutlined="stateOutlined">{{
          message
        }}</ui-alert>
      </div>
      <div class="hero-options">
        <div class="hero-option hero-options">
          <ui-select :options="StateTypeOptions" v-model="state"
            >State Type</ui-select
          >
          <ui-form-field>
            <ui-checkbox
              id="state-outlined"
              v-model="stateOutlined"
            ></ui-checkbox>
            <label for="state-outlined">Outlined State</label>
          </ui-form-field>
        </div>
        <ui-textfield class="hero-option" v-model="message">
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
  </ui-page>
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
  metaInfo: {
    titleTemplate: '%s - Alert'
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
