<template>
  <label :class="className" :for="id">
    <input type="checkbox" class="mdl-checkbox__input" :id="id" :name="name" :value="value" v-model="currentValue">
    <span class="mdl-checkbox__label" v-if="!hideLabel">
      <slot>
        <span v-text="label"></span>
      </slot>
    </span>
  </label>
</template>

<script>
import mdlCheckbox from '../../styles/checkbox/checkbox';

/**
 * @example
 * <ui-checkbox name="options[]" value="1" :model="formData.options" @input="chooseOption">Option A</ui-checkbox>
 * <ui-checkbox name="options[]" value="2" :model="formData.options" @input="chooseOption">Option B</ui-checkbox>
 * <ui-checkbox name="options[]" value="3" :model="formData.options" @input="chooseOption">Option C</ui-checkbox>
 */
export default {
  name: 'ui-checkbox',
  props: {
    id: String,
    name: {
      type: String,
      required: true
    },
    label: String,
    hideLabel: {
      type: Boolean,
      default: false
    },
    value: [String, Number, Boolean],
    model: {
      type: [Array, String, Number, Boolean],
      required: true,
      default: ''
    },
    // Applies ripple click effect
    effect: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentValue: Array.isArray(this.model) ? this.model : [this.model]
    };
  },
  computed: {
    className() {
      return {
        'mdl-checkbox': true,
        'mdl-js-checkbox': true,
        'mdl-js-ripple-effect': this.effect
      };
    }
  },
  watch: {
    model(val) {
      this.currentValue = val;
    },
    currentValue(val) {
      this.$emit('input', val);
    }
  }
};
</script>
