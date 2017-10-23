<template>
  <div class="demo--dialog">
    <section class="hero">
      <ui-dialog cssOnly noMask class="catalog-dialog-demo mdc-dialog--open" style="visibility: visible;">
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

    <section class="example">
      <ui-button primary raised @click.native="onOpen('open')">Show Dialog</ui-button>
      <ui-button primary raised @click.native="onShow('open2')">Show Scrolling Dialog</ui-button>
    </section>

    <section class="example">
      <ui-button primary raised @click.native="showAlert">Show Alert</ui-button>
      <ui-button primary raised @click.native="showConfirm">Show Confirm</ui-button>
      <ui-button primary raised @click.native="showToast">Show Toast</ui-button>
    </section>

    <ui-dialog
      :open="open"
      @close="onClose('open')"
      @confirm="onConfirm">
      <ui-dialog-header>Use Google's location service?</ui-dialog-header>
      <ui-dialog-body>
        <p>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</p>
      </ui-dialog-body>
      <ui-dialog-footer></ui-dialog-footer>
    </ui-dialog>

    <ui-dialog
      :open="open2"
      @close="onHide('open2')"
      @confirm="onConfirm">
      <ui-dialog-header>Choose a Ringtone</ui-dialog-header>
      <ui-dialog-body scrollable>
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
      </ui-dialog-body>
      <ui-dialog-footer></ui-dialog-footer>
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
      open2: false,
      open3: false,
      open4: false
    }
  },
  methods: {
    onConfirm(result) {
      if (result) {
        console.log('ok');
      } else {
        console.log('cancel');
      }
    },
    showAlert() {
      // this.$alert('Hello').then(() => {
      //   console.log('World');
      // });

      this.$alert({
        message: 'Hello',
        callback: () => {
          console.log('World');
        }
      });
    },
    showConfirm() {
      // this.$confirm({
      //   message: 'Are you sure?'
      // }).then(() => {
      //   console.log('OK');
      // }).catch(() => {
      //   console.log('Cancel');
      // });

      this.$confirm({
        message: 'Are you sure?',
        callback: result => {
          console.log(result);
        }
      });
    },
    showToast() {
      this.$toast('Hello World');
    }
  },
  created() {
    // this.showCode('dialog', 2);
  }
}
</script>
