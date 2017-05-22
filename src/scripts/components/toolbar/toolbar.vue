<template>
  <header :class="className">
    <slot><!-- toolbar row --></slot>
  </header>
</template>

<script>
import {MDCToolbar} from '../../material-components-web/toolbar';
import {isString} from '../../helpers';

const MDC_EVENT_CHANGE = 'MDCToolbar:change';
const UI_EVENT_CHANGE = 'change';

export default {
  name: 'ui-toolbar',
  props: {
    // mdc
    fixed: {
      type: [Boolean, String],
      default: false
    },
    waterfall: {
      type: Boolean,
      default: false
    },
    flexible: {
      type: [Boolean, String],
      default: false
    },
    contentSelector: {
      type: String,
      default: '.mdc-toolbar-fixed-adjust'
    }
  },
  data() {
    return {
      $toolbar: null
    };
  },
  computed: {
    isFixedLastrowOnly() {
      return isString(this.fixed)
        ? this.fixed.toLowerCase() === 'lastrow'
        : false;
    },
    noFlexibleDefaultBehavior() {
      return isString(this.flexible)
        ? this.flexible.toLowerCase() === 'custom'
        : false
    },
    className() {
      return {
        'mdc-toolbar': true,
        'mdc-toolbar--fixed': this.fixed || this.waterfall,
        'mdc-toolbar--waterfall': this.waterfall,
        'mdc-toolbar--fixed-lastrow-only': this.isFixedLastrowOnly,
        'mdc-toolbar--flexible': this.flexible,
        'mdc-toolbar--flexible-default-behavior': !this.noFlexibleDefaultBehavior
      };
    }
  },
  methods: {
    fixedAdjustContent(selectors = this.contentSelector) {
      let element = document.querySelector(selectors);
      if (element) {
        this.$toolbar.fixedAdjustElement = element;
      }
    }
  },
  watch: {
    fixedAdjustElement(val) {
      if (this.$toolbar) {
        this.fixedAdjustContent(val);
      }
    }
  },
  mounted() {
    if (!this.$toolbar) {
      this.$toolbar = new MDCToolbar(this.$el);
      this.$toolbar.listen(MDC_EVENT_CHANGE, ({detail}) => {
        this.$emit(UI_EVENT_CHANGE, detail.flexibleExpansionRatio);
      });
      this.fixedAdjustContent();
    }
  }
};
</script>
