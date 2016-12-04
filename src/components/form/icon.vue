<template>
  <label :class="className" :for="id">
    <input type="checkbox" class="mdl-icon-toggle__input" :id="id" :name="name" :value="value" v-model="currentValue">
    <span class="mdl-icon-toggle__label">
      <slot>
        <i class="material-icons">icon</i>
      </slot>
    </span>
  </label>
</template>

<script>
import mdlIconToggle from '../../styles/icon-toggle/icon-toggle';

/**
 * @example
 * <ui-icon name="icons[]" value="a" :model="formData.icons" @input="chooseIcon">Icon A</ui-icon>
 * <ui-icon name="icons[]" value="b" :model="formData.icons" @input="chooseIcon">Icon B</ui-icon>
 * <ui-icon name="icons[]" value="c" :model="formData.icons" @input="chooseIcon">Icon C</ui-icon>
 */
export default {
  name: 'ui-icon',
  props: {
    id: String,
    name: {
      type: String,
      required: true
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
        'mdl-icon-toggle': true,
        'mdl-js-icon-toggle': true,
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
