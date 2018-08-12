<template>
  <ui-form-field :block="block" :alignEnd="alignEnd">
    <slot name="before"></slot>
    <div ref="switch" :class="className">
      <div class="mdc-switch__track"></div>
      <div class="mdc-switch__thumb-underlay">
        <div class="mdc-switch__thumb">
          <input :id="id"
            v-model="toggleValue"
            type="checkbox"
            class="mdc-switch__native-control"
            role="switch"
            :name="name"
            :true-value="trueValue"
            :false-value="falseValue"
            :disabled="disabled"
            v-bind="attrs"
            @change="handleChange">
        </div>
      </div>
    </div>
    <label :for="id">
      <slot>{{ label }}</slot>
    </label>
    <slot name="after"></slot>
  </ui-form-field>
</template>

<script>
import { MDCSwitch } from '../../../material-components-web/switch';
import UiFormField from './form-field';
import formFieldMixin from '../../mixins/form-field';
import elementMixin from '../../mixins/element';

// Define constants
const UI_SWITCH = {
  EVENT: {
    CHANGE: 'change'
  }
};

export default {
  name: 'ui-switch',
  components: {
    UiFormField
  },
  mixins: [formFieldMixin, elementMixin],
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
    disabled: {
      type: Boolean,
      default: false
    },
    // Element attributes
    id: String,
    name: String,
    // UI attributes
    label: String
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
    new MDCSwitch(this.$refs.switch);
  },
  methods: {
    handleChange() {
      this.$emit(UI_SWITCH.EVENT.CHANGE, this.toggleValue);
    }
  }
};
</script>
