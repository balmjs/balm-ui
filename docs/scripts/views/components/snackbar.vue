<template>
  <div :class="[$tt('body1'), 'demo--snackbar']">
    <section class="hero component">
      <ui-snackbar cssOnly
        class="mdc-snackbar--active"
        message="Message sent"></ui-snackbar>
    </section>

    <div :class="$tt('body2')">
      <h4 :class="$tt('headline4')">0. Usage</h4>
      <ui-markdown :text="code[0]"></ui-markdown>

      <h4 :class="$tt('headline4')">1. Example</h4>
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
            v-model="actionText">Action Text</ui-textfield><br><br>

          <ui-button raised @click="$balmUI.onShow('active')">Show</ui-button>

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

      <h4 :class="$tt('headline4')">2. APIs</h4>
      <ui-apidocs name="snackbar"></ui-apidocs>
    </div>
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
