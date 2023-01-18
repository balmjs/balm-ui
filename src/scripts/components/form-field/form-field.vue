<template>
  <div :class="className" :style="style">
    <slot>
      <!-- Form item: checkbox or radio + label -->
    </slot>
  </div>
</template>

<script>
import { MDCFormField } from '../../../material-components-web/form-field';

export default {
  name: 'UiFormField',
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
      $formField: null,
      form: null
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
    isCustomFormItem() {
      return this.$el.classList.contains('mdc-form__item');
    },
    style() {
      return this.form && this.form.itemMarginBottom
        ? {
            'margin-bottom': `${this.form.itemMarginBottom}px`
          }
        : 0;
    },
    // horizontal form
    flexBasis() {
      return this.form && this.form.labelWidth ? +this.form.labelWidth : 0;
    },
    marginRight() {
      return this.form && this.form.labelMarginRight
        ? +this.form.labelMarginRight
        : 0;
    },
    actionPaddingLeft() {
      return this.form &&
        this.form.actionAlign === 'left' &&
        (this.flexBasis || this.marginRight)
        ? this.flexBasis + this.marginRight
        : 0;
    },
    // vertical form
    marginBottom() {
      return this.form && this.form.labelMarginBottom
        ? +this.form.labelMarginBottom
        : 0;
    }
  },
  mounted() {
    this.$formField = new MDCFormField(this.$el);

    this.form = this.getFrom();

    this.formLabel();
  },
  methods: {
    getFrom(self = this) {
      const parent = self.$parent;

      return /UiForm$/.test(parent.$vnode?.tag)
        ? parent
        : this.isCustomFormItem
        ? this.getFrom(parent)
        : null;
    },
    formLabel() {
      if (this.$slots.default) {
        const label = this.$slots.default.find(
          (component) => component.tag === 'label'
        );

        if (label) {
          ['flexBasis', 'marginRight', 'marginBottom'].forEach((key) => {
            if (this[key]) {
              label.elm.style[key] = `${this[key]}px`;
            }
          });
        }

        const formFieldEl = this.$el;
        if (
          formFieldEl &&
          formFieldEl.classList.contains('mdc-form__actions') &&
          this.actionPaddingLeft
        ) {
          formFieldEl.style['padding-left'] = `${this.actionPaddingLeft}px`;
        }
      }
    }
  }
};
</script>
