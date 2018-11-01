<template>
  <div :class="[$tt('body1'), 'demo--dialog']">
    <section class="hero component">
      <ui-dialog noBackdrop class="catalog-dialog-demo mdc-dialog--open" style="visibility: visible;">
        <ui-dialog-title>Are you happy?</ui-dialog-title>
        <ui-dialog-content>
          <p>Please check the left and right side of this element for fun.</p>
        </ui-dialog-content>
        <ui-dialog-actions>
          <ui-button>Cancel</ui-button>
          <ui-button>Continue</ui-button>
        </ui-dialog-actions>
      </ui-dialog>
    </section>

    <div :class="$tt('body2')">
      <h4 :class="$tt('headline4')">0. Usage</h4>
      <ui-markdown :text="code[0]"></ui-markdown>

      <h4 :class="$tt('headline4')">1. Example</h4>
      <section class="example">
        <ui-button raised @click="$balmUI.onOpen('open')">Show Dialog</ui-button>
        <ui-accordion>
          <ui-markdown :code="code[1]"></ui-markdown>
        </ui-accordion>
      </section>

      <section class="example">
        <ui-button raised @click="$balmUI.onShow('open2')">Show Scrolling Dialog</ui-button>
        <ui-accordion>
          <ui-markdown :code="code[2]"></ui-markdown>
        </ui-accordion>
      </section>

      <ui-dialog
        v-model="open"
        @confirm="onConfirm">
        <ui-dialog-title>Use Google's location service?</ui-dialog-title>
        <ui-dialog-content>
          <p>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</p>
        </ui-dialog-content>
        <ui-dialog-actions></ui-dialog-actions>
      </ui-dialog>

      <ui-dialog scrollable
        v-model="open2"
        @confirm="onConfirm">
        <ui-dialog-title>Choose a Ringtone</ui-dialog-title>
        <ui-dialog-content>
          <ui-list>
            <ui-item v-for="(item, index) in list" :key="index">
              {{ item }}
            </ui-item>
          </ui-list>
        </ui-dialog-content>
        <ui-dialog-actions></ui-dialog-actions>
      </ui-dialog>

      <h4 :class="$tt('headline4')">2. APIs</h4>
      <ui-apidocs name="dialog"></ui-apidocs>
      <ui-apidocs name="dialog-header"></ui-apidocs>
      <ui-apidocs name="dialog-body"></ui-apidocs>
      <ui-apidocs name="dialog-footer"></ui-apidocs>
    </div>
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
