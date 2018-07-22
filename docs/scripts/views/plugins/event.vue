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
      <p>{{ message1 }}</p>
      <ui-accordion>
        <ui-markdown :code="code[1]"></ui-markdown>
      </ui-accordion>
      <hr>
      <label>$balmUI</label>
      <ui-button @click="$balmUI.onChange('message2', 'Hello BalmUI')">Show message</ui-button>
      <ui-button @click="$balmUI.onChange('message2', '')">Clear</ui-button>
      <p>{{ message2 }}</p>
      <ui-accordion>
        <ui-markdown :code="code[2]"></ui-markdown>
      </ui-accordion>
    </div>

    <div class="example">
      <h6 :class="$tt('headline6')">1.2 `onShow/onHide`</h6>
      <label>Vue methods</label>
      <ui-button raised @click="openDialog">Open dialog</ui-button>

      <ui-dialog v-model="open1">
        <ui-dialog-body>
          Dialog content
        </ui-dialog-body>
        <ui-dialog-footer>
          <ui-button @click="closeDialog">Close dialog</ui-button>
        </ui-dialog-footer>
      </ui-dialog>

      <ui-accordion>
        <ui-markdown :text="code[3]"></ui-markdown>
      </ui-accordion>
      <hr>
      <label>$balmUI</label>
      <ui-button raised @click="$balmUI.onShow('open2')">Open dialog</ui-button>

      <ui-dialog v-model="open2">
        <ui-dialog-body>
          <p> Open dialog: `$balmUI.onShow('open')`</p>
          <p>Close dialog: `$balmUI.onHide('open')`</p>
        </ui-dialog-body>
        <ui-dialog-footer>
          <ui-button @click="$balmUI.onHide('open2')">Close dialog</ui-button>
        </ui-dialog-footer>
      </ui-dialog>

      <ui-accordion>
        <ui-markdown :text="code[4]"></ui-markdown>
      </ui-accordion>
    </div>

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
