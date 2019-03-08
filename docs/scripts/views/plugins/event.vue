<template>
  <div :class="[$tt('body1'), 'demo--event']">
    <section class="hero plugin">
      <h2 :class="$tt('headline4')">$balmUI</h2>
    </section>

    <ui-toc-affix withoutCss></ui-toc-affix>

    <div :class="$tt('body2')">
      <h4 v-anchor:id="'ui-usage'" :class="$tt('headline4')">0. Usage</h4>
      <ui-markdown :text="code[0]"></ui-markdown>

      <h4 v-anchor:id="'ui-example'" :class="$tt('headline4')">1. Example</h4>
      <div class="example">
        <h6 :class="$tt('headline6')">1.1 onChange</h6>
        <ui-grid>
          <ui-grid-cell colspan="6">
            <label>Vue methods</label>

            <p>
              <ui-button raised @click="showMessage">Show message</ui-button>
              <ui-button outlined @click="clearMessage">Clear</ui-button>
            </p>
            <p>{{ message1 }}</p>

            <ui-accordion>
              <ui-markdown :code="code[1]"></ui-markdown>
            </ui-accordion>
          </ui-grid-cell>
          <ui-grid-cell colspan="6">
            <label>$balmUI</label>

            <p>
              <ui-button raised @click="$balmUI.onChange('message2', 'Hello BalmUI')">Show message</ui-button>
              <ui-button outlined @click="$balmUI.onChange('message2', '')">Clear</ui-button>
            </p>
            <p>{{ message2 }}</p>

            <ui-accordion>
              <ui-markdown :code="code[2]"></ui-markdown>
            </ui-accordion>
          </ui-grid-cell>
        </ui-grid>
      </div>

      <div class="example">
        <h6 :class="$tt('headline6')">1.2 onShow/onHide</h6>
        <ui-grid>
          <ui-grid-cell colspan="6">
            <label>Vue methods</label>

            <p>
              <ui-button raised @click="openDialog">Open dialog</ui-button>
            </p>
            <ui-dialog v-model="open1">
              <ui-dialog-content>Dialog content</ui-dialog-content>
              <ui-dialog-actions>
                <ui-button @click="closeDialog">Close dialog</ui-button>
              </ui-dialog-actions>
            </ui-dialog>

            <ui-accordion>
              <ui-markdown :text="code[3]"></ui-markdown>
            </ui-accordion>
          </ui-grid-cell>
          <ui-grid-cell colspan="6">
            <label>$balmUI</label>

            <p>
              <ui-button raised @click="$balmUI.onShow('open2')">Open dialog</ui-button>
            </p>
            <ui-dialog v-model="open2">
              <ui-dialog-content>
                <p>Open dialog: `$balmUI.onShow('open')`</p>
                <p>Close dialog: `$balmUI.onHide('open')`</p>
              </ui-dialog-content>
              <ui-dialog-actions>
                <ui-button @click="$balmUI.onHide('open2')">Close dialog</ui-button>
              </ui-dialog-actions>
            </ui-dialog>

            <ui-accordion>
              <ui-markdown :text="code[4]"></ui-markdown>
            </ui-accordion>
          </ui-grid-cell>
        </ui-grid>
      </div>

      <h4 v-anchor:id="'ui-apis'" :class="$tt('headline4')">2. APIs</h4>
      <ui-apidocs name="event" type="plugin"></ui-apidocs>
    </div>
  </div>
</template>

<script>
import snippets from '../../mixins/snippets';

export default {
  metaInfo: {
    titleTemplate: '%s - Event'
  },
  mixins: [snippets],
  data() {
    return {
      message1: 'No message',
      message2: 'No message',
      open1: false,
      open2: false
    };
  },
  created() {
    this.showCode('event', 4);
  },
  methods: {
    showMessage() {
      this.message1 = 'Hello BalmUI';
    },
    clearMessage() {
      this.message1 = '';
    },
    openDialog() {
      this.open1 = true;
    },
    closeDialog() {
      this.open1 = false;
    }
  }
};
</script>
