<template>
  <ui-page-structure name="snackbar" demoCount="1">
    <template #hero>
      <ui-snackbar class="mdc-snackbar--open">Message sent</ui-snackbar>
    </template>

    <!-- Content -->
    <section class="example">
      <div>
        <label>Timeout: {{ timeout / 1000 }}second</label>
        <ui-slider
          id="timeout"
          min="4000"
          max="10000"
          step="1000"
          v-model="timeout"
        ></ui-slider>
        <br />
        <ui-textfield id="message" v-model="message">Message Text</ui-textfield>
        <br />
        <ui-textfield id="action" v-model="actionText"
          >Action Text</ui-textfield
        >
        <br />
        <ui-form-field>
          <ui-checkbox id="action-type" v-model="actionType"></ui-checkbox>
          <label for="action-type">Action Icon Button</label>
        </ui-form-field>
        <br />
        <br />

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
    </section>
    <ui-snippet :code="$store.demos[1]"></ui-snippet>
  </ui-page-structure>
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
