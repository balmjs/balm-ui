<template>
  <div :class="className">
    <transition name="mdc-side-sheet">
      <div v-if="open" class="mdc-side-sheet__container">
        <div class="mdc-side-sheet__wrapper">
          <header v-if="hasHeader" class="mdc-side-sheet__header">
            <h4 class="mdc-side-sheet__title">
              <slot name="title"></slot>
            </h4>
            <mdc-icon-button
              v-if="closable"
              tabindex="-1"
              @click="handleClose(true)"
            >
              close
            </mdc-icon-button>
          </header>
          <div class="mdc-side-sheet__content">
            <slot></slot>
          </div>
        </div>
        <footer v-if="hasActions" class="mdc-side-sheet__actions">
          <slot name="actions"></slot>
        </footer>
      </div>
    </transition>
    <div class="mdc-side-sheet__scrim" @click="handleClose"></div>
  </div>
</template>

<script>
import MdcIconButton from '../icon-button/mdc-icon-button.vue';

// Define side sheet constants
const UI_SIDE_SHEET = {
  EVENT: {
    CHANGE: 'change'
  }
};

export default {
  name: 'UiSideSheet',
  components: {
    MdcIconButton
  },
  model: {
    prop: 'open',
    event: UI_SIDE_SHEET.EVENT.CHANGE
  },
  props: {
    // States
    open: {
      type: Boolean,
      default: false
    },
    // UI attributes
    closable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      closing: false
    };
  },
  computed: {
    className() {
      return {
        'mdc-side-sheet': true,
        'mdc-side-sheet--open': this.open,
        'mdc-side-sheet--closing': this.closing
      };
    },
    hasHeader() {
      return this.$slots.title || this.closable;
    },
    hasActions() {
      return this.$slots.actions;
    }
  },
  methods: {
    handleClose() {
      this.closing = true;
      setTimeout(() => {
        this.$emit(UI_SIDE_SHEET.EVENT.CHANGE, false);
        this.closing = false;
      }, 300);
    }
  }
};
</script>
