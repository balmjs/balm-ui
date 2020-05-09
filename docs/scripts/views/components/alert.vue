<template>
  <ui-page-structure name="alert" demoCount="1" withoutCss>
    <template #hero>
      <div class="hero-demo">
        <ui-alert :icon="icon" :iconOutlined="iconOutlined">{{
          message
        }}</ui-alert>
      </div>
      <div class="hero-options">
        <div class="hero-option hero-options">
          <ui-select :options="IconTypeOptions" v-model="icon"
            >Icon Type</ui-select
          >
          <ui-form-field>
            <ui-checkbox
              id="icon-outlined"
              v-model="iconOutlined"
            ></ui-checkbox>
            <label for="icon-outlined">Outlined Icon</label>
          </ui-form-field>
        </div>
        <ui-textfield class="hero-option" v-model="message">
          Alert Message
        </ui-textfield>
      </div>
    </template>

    <!-- Content -->
    <section class="example">
      <ui-alert icon="success">Success Message</ui-alert>
      <ui-alert icon="info">Info Message</ui-alert>
      <ui-alert icon="warning" closable>Warning Message</ui-alert>
      <ui-alert icon="error">Error Message</ui-alert>
    </section>
    <ui-snippet :code="$store.demos[1]"></ui-snippet>
  </ui-page-structure>
</template>

<script>
const IconTypeOptions = [
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
      IconTypeOptions,
      icon: 'success',
      iconOutlined: false,
      message: 'Message'
    };
  }
};
</script>
