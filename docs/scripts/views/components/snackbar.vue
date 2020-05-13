<template>
  <ui-page name="snackbar" demoCount="1">
    <template #hero>
      <ui-snackbar class="mdc-snackbar--open">Message sent</ui-snackbar>
    </template>

    <!-- Content -->
    <section class="demo-wrapper">
      <div class="demo-controls">
        <label>Timeout: {{ timeout / 1000 }}second</label>
        <ui-form-field block>
          <ui-slider
            id="timeout"
            min="4000"
            max="10000"
            step="1000"
            v-model="timeout"
          ></ui-slider>
        </ui-form-field>
        <ui-form-field block>
          <ui-textfield id="message" v-model="message"
            >Message Text</ui-textfield
          >
        </ui-form-field>
        <ui-form-field block>
          <ui-textfield id="action" v-model="actionText"
            >Action Text</ui-textfield
          >
        </ui-form-field>
        <ui-form-field block>
          <ui-checkbox id="action-type" v-model="actionType"></ui-checkbox>
          <label for="action-type">Action Icon Button</label>
        </ui-form-field>
      </div>
      <div class="demo">
        <ui-button raised @click="$balmUI.onOpen('open')">Show</ui-button>

        <ui-snackbar
          v-model="open"
          :timeoutMs="timeout"
          :message="message"
          :actionButtonText="actionText"
          :actionType="actionType ? 1 : 0"
        >
        </ui-snackbar>
      </div>
      <ui-snippet :code="$store.demos[1]"></ui-snippet>
    </section>
  </ui-page>
</template>

<script>
export default {
  metaInfo: {
    titleTemplate: '%s - Snackbar'
  },
  data() {
    return {
      // demo
      open: false,
      timeout: 5000,
      message: 'Hello Snackbar',
      actionText: 'close',
      actionType: false
    };
  },
  methods: {
    actionHandler() {
      console.log('gg');
    }
  }
};
</script>
