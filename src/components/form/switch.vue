<template>
  <label :class="className" :for="id">
    <input type="checkbox" class="mdl-switch__input"
      :id="id"
      :name="name"
      :value="value"
      v-model="currentValue">
    <span class="mdl-switch__label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script>
import '../../styles/switch/switch';

const CALLBACK_INPUT = 'input';

/**
 * @example
 * <ui-switch name="open" :model="formData.open" @input="changeSwitch">On/Off</ui-switch>
 */
export default {
  name: 'ui-switch',
  props: {
    id: String,
    name: {
      type: String,
      required: true
    },
    label: String,
    value: Boolean,
    model: {
      type: Boolean,
      required: true
    },
    // Applies ripple click effect
    effect: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentValue: this.model
    };
  },
  computed: {
    className() {
      return {
        'mdl-switch': true,
        'mdl-js-switch': true,
        'mdl-js-ripple-effect': this.effect
      };
    }
  },
  watch: {
    model(val) {
      this.currentValue = val;
    },
    currentValue(val) {
      this.$emit(CALLBACK_INPUT, val);
    }
  }
};
</script>
