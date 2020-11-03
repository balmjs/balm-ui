<template>
  <div :class="className">
    <div class="mdc-switch__track"></div>
    <div class="mdc-switch__thumb-underlay">
      <div class="mdc-switch__thumb"></div>
      <input
        :id="inputId"
        v-model="selectedValue"
        type="checkbox"
        class="mdc-switch__native-control"
        role="switch"
        :name="name"
        :true-value="trueValue"
        :false-value="falseValue"
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
    CHANGE: 'change'
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
  data() {
    return {
      $switch: null,
      selectedValue: this.model
    };
  },
  computed: {
    checked() {
      return this.selectedValue;
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
    model(val) {
      this.selectedValue = val;
      // fix(ui): trigger bug
      this.$switch.checked = this.selectedValue === this.trueValue;
    }
  },
  mounted() {
    this.$switch = new MDCSwitch(this.$el);
  },
  methods: {
    handleChange() {
      this.$emit(UI_SWITCH.EVENT.CHANGE, this.selectedValue);
    }
  }
};
</script>
