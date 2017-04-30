<template>
  <div class="demo-dialog">
    <div class="component-title">
      <h3>MDC Web Dialog</h3>
      <p>Modal dialog windows for the web</p>
    </div>

    <ui-button primary raised @click.native="showDialog">Show Dialog</ui-button>
    <ui-button primary raised @click.native="showScrollingDialog">Show Scrolling Dialog</ui-button>

    <ui-dialog
      :open="open"
      @close="close"
      @accept="accept"
      @cancel="cancel">
      <template slot="title">Use Google's location service?</template>
      <p>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</p>
    </ui-dialog>

    <ui-dialog
      scrollable
      :open="open2"
      @close="close"
      @accept="accept"
      @cancel="cancel">
      <template slot="title">Choose a Ringtone</template>
      <ul class="mdc-list">
        <li class="mdc-list-item">None</li>
        <li class="mdc-list-item">Callisto</li>
        <li class="mdc-list-item">Ganymede</li>
        <li class="mdc-list-item">Luna</li>
        <li class="mdc-list-item">Marimba</li>
        <li class="mdc-list-item">Schwifty</li>
        <li class="mdc-list-item">Callisto</li>
        <li class="mdc-list-item">Ganymede</li>
        <li class="mdc-list-item">Luna</li>
        <li class="mdc-list-item">Marimba</li>
        <li class="mdc-list-item">Schwifty</li>
      </ul>
    </ui-dialog>

    <!-- <ui-apidoc name="dialog"></ui-apidoc> -->
  </div>
</template>

<script>
import snippets from '../mixins/snippets';

export default {
  mixins: [snippets],
  data() {
    return {
      open: false,
      open2: false
    }
  },
  methods: {
    close() {
      this.open = false;
      this.open2 = false;
    },
    showDialog() {
      this.open = true;
    },
    showScrollingDialog() {
      this.open2 = true;
    },
    accept() {
      console.log('ok');
    },
    cancel() {
      console.log('cancel');
    }
  },
  created() {
    // this.showCode('dialog', 2);
  }
}
</script>
