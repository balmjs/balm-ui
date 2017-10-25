<template>
  <section :class="className" :style="style">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'ui-dialog-body',
  props: {
    scrollable: {
      type: Boolean,
      default: false
    },
    maxHeight: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      currentWindowHeight: 0
    };
  },
  computed: {
    className() {
      return {
        'mdc-dialog__body': true,
        'mdc-dialog__body--scrollable': this.scrollable
      };
    },
    style() {
      let result = {};

      if (this.maxHeight) {
        result['max-height'] = this.maxHeight + 'px';
      }

      return result;
    }
  }
};
</script>
