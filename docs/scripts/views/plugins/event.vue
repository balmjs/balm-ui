<template>
  <docs-page type="plugin" name="event" demo-count="4" without-css>
    <template #hero>
      <h1 :class="$tt('headline1')">useEvent();</h1>
    </template>

    <!-- Content -->
    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.1 onChange</h6>
      <ui-grid>
        <ui-grid-cell columns="6">
          <label>Vue methods</label>

          <p>
            <ui-button raised @click="showMessage">Show message</ui-button>
            <ui-button outlined @click="clearMessage">Clear</ui-button>
          </p>
          <p>{{ message1 }}</p>

          <ui-snippet :code="$store.demos[1]"></ui-snippet>
        </ui-grid-cell>
        <ui-grid-cell columns="6">
          <label>balmUI methods</label>

          <p>
            <ui-button
              raised
              @click="balmUI.onChange('message2', 'Hello BalmUI')"
            >
              Show message
            </ui-button>
            <ui-button outlined @click="balmUI.onChange('message2', '')">
              Clear
            </ui-button>
          </p>
          <p>{{ message2 }}</p>

          <ui-snippet :code="$store.demos[2]"></ui-snippet>
        </ui-grid-cell>
      </ui-grid>
    </section>

    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.2 onShow/onHide</h6>
      <ui-grid>
        <ui-grid-cell columns="6">
          <label>Vue methods</label>

          <p>
            <ui-button raised @click="openDialog">Open dialog</ui-button>
          </p>
          <ui-dialog v-model="open1">
            <ui-dialog-content>
              <p>Open dialog: `open = true`</p>
              <p>Close dialog: `open = false`</p>
            </ui-dialog-content>
            <ui-dialog-actions>
              <ui-button @click="closeDialog">Close dialog</ui-button>
            </ui-dialog-actions>
          </ui-dialog>

          <ui-snippet :code="$store.demos[3]"></ui-snippet>
        </ui-grid-cell>
        <ui-grid-cell columns="6">
          <label>balmUI methods</label>

          <p>
            <ui-button raised @click="balmUI.onShow('open2')">
              Open dialog
            </ui-button>
          </p>
          <ui-dialog v-model="open2">
            <ui-dialog-content>
              <p>Open dialog: `balmUI.onShow('open')`</p>
              <p>Close dialog: `balmUI.onHide('open')`</p>
            </ui-dialog-content>
            <ui-dialog-actions>
              <ui-button @click="balmUI.onHide('open2')">
                Close dialog
              </ui-button>
            </ui-dialog-actions>
          </ui-dialog>

          <ui-snippet :code="$store.demos[4]"></ui-snippet>
        </ui-grid-cell>
      </ui-grid>
    </section>
  </docs-page>
</template>

<script>
import { useEvent } from 'balm-ui';

export default {
  metaInfo: {
    titleTemplate: '%s - Event'
  },
  setup() {
    const balmUI = useEvent();

    return {
      balmUI
    };
  },
  data() {
    return {
      message1: 'No message',
      message2: 'No message',
      open1: false,
      open2: false
    };
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
