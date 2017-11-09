<template>
  <ui-form-field :block="block" :alignEnd="alignEnd" :dark="dark">
    <slot name="before"></slot>
    <div ref="radio" :class="className">
      <input type="radio"
             class="mdc-radio__native-control"
             :id="id"
             :name="name"
             :disabled="disabled"
             :value="value"
             v-model="currentValue"
             @change="handleChange">
      <div class="mdc-radio__background">
        <div class="mdc-radio__outer-circle"></div>
        <div class="mdc-radio__inner-circle"></div>
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
import {MDCRadio} from '../../../material-components-web/radio';
import UiFormField from './form-field';
import formFieldMixin from '../../mixins/form-field';

const UI_EVENT_CHANGE = 'change';

export default {
  name: 'ui-radio',
  components: {
    UiFormField
  },
  mixins: [
    formFieldMixin
  ],
  props: {
    // state
    model: {
      type: [String, Number, Boolean],
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
      $radio: null,
      currentValue: this.model
    };
  },
  computed: {
    className() {
      return {
        'mdc-radio': true,
        'mdc-radio--disabled': this.disabled
      };
    }
  },
  watch: {
    model(val) {
      this.currentValue = val;
    }
  },
  mounted() {
    if (!this.$radio && !this.cssOnly) {
      const formField = new MDCFormField(this.$el);
      this.$radio = new MDCRadio(this.$refs.radio);
      formField.input = this.$radio;
      this.$radio.checked = this.currentValue == this.value;
    }
  },
  methods: {
    handleChange() {
      this.$emit(UI_EVENT_CHANGE, this.currentValue);
    }
  }
};
</script>
