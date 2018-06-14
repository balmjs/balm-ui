<template>
  <ui-form-field :block="block" :alignEnd="alignEnd">
    <slot name="before"></slot>
    <div ref="checkbox" :class="className">
      <input :id="id"
             v-model="checkedValue"
             type="checkbox"
             class="mdc-checkbox__native-control"
             :name="name"
             :value="value"
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
import formFieldMixin from '../../mixins/form-field';
import elementMixin from '../../mixins/element';
import getType from '../../helpers/typeof';

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
  model: {
    prop: 'model',
    event: UI_CHECKBOX.EVENT.CHANGE
  },
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
    name: String,
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
      checkedValue: this.model
    };
  },
  computed: {
    className() {
      return {
        'mdc-checkbox': true,
        'mdc-checkbox--disabled': this.disabled
      };
    }
  },
  watch: {
    model(val) {
      this.checkedValue = val;
    },
    indeterminate(val) {
      this.$checkbox.indeterminate =
        val === this.$checkbox.indeterminate ? !val : val;
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
      let result =
        getType(this.checkedValue) === 'array'
          ? Object.assign([], this.checkedValue)
          : this.checkedValue;

      this.$emit(UI_CHECKBOX.EVENT.CHANGE, result);
    }
  }
};
</script>
