<template>
  <div :class="[$tt('body1'), 'demo--snackbar']">
    <section class="hero component">
      <ui-snackbar class="mdc-snackbar--open">Message sent</ui-snackbar>
    </section>

    <ui-toc-affix></ui-toc-affix>

    <div :class="$tt('body2')">
      <h4 v-anchor:id="'ui-usage'" :class="$tt('headline4')">0. Usage</h4>
      <ui-markdown :text="code[0]"></ui-markdown>

      <h4 v-anchor:id="'ui-example'" :class="$tt('headline4')">1. Example</h4>
      <section class="example">
        <div>
          <label>Timeout: {{ timeout / 1000 }}second</label>
          <ui-slider id="timeout" min="4000" max="10000" step="1000" v-model="timeout"></ui-slider>
          <br />
          <ui-textfield id="message" v-model="message">Message Text</ui-textfield>
          <br />
          <ui-textfield id="action" v-model="actionText">Action Text</ui-textfield>
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
            :actionType="actionType ? 'icon' : 'button'"
          ></ui-snackbar>
        </div>
      </section>
      <ui-accordion>
        <ui-markdown :code="code[1]"></ui-markdown>
      </ui-accordion>

      <h4 v-anchor:id="'ui-apis'" :class="$tt('headline4')">2. APIs</h4>
      <ui-apidocs name="snackbar"></ui-apidocs>

      <h4 v-anchor:id="'ui-sass'" :class="$tt('headline4')">3. Sass Variables</h4>
      <ui-cssdocs name="snackbar"></ui-cssdocs>
    </div>
  </div>
</template>

<script>
import snippets from '@/mixins/snippets';

export default {
  metaInfo: {
    titleTemplate: '%s - Snackbar'
  },
  mixins: [snippets],
  data() {
    return {
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
  },
  created() {
    this.showCode('snackbar');
  }
};
</script>
