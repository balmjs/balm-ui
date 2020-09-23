<template>
  <fieldset :class="className">
    <slot :actionClass="UI_FORM.cssClasses.action"></slot>
  </fieldset>
</template>

<script>
import typeMixin from '../../mixins/type';

// Define text divider constants
const UI_FORM = {
  TYPES: {
    horizontal: 0,
    vertical: 1
  },
  cssClasses: {
    action: 'mdc-form__actions'
  }
};

export default {
  name: 'UiForm',
  mixins: [typeMixin],
  props: {
    // UI variants
    type: {
      type: [String, Number],
      default: 0
    },
    // UI attributes
    nowrap: {
      type: Boolean,
      default: false
    },
    labelTopAligned: {
      type: Boolean,
      default: false
    },
    labelRightAligned: {
      type: Boolean,
      default: false
    },
    // form items
    itemMarginBottom: {
      type: [String, Number],
      default: 0
    },
    // horizontal form
    labelWidth: {
      type: [String, Number],
      default: 0
    },
    labelMarginRight: {
      type: [String, Number],
      default: 0
    },
    // vertical form
    labelMarginBottom: {
      type: [String, Number],
      default: 0
    }
  },
  data() {
    return {
      UI_FORM
    };
  },
  computed: {
    isVertical() {
      return this.checkType(UI_FORM.TYPES, 'vertical') || this.type === '|';
    },
    className() {
      return {
        'mdc-form': true,
        'mdc-form--horizontal': !this.isVertical,
        'mdc-form--vertical': this.isVertical,
        'mdc-form--nowrap': this.nowrap,
        'mdc-form--label-top-aligned': this.labelTopAligned,
        'mdc-form--label-right-aligned': this.labelRightAligned
      };
    }
  },
  created() {
    if (this.isVertical) {
      if (this.labelWidth || this.labelMarginRight) {
        throw new Error(
          '[BalmUI form]: `labelWidth`/`labelMarginRight` just for `horizontal` type form'
        );
      }
    } else {
      if (this.labelMarginBottom) {
        throw new Error(
          '[BalmUI form]: `labelMarginBottom` just for `vertical` type form'
        );
      }
    }
  }
};
</script>
