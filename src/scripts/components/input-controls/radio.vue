<template>
  <ui-form-field :block="block" :alignEnd="alignEnd">
    <slot name="before"></slot>
    <div ref="radio" :class="className">
      <input :id="id"
        v-model="checkedValue"
        type="radio"
        class="mdc-radio__native-control"
        :name="name"
        :value="value"
        :disabled="disabled"
        v-bind="attrs"
        @change="handleChange">
      <div class="mdc-radio__background">
        <div class="mdc-radio__outer-circle"></div>
        <div class="mdc-radio__inner-circle"></div>
      </div>
    </div>
    <label v-if="!noLabel" :for="id">
      <slot>{{ label }}</slot>
    </label>
    <slot name="after"></slot>
  </ui-form-field>
</template>

<script>
import { MDCFormField } from '../../../material-components-web/form-field';
import { MDCRadio } from '../../../material-components-web/radio';
import UiFormField from './form-field';
import formFieldMixin from '../../mixins/form-field';
import elementMixin from '../../mixins/element';

// Define constants
const UI_RADIO = {
  EVENT: {
    CHANGE: 'change'
  }
};

export default {
  name: 'ui-radio',
  components: {
    UiFormField
  },
  mixins: [formFieldMixin, elementMixin],
  model: {
    prop: 'model',
    event: UI_RADIO.EVENT.CHANGE
  },
  props: {
    // States
    model: [String, Number],
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
    label: String,
    // For `<ui-item>`
    noLabel: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      $radio: null,
      checkedValue: this.model
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
      this.checkedValue = val;
    }
  },
  mounted() {
    if (!this.cssOnly) {
      this.$radio = new MDCRadio(this.$refs.radio);
      this.$radio.checked = this.checkedValue == this.value;

      if (!this.noLabel) {
        const formField = new MDCFormField(this.$el);
        formField.input = this.$radio;
      }
    }
  },
  methods: {
    handleChange() {
      this.$emit(UI_RADIO.EVENT.CHANGE, this.checkedValue);
    }
  }
};
</script>
