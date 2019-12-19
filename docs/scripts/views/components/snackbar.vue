<template>
  <div :class="[$tt('body1'), 'demo--snackbar']">
    <header class="hero component">
      <ui-snackbar class="mdc-snackbar--open">Message sent</ui-snackbar>
    </header>

    <ui-toc-affix></ui-toc-affix>

    <div :class="$tt('body2')">
      <h4 v-anchor:id="'ui-usage'" :class="$tt('headline4')">0. Usage</h4>
      <ui-markdown :text="code[0]"></ui-markdown>

      <h4 v-anchor:id="'ui-demo'" :class="$tt('headline4')">1. Demo</h4>
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
          <ui-textfield id="message" v-model="message"
            >Message Text</ui-textfield
          >
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
      <ui-snippet :code="code[1]"></ui-snippet>

      <h4 v-anchor:id="'ui-apis'" :class="$tt('headline4')">2. APIs</h4>
      <ui-markdown :text="docs.snackbar"></ui-markdown>

      <h4 v-anchor:id="'ui-sass'" :class="$tt('headline4')">
        3. Sass Variables
      </h4>
      <ui-markdown :text="docs.css"></ui-markdown>
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
      // demo
      open: false,
      timeout: 5000,
      message: 'Hello Snackbar',
      actionText: 'close',
      actionType: false
    };
  },
  created() {
    this.initDocs('snackbar', {
      code: 1,
      apis: ['snackbar'],
      css: true
    });
  },
  methods: {
    actionHandler() {
      console.log('gg');
    }
  }
};
</script>
