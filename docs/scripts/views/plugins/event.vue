<template>
  <div class="demo--event">
    <section class="hero">
      <h2 :class="$tt('headline4')">
        $balmUI
      </h2>
    </section>

    <h3 :class="$tt('headline3')">0. Usage</h3>
    <ui-markdown :text="code[0]"></ui-markdown>

    <h3 :class="$tt('headline3')">1. Example</h3>
    <div class="example">
      <h6 :class="$tt('headline6')">1.1 `onChange`</h6>
      <label>Vue methods</label>
      <ui-button @click="showMessage">Show message</ui-button>
      <ui-button @click="clearMessage">Clear</ui-button>
      <hr>
      <label>$balmUI</label>
      <ui-button @click="$balmUI.onChange('message', 'Hello BalmUI')">Show message</ui-button>
      <ui-button @click="$balmUI.onChange('message', '')">Clear</ui-button>
      <p>{{ message }}</p>
    </div>
    <ui-accordion>
      <ui-markdown :code="code[1]"></ui-markdown>
    </ui-accordion>

    <div class="example">
      <h6 :class="$tt('headline6')">1.2 `onShow/onHide`</h6>
      <label>Vue methods</label>
      <ui-button raised @click="openDialog">Open dialog</ui-button>
      <hr>
      <label>$balmUI</label>
      <ui-button raised @click="$balmUI.onShow('open')">Open dialog</ui-button>
      <ui-dialog v-model="open">
        <ui-dialog-header>
          Dialog content
        </ui-dialog-header>
        <ui-dialog-body>
          <p> Open dialog: `$balmUI.onShow('open')`</p>
          <p>Close dialog: `$balmUI.onHide('open')`</p>
        </ui-dialog-body>
        <ui-dialog-footer>
          <ui-button @click="$balmUI.onHide('open')">Close dialog</ui-button>
        </ui-dialog-footer>
      </ui-dialog>
    </div>
    <ui-accordion>
      <ui-markdown :text="code[2]"></ui-markdown>
    </ui-accordion>

    <h3 :class="$tt('headline3')">2. APIs</h3>
    <ui-apidocs name="event" type="plugin"></ui-apidocs>
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
      message: 'No message',
      open: false
    };
  },
  created() {
    this.showCode('event', 2);
  },
  methods: {
    showMessage() {
      this.message = 'Hello BalmUI';
    },
    clearMessage() {
      this.message = '';
    },
    openDialog() {
      this.open = true;
    },
    closeDialog() {
      this.open = false;
    }
  }
};
</script>
