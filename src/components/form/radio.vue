<template>
  <ui-form-field :alignEnd="alignEnd" :dark="dark">
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
import {MDCRadio} from '../../material-components-web/radio';
import UiFormField from './form-field';

const UI_EVENT_CHANGE = 'change';

export default {
  name: 'ui-radio',
  components: {
    UiFormField
  },
  props: {
    // attribute
    id: String,
    name: String,
    disabled: {
      type: Boolean,
      default: false
    },
    value: [String, Number, Boolean],
    model: {
      type: [String, Number, Boolean],
      required: true,
      default: false
    },
    // mdc
    label: String,
    cssOnly: {
      type: Boolean,
      default: false
    },
    // form field
    alignEnd: {
      type: Boolean,
      default: false
    },
    dark: {
      type: Boolean,
      default: false
    }
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
  methods: {
    handleChange() {
      this.$emit(UI_EVENT_CHANGE, this.currentValue);
    }
  },
  mounted() {
    if (!this.$radio && !this.cssOnly) {
      this.$radio = new MDCRadio(this.$refs.radio);
      this.$radio.checked = this.currentValue == this.value;
    }
  }
};
</script>
