<template>
  <div :class="className">
    <slot
      :itemClass="UI_FORM.cssClasses.item"
      :subitemClass="UI_FORM.cssClasses.subitem"
      :actionClass="UI_FORM.cssClasses.actions"
    ></slot>
  </div>
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
    item: 'mdc-form__item',
    subitem: 'mdc-form__subitem',
    actions: 'mdc-form__actions'
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
    labelTopRightAligned: {
      type: Boolean,
      default: false
    },
    // form items
    itemMarginBottom: {
      type: [String, Number],
      default: 0
    },
    actionAlign: {
      type: String,
      default: 'left'
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
        'mdc-form--label-right-aligned': this.labelRightAligned,
        'mdc-form--label-top-right-aligned': this.labelTopRightAligned,
        'mdc-form--actions-center': this.actionAlign === 'center',
        'mdc-form--actions-right': this.actionAlign === 'right'
      };
    }
  },
  created() {
    if (this.isVertical) {
      if (this.labelWidth || this.labelMarginRight) {
        throw new Error(
          '`labelWidth`/`labelMarginRight` just for `horizontal` type form'
        );
      }
    } else {
      if (this.labelMarginBottom) {
        throw new Error('`labelMarginBottom` just for `vertical` type form');
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$children
        .filter((child) => child.$el.classList.contains('mdc-form-field'))
        .forEach((child) => child.$el.classList.add(UI_FORM.cssClasses.item));
    });
  }
};
</script>
