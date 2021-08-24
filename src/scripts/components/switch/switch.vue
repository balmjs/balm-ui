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
        role="switch"
        :aria-checked="isOn"
        :disabled="disabled"
        v-bind="attrs"
        @change="handleChange"
      />
    </div>
  </div>
</template>

<script>
import { MDCSwitch } from '../../../material-components-web/switch';
import inputMixin from '../../mixins/input';

// Define switch constants
const UI_SWITCH = {
  EVENT: {
    CHANGE: 'change',
    SELECTED: 'selected'
  }
};

export default {
  name: 'UiSwitch',
  mixins: [inputMixin],
  model: {
    prop: 'model',
    event: UI_SWITCH.EVENT.CHANGE
  },
  props: {
    // States
    model: {
      type: Boolean,
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
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      $switch: null,
      selectedValue: this.model
    };
  },
  computed: {
    className() {
      return {
        'mdc-switch': true,
        'mdc-switch--checked': this.isOn,
        'mdc-switch--disabled': this.disabled
      };
    },
    isOn() {
      return this.selectedValue === true;
    }
  },
  watch: {
    model(val) {
      this.selectedValue = val;
      // fix(ui): trigger bug
      if (this.$switch) {
        this.$switch.checked = this.isOn;
      }
    },
    disabled(val) {
      if (this.$switch) {
        this.$switch.disabled = val;
      }
    }
  },
  mounted() {
    this.$switch = new MDCSwitch(this.$el);
  },
  methods: {
    handleChange() {
      this.$emit(UI_SWITCH.EVENT.CHANGE, this.selectedValue);
      this.$emit(
        UI_SWITCH.EVENT.SELECTED,
        this.isOn ? this.trueValue : this.falseValue
      );
    }
  }
};
</script>
