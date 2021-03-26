<template>
  <docs-page name="snackbar" demo-count="1">
    <template #hero>
      <ui-snackbar class="mdc-snackbar--open">
        Message sent
        <template #action="{ actionClass }">
          <ui-button :class="actionClass">Action</ui-button>
        </template>
      </ui-snackbar>
    </template>

    <!-- Content -->
    <section class="demo-wrapper">
      <ui-form class="demo-controls">
        <label>Timeout: {{ timeout }}second</label>
        <ui-form-field>
          <ui-slider
            ref="slider"
            v-model="timeout"
            type="discrete"
            min="4"
            max="10"
          ></ui-slider>
        </ui-form-field>
        <ui-form-field>
          <ui-textfield v-model="message">Message Text</ui-textfield>
        </ui-form-field>
        <ui-form-field>
          <ui-textfield v-model="actionText">Action Text</ui-textfield>
        </ui-form-field>
        <ui-form-field>
          <ui-checkbox
            v-model="actionType"
            input-id="action-type"
          ></ui-checkbox>
          <label for="action-type">Icon Button Action</label>
        </ui-form-field>
      </ui-form>
      <div class="demo">
        <ui-button raised @click="$balmUI.onOpen('open')">
          Show Snackbar
        </ui-button>

        <ui-snackbar
          v-model="open"
          :timeout-ms="timeout * 1e3"
          :message="message"
          :action-button-text="actionText"
          :action-type="actionType ? 1 : 0"
        ></ui-snackbar>
      </div>
      <ui-snippet :code="$store.demos[1]"></ui-snippet>
    </section>
  </docs-page>
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
      timeout: 5,
      message: 'Hello Snackbar',
      actionText: 'close',
      actionType: false
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.slider.recompute();
    });
  },
  methods: {
    actionHandler() {
      console.log('gg');
    }
  }
};
</script>
