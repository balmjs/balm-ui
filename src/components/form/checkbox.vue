<template>
  <label :class="className" :for="id">
    <input type="checkbox" class="mdl-checkbox__input"
      :id="id"
      :name="name"
      :value="value"
      v-model="currentValue">
    <span class="mdl-checkbox__label" v-if="!hideLabel">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script>
import '../../material-design-lite/checkbox/checkbox';

const CALLBACK_INPUT = 'input';

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
    name: String,
    label: String,
    hideLabel: {
      type: Boolean,
      default: false
    },
    value: [String, Number, Boolean],
    model: {
      type: [Array, String, Number, Boolean],
      required: true,
      default: false
    },
    // Applies ripple click effect
    effect: {
      type: Boolean,
      default: false
    },
    squared: {
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
        'mdl-checkbox': true,
        'mdl-js-checkbox': true,
        'mdl-js-ripple-effect': this.effect,
        'is-upgraded': true,
        'is-checked': this.isChecked,
        'is-squared': this.squared
      };
    },
    isChecked() {
      return Array.isArray(this.model) ? this.model.indexOf(this.value) > -1 : (this.model == this.value || this.model === true);
    }
  },
  watch: {
    model(val) {
      this.currentValue = val;
    },
    currentValue(val) {
      this.$emit(CALLBACK_INPUT, val);
    }
  },
  mounted() {
    this.$ui.upgradeElement(this.$el);
  }
};
</script>
