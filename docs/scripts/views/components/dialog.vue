<template>
  <div class="demo--dialog">
    <section class="hero">
      <ui-dialog noBackdrop class="catalog-dialog-demo mdc-dialog--open" style="visibility: visible;">
        <ui-dialog-header>Are you happy?</ui-dialog-header>
        <ui-dialog-body>
          <p>Please check the left and right side of this element for fun.</p>
        </ui-dialog-body>
        <ui-dialog-footer>
          <ui-button>Cancel</ui-button>
          <ui-button>Continue</ui-button>
        </ui-dialog-footer>
      </ui-dialog>
    </section>

    <h3 :class="$tt('headline3')">0. Usage</h3>
    <ui-markdown :text="code[0]"></ui-markdown>

    <h3 :class="$tt('headline3')">1. Example</h3>
    <section class="example">
      <ui-button raised @click="balmUI.onOpen('open')">Show Dialog</ui-button>
      <ui-accordion>
        <ui-markdown :code="code[1]"></ui-markdown>
      </ui-accordion>
    </section>

    <section class="example">
      <ui-button raised @click="balmUI.onShow('open2')">Show Scrolling Dialog</ui-button>
      <ui-accordion>
        <ui-markdown :code="code[2]"></ui-markdown>
      </ui-accordion>
    </section>

    <ui-dialog
      v-model="open"
      @confirm="onConfirm">
      <ui-dialog-header>Use Google's location service?</ui-dialog-header>
      <ui-dialog-body>
        <p>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</p>
      </ui-dialog-body>
      <ui-dialog-footer></ui-dialog-footer>
    </ui-dialog>

    <ui-dialog
      v-model="open2"
      @confirm="onConfirm">
      <ui-dialog-header>Choose a Ringtone</ui-dialog-header>
      <ui-dialog-body scrollable>
        <ui-list>
          <ui-item v-for="(item, index) in list" :key="index">
            {{ item }}
          </ui-item>
        </ui-list>
      </ui-dialog-body>
      <ui-dialog-footer></ui-dialog-footer>
    </ui-dialog>

    <h3 :class="$tt('headline3')">2. APIs</h3>
    <ui-apidocs name="dialog"></ui-apidocs>
    <ui-apidocs name="dialog-header"></ui-apidocs>
    <ui-apidocs name="dialog-body"></ui-apidocs>
    <ui-apidocs name="dialog-footer"></ui-apidocs>
  </div>
</template>

<script>
import snippets from '../../mixins/snippets';

export default {
  metaInfo: {
    titleTemplate: '%s - Dialog'
  },
  mixins: [snippets],
  data() {
    return {
      open: false,
      open2: false,
      list: [
        'None',
        'Callisto',
        'Ganymede',
        'Luna',
        'Marimba',
        'Schwifty',
        'Callisto',
        'Ganymede',
        'Luna',
        'Marimba',
        'Schwifty'
      ]
    };
  },
  methods: {
    onConfirm(result) {
      if (result) {
        console.log('ok');
      } else {
        console.log('cancel');
      }
    }
  },
  created() {
    this.showCode('dialog', 2);
  }
};
</script>
