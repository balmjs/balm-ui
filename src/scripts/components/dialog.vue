<template>
  <aside class="mdc-dialog">
    <div class="mdc-dialog__surface">
      <header v-if="!noHeader" class="mdc-dialog__header">
        <slot name="title:before"></slot>
        <h2 class="mdc-dialog__header__title">
          <slot name="title"></slot>
        </h2>
        <slot name="title:after"></slot>
      </header>
      <section :class="className.body">
        <slot></slot>
      </section>
      <footer v-if="!noFooter" class="mdc-dialog__footer">
        <slot name="footer" :className="btnClassName">
          <ui-button accent
                  :class="[
                    'mdc-dialog__footer__button',
                    {'mdc-dialog__footer__button--cancel': notifyCancel}
                  ]"
                  @click.native="handleCancel">{{ cancelText }}</ui-button>
          <ui-button primary
                  :class="[
                    'mdc-dialog__footer__button',
                    {'mdc-dialog__footer__button--accept': notifyAccept}
                  ]"
                  @click.native="handleAccept">{{ acceptText }}</ui-button>
        </slot>
      </footer>
    </div>
    <div v-if="!noMask" class="mdc-dialog__backdrop" @click="handleClose"></div>
  </aside>
</template>

<script>
// NOTE: remove 'focus-trap' in MDC Dialog
import {MDCDialog} from '../../material-components-web/dialog';
import UiButton from '../components/button/button';

const CLASSNAME_ACCEPT = 'mdc-dialog__footer__button--accept';
const CLASSNAME_CANCEL = 'mdc-dialog__footer__button--cancel';
const UI_EVENT_CLOSE = 'close';
const UI_EVENT_ACCEPT = 'accept';
const UI_EVENT_CANCEL = 'cancel';

export default {
  name: 'ui-dialog',
  components: {
    UiButton
  },
  props: {
    // state
    open: {
      type: Boolean,
      default: false
    },
    // ui attributes
    cssOnly: {
      type: Boolean,
      default: false
    },
    scrollable: {
      type: Boolean,
      default: false
    },
    // button
    notifyAccept: {
      type: Boolean,
      default: false
    },
    notifyCancel: {
      type: Boolean,
      default: false
    },
    acceptText: {
      type: String,
      default: 'Accept'
    },
    cancelText: {
      type: String,
      default: 'Cancel'
    },
    // layout
    noHeader: {
      type: Boolean,
      default: false
    },
    noFooter: {
      type: Boolean,
      default: false
    },
    noMask: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      $dialog: null
    }
  },
  computed: {
    className() {
      return {
        body: {
          'mdc-dialog__body': true,
          'mdc-dialog__body--scrollable': this.scrollable
        }
      };
    },
    btnClassName() {
      return {
        accept: CLASSNAME_ACCEPT,
        cancel: CLASSNAME_CANCEL
      }
    }
  },
  watch: {
    open(val) {
      if (val) {
        this.$dialog.show();
      } else {
        this.$dialog.close();
      }
    }
  },
  methods: {
    handleClose() {
      this.$emit(UI_EVENT_CLOSE);
    },
    handleAccept() {
      if (this.notifyAccept) {
        this.handleClose();
      }
      this.$emit(UI_EVENT_ACCEPT);
    },
    handleCancel() {
      if (this.notifyCancel) {
        this.handleClose();
      }
      this.$emit(UI_EVENT_CANCEL);
    }
  },
  mounted() {
    if (!this.$dialog && !this.cssOnly) {
      this.$dialog = new MDCDialog(this.$el);
    }
  }
};
</script>
