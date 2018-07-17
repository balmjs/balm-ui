<template>
  <div class="demo--snackbar">
    <section class="hero">
      <ui-snackbar cssOnly
        class="mdc-snackbar--active"
        message="Message sent"></ui-snackbar>
    </section>

    <h3 :class="$tt('headline3')">0. Usage</h3>
    <ui-markdown :text="code[0]"></ui-markdown>

    <h3 :class="$tt('headline3')">1. Example</h3>
    <section class="example">
      <div>
        <ui-checkbox id="multiline"
          v-model="multiline">Multiline</ui-checkbox><br>
        <ui-checkbox id="action-on-bottom"
          v-model="actionOnBottom"
          :disabled="!multiline">Action On Bottom</ui-checkbox><br>
        <ui-checkbox id="dismiss-on-action"
          v-model="dismiss">Dismiss On Action</ui-checkbox><br>

        <ui-textfield id="message"
          v-model="message">Message Text</ui-textfield><br>
        <ui-textfield id="action"
          v-model="actionText">Action Text</ui-textfield><br>

        <ui-button raised @click="balmUI.onShow('active')">Show</ui-button>

        <ui-snackbar
          v-model="active"
          :message="message"
          :actionHandler="actionHandler"
          :multiline="multiline"
          :actionOnBottom="actionOnBottom"
          :actionText="actionText"
          :dismiss="dismiss"></ui-snackbar>
      </div>
    </section>
    <ui-accordion>
      <ui-markdown :code="code[1]"></ui-markdown>
    </ui-accordion>

    <h3 :class="$tt('headline3')">2. API</h3>
    <ui-apidocs name="snackbar"></ui-apidocs>
  </div>
</template>

<script>
import snippets from '../../mixins/snippets';

export default {
  metaInfo: {
    titleTemplate: '%s - Snackbar'
  },
  mixins: [snippets],
  data() {
    return {
      active: false,
      message: 'Hello Snackbar',
      multiline: false,
      actionOnBottom: false,
      actionText: 'Undo',
      dismiss: true
    };
  },
  methods: {
    actionHandler() {
      console.log('gg');
    }
  },
  created() {
    this.showCode('snackbar');
  }
};
</script>
