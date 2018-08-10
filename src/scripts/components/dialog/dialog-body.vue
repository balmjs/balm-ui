<template>
  <section :class="className" :style="style">
    <slot></slot>
  </section>
</template>

<script>
import getType from '../../utils/typeof';

export default {
  name: 'ui-dialog-body',
  props: {
    scrollable: {
      type: Boolean,
      default: false
    },
    maxHeight: {
      type: [Number, String],
      default: 0
    }
  },
  data() {
    return {
      windowHeight: 0,
      nonDialogBodyHeight: 0
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
      let result = null;
      let maxHeight = +this.maxHeight;

      if (maxHeight) {
        let currentMaxHeight =
          Math.round(this.windowHeight / 1.618) - this.nonDialogBodyHeight;
        let goldenRatioHeight = Math.max(
          195, // The body of a scrollable dialog is styled with a default max-height
          Math.min(maxHeight, currentMaxHeight)
        );

        result = {
          'max-height': `${goldenRatioHeight}px`
        };
      }

      return result;
    }
  },
  mounted() {
    this.initHeight();
    this.handleResize();
    window.addEventListener('balmResize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('balmResize', this.handleResize);
  },
  methods: {
    initHeight() {
      let dialogHeader = this.$parent.$el.querySelector('.mdc-dialog__header');
      let dialogFooter = this.$parent.$el.querySelector('.mdc-dialog__footer');

      if (dialogHeader) {
        this.nonDialogBodyHeight += dialogHeader.clientHeight;
      }
      if (dialogFooter) {
        this.nonDialogBodyHeight += dialogFooter.clientHeight;
      }
    },
    handleResize() {
      this.windowHeight =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;
    }
  }
};
</script>
