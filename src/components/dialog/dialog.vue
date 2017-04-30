<template>
  <aside class="mdc-dialog" style="visibility:hidden;">
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
          <ui-button
            :class="['mdc-dialog__footer__button', {'mdc-dialog__footer__button--cancel': notifyCancel}]"
            @click.native="cancel">{{ CancelText }}</ui-button>
          <ui-button
            :class="['mdc-dialog__footer__button', {'mdc-dialog__footer__button--accept': notifyAccept}]"
            @click.native="accept">{{ AcceptText }}</ui-button>
        </slot>
      </footer>
    </div>
    <div class="mdc-dialog__backdrop" @click="close"></div>
  </aside>
</template>

<script>
// NOTE: remove 'focus-trap' in MDC Dialog
import {MDCDialog} from '../../material-components-web/dialog';

const CLASSNAME_ACCEPT = 'mdc-dialog__footer__button--accept';
const CLASSNAME_CANCEL = 'mdc-dialog__footer__button--cancel';
const API_CLOSE = 'close';
const EVENT_ACCEPT = 'accept';
const EVENT_CANCEL = 'cancel';

export default {
  name: 'ui-dialog',
  props: {
    open: {
      type: Boolean,
      default: false
    },
    noHeader: {
      type: Boolean,
      default: false
    },
    noFooter: {
      type: Boolean,
      default: false
    },
    scrollable: {
      type: Boolean,
      default: false
    },
    notifyAccept: {
      type: Boolean,
      default: false
    },
    notifyCancel: {
      type: Boolean,
      default: false
    },
    AcceptText: {
      type: String,
      default: 'Accept'
    },
    CancelText: {
      type: String,
      default: 'Cancel'
    }
  },
  data() {
    return {
      dialog: null
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
        this.dialog.show();
      } else {
        this.dialog.close();
      }
    }
  },
  methods: {
    close() {
      this.$emit(API_CLOSE);
    },
    accept() {
      if (this.notifyAccept) {
        this.$emit(API_CLOSE);
      }
      this.$emit(EVENT_ACCEPT);
    },
    cancel() {
      if (this.notifyCancel) {
        this.$emit(API_CLOSE);
      }
      this.$emit(EVENT_CANCEL);
    }
  },
  mounted() {
    this.dialog = new MDCDialog(this.$el);
    if (this.open) {
      this.dialog.show();
    }
  }
};
</script>
