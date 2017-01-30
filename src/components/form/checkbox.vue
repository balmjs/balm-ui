<template>
  <label :class="className" :for="id">
    <input type="checkbox" class="mdl-checkbox__input"
      :id="id"
      :name="name"
      :value="value"
      v-model="currentValue"
      @change="handleChange">
    <span class="mdl-checkbox__label" v-if="!hideLabel">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script>
import '../../material-design-lite/checkbox/checkbox';
import '../../material-design-lite/ripple/ripple';
import {isArray} from '../utils/helper';

const EVENT_CHANGE = 'change';

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
    filled: {
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
        'is-filled': this.filled
      };
    },
    isChecked() {
      return isArray(this.currentValue)
        ? this.currentValue.indexOf(this.value) > -1
        : (this.currentValue === this.value || this.currentValue === true);
    }
  },
  watch: {
    model(val) {
      this.currentValue = val;
    }
  },
  methods: {
    handleChange() {
      this.$emit(EVENT_CHANGE, this.currentValue);
    }
  },
  mounted() {
    this.$ui.upgradeElement(this.$el, 'MaterialCheckbox');
    if (this.effect) {
      this.$ui.upgradeElement(this.$el, 'MaterialRipple');
    }
  }
};
</script>
