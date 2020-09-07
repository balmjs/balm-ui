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
    }
    // horizontal form
    // labelWidth: {
    //   type: Number,
    //   default: 0
    // },
    // labelMarginRight: {
    //   type: Number,
    //   default: 0
    // },
    // // vertical form
    // labelMarginBottom: {
    //   type: Number,
    //   default: 0
    // }
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
    // style() {
    //   let result = {};

    //   if (this.isVertical) {
    //     if (this.labelWidth || this.labelMarginRight) {
    //       console.warn(
    //         '`labelWidth`/`labelMarginRight` just for `horizontal` type form'
    //       );
    //     }

    //     if (this.labelMarginBottom) {
    //       result['margin-bottom'] = `${this.labelMarginBottom}px`;
    //     }
    //   } else {
    //     if (this.labelMarginBottom) {
    //       console.warn('`labelMarginBottom` just for `vertical` type form');
    //     }

    //     if (this.labelWidth) {
    //       result['flex-basis'] = `${this.labelWidth}px`;
    //     }

    //     if (this.labelMarginRight) {
    //       result['margin-right'] = `${this.labelMarginRight}px`;
    //     }
    //   }

    //   return result;
    // }
  }
};
</script>
