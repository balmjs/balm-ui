<template>
  <ui-form-field :block="block" :alignEnd="alignEnd" :dark="dark">
    <slot name="before"></slot>
    <div ref="checkbox" :class="className">
      <input type="checkbox"
             class="mdc-checkbox__native-control"
             :id="id"
             :name="name"
             :disabled="disabled"
             :value="isMultiple ? value : false"
             v-model="currentValue"
             @change="handleChange">
      <div class="mdc-checkbox__background">
        <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
          <path class="mdc-checkbox__checkmark__path"
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
import {MDCFormField} from '../../../material-components-web/form-field';
import {MDCCheckbox} from '../../../material-components-web/checkbox';
import UiFormField from './form-field';
import {isArray} from '../../helpers';
import formFieldMixin from '../../mixins/form-field';

const UI_EVENT_CHANGE = 'change';

export default {
  name: 'ui-checkbox',
  components: {
    UiFormField
  },
  mixins: [
    formFieldMixin
  ],
  props: {
    // state
    model: {
      type: [Array, String, Number, Boolean],
      default: false
    },
    // element attributes
    id: String,
    name: String,
    disabled: {
      type: Boolean,
      default: false
    },
    value: [String, Number, Boolean],
    // ui attributes
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
        'mdc-checkbox--disabled': this.disabled,
        'mdc-checkbox--theme-dark': this.dark
      };
    },
    isMultiple() {
      return isArray(this.currentValue);
    }
  },
  watch: {
    model(val) {
      this.currentValue = val;
    },
    // disabled(val) {
    //   if (this.$checkbox && val) {
    //     this.$checkbox.indeterminate = val;
    //   }
    // }
  },
  mounted() {
    if (!this.$checkbox && !this.cssOnly) {
      const formField = new MDCFormField(this.$el);
      this.$checkbox = new MDCCheckbox(this.$refs.checkbox);
      formField.input = this.$checkbox;
      // this.$checkbox.indeterminate = this.disabled;
    }
  },
  methods: {
    handleChange() {
      this.$emit(UI_EVENT_CHANGE, this.currentValue);
    }
  }
};
</script>
