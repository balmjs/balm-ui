<template>
  <div :class="className">
    <div class="mdc-switch__track"></div>
    <div class="mdc-switch__thumb-underlay">
      <div class="mdc-switch__thumb"></div>
      <input
        :id="id"
        v-model="toggleValue"
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
import elementMixin from '../../mixins/element';

// Define switch constants
const UI_SWITCH = {
  EVENT: {
    CHANGE: 'change'
  }
};

export default {
  name: 'UiSwitch',
  mixins: [elementMixin],
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
    // Element attributes
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
      toggleValue: this.model
    };
  },
  computed: {
    checked() {
      return this.toggleValue;
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
      this.toggleValue = val;
      // NOTE: fix trigger bug
      this.$switch.checked = this.toggleValue === this.trueValue;
    }
  },
  mounted() {
    this.$switch = new MDCSwitch(this.$el);
  },
  methods: {
    handleChange() {
      this.$emit(UI_SWITCH.EVENT.CHANGE, this.toggleValue);
    }
  }
};
</script>
