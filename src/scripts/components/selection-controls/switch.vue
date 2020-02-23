<template>
  <div :class="className">
    <div class="mdc-switch__track"></div>
    <div class="mdc-switch__thumb-underlay">
      <div class="mdc-switch__thumb">
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
  name: 'ui-switch',
  mixins: [elementMixin],
  model: {
    prop: 'model',
    event: UI_SWITCH.EVENT.CHANGE
  },
  props: {
    // States
    model: {
      type: [Boolean, Number, String],
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
    name: String,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      toggleValue: this.model
    };
  },
  computed: {
    className() {
      return {
        'mdc-switch': true,
        'mdc-switch--disabled': this.disabled
      };
    }
  },
  watch: {
    model(val) {
      this.toggleValue = val;
    }
  },
  mounted() {
    new MDCSwitch(this.$el);
  },
  methods: {
    handleChange() {
      this.$emit(UI_SWITCH.EVENT.CHANGE, this.toggleValue);
    }
  }
};
</script>
