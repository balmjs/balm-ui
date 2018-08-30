<template>
  <header :class="className">
    <slot><!-- Toolbar row --></slot>
  </header>
</template>

<script>
import { MDCToolbar } from '../../../material-components-web/toolbar';

// Define constants
const UI_TOOLBAR = {
  FIXED_LASTROW_ONLY: 'lastrow',
  FLEXIBLE_CUSTOM_BEHAVIOR: 'custom',
  EVENT: {
    CHANGE: 'change'
  }
};

export default {
  name: 'ui-toolbar',
  props: {
    // UI attributes
    fixed: {
      type: Boolean,
      default: false
    },
    waterfall: {
      type: Boolean,
      default: false
    },
    fixedLastrow: {
      type: Boolean,
      default: false
    },
    flexible: {
      type: Boolean,
      default: false
    },
    defaultFlexible: {
      type: Boolean,
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
    isFixed() {
      return this.fixed || this.waterfall || this.fixedLastrow;
    },
    className() {
      let isFlexible = this.flexible || this.defaultFlexible;

      return {
        'mdc-toolbar': true,
        'mdc-toolbar--fixed': this.isFixed,
        'mdc-toolbar--waterfall': this.waterfall,
        'mdc-toolbar--fixed-lastrow-only': this.fixedLastrow,
        'mdc-toolbar--flexible': isFlexible,
        'mdc-toolbar--flexible-default-behavior': this.defaultFlexible
      };
    }
  },
  mounted() {
    this.$toolbar = new MDCToolbar(this.$el);

    this.$toolbar.listen(
      `MDCToolbar:${UI_TOOLBAR.EVENT.CHANGE}`,
      ({ detail }) => {
        this.$emit(UI_TOOLBAR.EVENT.CHANGE, detail.flexibleExpansionRatio); // flexibleExpansionRatio: number
      }
    );

    if (this.isFixed) {
      this.fixedAdjustContent();
    }
  },
  methods: {
    fixedAdjustContent() {
      let element = document.querySelector(this.contentSelector);
      if (element) {
        this.$toolbar.fixedAdjustElement = element;
      }
    }
  }
};
</script>
