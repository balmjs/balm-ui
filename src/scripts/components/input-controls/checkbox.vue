<template>
  <ui-form-field :block="block" :alignEnd="alignEnd">
    <slot name="before"></slot>
    <div ref="checkbox" :class="className">
      <input :id="id"
             v-model="currentValue"
             type="checkbox"
             class="mdc-checkbox__native-control"
             :value="isMultiple ? value : currentValue"
             :disabled="disabled"
             @change="handleChange">
      <div class="mdc-checkbox__background">
        <svg class="mdc-checkbox__checkmark"
             viewBox="0 0 24 24">
          <path class="mdc-checkbox__checkmark-path"
                fill="none"
                stroke="white"
                d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
        </svg>
        <div class="mdc-checkbox__mixedmark"></div>
      </div>
    </div>
    <label :for="id">
      <slot>{{ label }}</slot>
    </label>
    <slot name="after"></slot>
  </ui-form-field>
</template>

<script>
import { MDCFormField } from '../../../material-components-web/form-field';
import { MDCCheckbox } from '../../../material-components-web/checkbox';
import UiFormField from './form-field';
import getType from '../../helpers/typeof';
import formFieldMixin from '../../mixins/form-field';
import elementMixin from '../../mixins/element';

// Define constants
const UI_CHECKBOX = {
  EVENT: {
    CHANGE: 'change'
  }
};

export default {
  name: 'ui-checkbox',
  components: {
    UiFormField
  },
  mixins: [formFieldMixin, elementMixin],
  props: {
    // States
    model: {
      type: [Boolean, Array],
      default: false
    },
    indeterminate: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    // Element attributes
    id: String,
    value: [String, Number],
    // UI attributes
    cssOnly: {
      type: Boolean,
      default: false
    },
    label: String
  },
  data() {
    return {
      $checkbox: null,
      currentValue: this.model
    };
  },
  computed: {
    className() {
      return {
        'mdc-checkbox': true,
        'mdc-checkbox--disabled': this.disabled
      };
    },
    isMultiple() {
      return getType(this.currentValue) === 'array';
    }
  },
  watch: {
    model(val) {
      this.currentValue = val;
    },
    indeterminate(val) {
      if (this.$checkbox) {
        this.$checkbox.indeterminate = val;
      }
    }
  },
  mounted() {
    const checkbox = this.$refs.checkbox;
    this.initAttributes(checkbox.querySelector('input'));

    if (!this.$checkbox && !this.cssOnly) {
      const formField = new MDCFormField(this.$el);
      this.$checkbox = new MDCCheckbox(checkbox);
      formField.input = this.$checkbox;
      this.$checkbox.indeterminate = this.indeterminate;
    }
  },
  methods: {
    handleChange(event) {
      this.$emit(UI_CHECKBOX.EVENT.CHANGE, this.currentValue);
    }
  }
};
</script>
