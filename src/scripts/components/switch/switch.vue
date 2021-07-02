<template>
  <div :class="className">
    <div class="mdc-switch__ripple"></div>
    <div class="mdc-switch__track"></div>
    <div class="mdc-switch__thumb-underlay">
      <div class="mdc-switch__thumb"></div>
      <input
        :id="inputId"
        v-model="selectedValue"
        type="checkbox"
        class="mdc-switch__native-control"
        :name="name"
        :true-value="trueValue"
        :false-value="falseValue"
        role="switch"
        :aria-checked="checked"
        :disabled="disabled"
        v-bind="attrs"
        @change="handleChange"
      />
    </div>
  </div>
</template>

<script>
import { MDCSwitch } from '../../../material-components-web/switch';
import domMixin from '../../mixins/dom';
import inputMixin from '../../mixins/input';

// Define switch constants
const UI_SWITCH = {
  EVENT: {
    CHANGE: 'update:modelValue'
  }
};

export default {
  name: 'UiSwitch',
  mixins: [domMixin, inputMixin],
  props: {
    // States
    modelValue: {
      type: null, // NOTE: Boolean only
      default: false
    },
    trueValue: {
      type: [Boolean, Number, String],
      default: true
    },
    falseValue: {
      type: [Boolean, Number, String],
      default: false
    },
    // <input type="checkbox"> attributes
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: [UI_SWITCH.EVENT.CHANGE],
  data() {
    return {
      $switch: null,
      selectedValue: this.modelValue
    };
  },
  computed: {
    checked() {
      return this.selectedValue === this.trueValue;
    },
    className() {
      return {
        'mdc-switch': true,
        'mdc-switch--disabled': this.disabled,
        'mdc-switch--checked': this.checked
      };
    }
  },
  watch: {
    modelValue(val) {
      this.selectedValue = val;
      this.triggerChecked();
    },
    disabled(val) {
      if (this.$switch) {
        this.$switch.disabled = val;
      }
    }
  },
  mounted() {
    this.$switch = new MDCSwitch(this.el);
    this.triggerChecked();
  },
  methods: {
    triggerChecked() {
      this.$switch.checked = this.selectedValue === this.trueValue;
    },
    handleChange() {
      this.$emit(UI_SWITCH.EVENT.CHANGE, this.selectedValue);
    }
  }
};
</script>
