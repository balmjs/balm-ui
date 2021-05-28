<template>
  <div :class="className" :style="style">
    <slot>
      <!-- Form item: checkbox or radio + label -->
    </slot>
  </div>
</template>

<script>
import { MDCFormField } from '../../../material-components-web/form-field';
import domMixin from '../../mixins/dom';

export default {
  name: 'UiFormField',
  mixins: [domMixin],
  props: {
    // UI attributes
    nowrap: {
      type: Boolean,
      default: false
    },
    alignEnd: {
      type: Boolean,
      default: false
    },
    spaceBetween: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      $formField: null
    };
  },
  computed: {
    className() {
      return {
        'mdc-form-field': true,
        'mdc-form-field--nowrap': this.nowrap,
        'mdc-form-field--align-end': this.alignEnd,
        'mdc-form-field--space-between': this.spaceBetween
      };
    },
    hasFormParent() {
      return this.$parent.$.type.name === 'UiForm';
    },
    style() {
      return this.hasFormParent && this.$parent.itemMarginBottom
        ? {
            'margin-bottom': `${this.$parent.itemMarginBottom}px`
          }
        : 0;
    },
    // horizontal form
    flexBasis() {
      return this.hasFormParent && this.$parent.labelWidth
        ? +this.$parent.labelWidth
        : 0;
    },
    marginRight() {
      return this.hasFormParent && this.$parent.labelMarginRight
        ? +this.$parent.labelMarginRight
        : 0;
    },
    actionPaddingLeft() {
      return this.$parent.actionAlign === 'left' &&
        (this.flexBasis || this.marginRight)
        ? this.flexBasis + this.marginRight
        : 0;
    },
    // vertical form
    marginBottom() {
      return this.hasFormParent && this.$parent.labelMarginBottom
        ? +this.$parent.labelMarginBottom
        : 0;
    }
  },
  mounted() {
    this.$formField = new MDCFormField(this.el);

    this.formLabel();
  },
  methods: {
    formLabel() {
      if (this.$slots.default) {
        // TODO: get dom element by slot
        const label = this.$el.querySelector('label');

        if (label) {
          ['flexBasis', 'marginRight', 'marginBottom'].forEach((key) => {
            if (this[key]) {
              label.style[key] = `${this[key]}px`;
            }
          });
        }

        if (this.el && this.el.classList.contains('mdc-form__actions') && this.actionPaddingLeft) {
          this.el.style.paddingLeft = `${this.actionPaddingLeft}px`;
        }
      }
    }
  }
};
</script>
