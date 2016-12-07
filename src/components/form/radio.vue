<template>
  <label :class="className" :for="id">
    <input type="radio" class="mdl-radio__button" :id="id" :name="name" :value="value" v-model="currentValue">
    <span class="mdl-radio__label" v-if="!hideLabel">
      <slot>
        <span v-text="label"></span>
      </slot>
    </span>
  </label>
</template>

<script>
import mdlRadio from '../../styles/radio/radio';
import mdlRipple from '../../styles/ripple/ripple';

/**
 * @example
 * <ui-radio name="gender" value="F" :model="formData.gender" @input="chooseSex">Female</ui-radio>
 * <ui-radio name="gender" value="M" :model="formData.gender" @input="chooseSex">Male</ui-radio>
 */
export default {
  name: 'ui-radio',
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
      type: [String, Number, Boolean],
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
      currentValue: this.model
    };
  },
  computed: {
    className() {
      return {
        'mdl-radio': true,
        'mdl-js-radio': true,
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
