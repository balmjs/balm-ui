<template>
  <button
    :class="className"
    type="button"
    role="switch"
    :aria-checked="selectedValue"
    :disabled="disabled"
    @click="handleChange"
  >
    <div class="mdc-switch__track"></div>
    <div class="mdc-switch__handle-track">
      <div class="mdc-switch__handle">
        <div class="mdc-switch__shadow">
          <div class="mdc-elevation-overlay"></div>
        </div>
        <div class="mdc-switch__ripple"></div>
        <div class="mdc-switch__icons">
          <svg
            class="mdc-switch__icon mdc-switch__icon--on"
            viewBox="0 0 24 24"
          >
            <path
              d="M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"
            />
          </svg>
          <svg
            class="mdc-switch__icon mdc-switch__icon--off"
            viewBox="0 0 24 24"
          >
            <path d="M20 13H4v-2h16v2z" />
          </svg>
        </div>
      </div>
    </div>
  </button>
</template>

<script>
import { MDCSwitch } from '../../../material-components-web/switch';
import domMixin from '../../mixins/dom';

// Define switch constants
const UI_SWITCH = {
  EVENT: {
    CHANGE: 'update:modelValue',
    SELECTED: 'selected'
  }
};

export default {
  name: 'UiSwitch',
  mixins: [domMixin],
  props: {
    // States
    modelValue: {
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
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: [UI_SWITCH.EVENT.CHANGE, UI_SWITCH.EVENT.SELECTED],
  data() {
    return {
      $switch: null,
      selectedValue: this.modelValue
    };
  },
  computed: {
    className() {
      return {
        'mdc-switch': true,
        'mdc-switch--unselected': !this.selectedValue,
        'mdc-switch--selected': this.selectedValue
      };
    }
  },
  watch: {
    modelValue(val) {
      this.triggerSwitch(val);
    },
    disabled(val) {
      if (this.$switch) {
        this.$switch.disabled = val;
      }
    }
  },
  mounted() {
    this.init();
  },
  updated() {
    // NOTE: Once for init, mdc switch has bug
    this.init();
  },
  methods: {
    init() {
      this.$switch = new MDCSwitch(this.el);
      this.triggerSwitch();
      this.$switch.selected = this.selectedValue;
    },
    triggerSwitch(selected = this.modelValue) {
      this.selectedValue = selected;
      // this.$switch.selected = selected; // TODO: mdc switch has bug
    },
    handleChange() {
      const selected = !this.selectedValue;

      this.$emit(UI_SWITCH.EVENT.CHANGE, selected);
      this.$emit(
        UI_SWITCH.EVENT.SELECTED,
        selected ? this.trueValue : this.falseValue
      );
    }
  }
};
</script>
