<template>
  <div :class="className">
    <transition name="mdc-slide">
      <div v-if="open" class="mdc-bottom-sheet__content">
        <slot></slot>
      </div>
    </transition>
    <div class="mdc-bottom-sheet__scrim" @click="handleClose"></div>
  </div>
</template>

<script>
// Define bottom sheet constants
const UI_BOTTOM_SHEET = {
  EVENT: {
    CHANGE: 'change'
  }
};

export default {
  name: 'UiBottomSheet',
  model: {
    prop: 'open',
    event: UI_BOTTOM_SHEET.EVENT.CHANGE
  },
  props: {
    // States
    open: {
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
        'mdc-bottom-sheet': true,
        'mdc-bottom-sheet--open': this.open,
        'mdc-bottom-sheet--closing': this.closing
      };
    }
  },
  methods: {
    handleClose() {
      this.closing = true;
      setTimeout(() => {
        this.$emit(UI_BOTTOM_SHEET.EVENT.CHANGE, false);
        this.closing = false;
      }, 300);
    }
  }
};
</script>
