<template>
  <ui-form-field :block="block" :alignEnd="alignEnd">
    <slot name="before"></slot>
    <div class="mdc-switch">
      <input :id="id"
             v-model="toggleValue"
             type="checkbox"
             class="mdc-switch__native-control"
             role="switch"
             :name="name"
             :true-value="trueValue"
             :false-value="falseValue"
             :disabled="disabled"
             @change="handleChange">
      <div class="mdc-switch__background">
        <div class="mdc-switch__knob"></div>
      </div>
    </div>
    <label :for="id">
      <slot>{{ label }}</slot>
    </label>
    <slot name="after"></slot>
  </ui-form-field>
</template>

<script>
import UiFormField from './form-field';
import formFieldMixin from '../../mixins/form-field';
import elementMixin from '../../mixins/element';

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
      type: [String, Number, Boolean],
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
    trueValue: {
      type: [String, Number, Boolean],
      default: true
    },
    falseValue: {
      type: [String, Number, Boolean],
      default: false
    },
    label: String
  },
  data() {
    return {
      toggleValue: this.model
    };
  },
  watch: {
    model(val) {
      this.toggleValue = val;
    }
  },
  methods: {
    handleChange() {
      this.$emit(UI_SWITCH.EVENT.CHANGE, this.toggleValue);
    }
  }
};
</script>
