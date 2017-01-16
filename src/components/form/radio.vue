<template>
  <label :class="className" :for="id">
    <input type="radio" class="mdl-radio__button"
      :id="id"
      :name="name"
      :value="value"
      v-model="currentValue"
      @change="handleChange">
    <span class="mdl-radio__label" v-if="!hideLabel">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script>
import '../../material-design-lite/radio/radio';
import '../../material-design-lite/ripple/ripple';

const EVENT_CHANGE = 'change';

/**
 * @example
 * <ui-radio name="gender" value="F" :model="formData.gender" @input="chooseSex">Female</ui-radio>
 * <ui-radio name="gender" value="M" :model="formData.gender" @input="chooseSex">Male</ui-radio>
 */
export default {
  name: 'ui-radio',
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
        'mdl-js-ripple-effect': this.effect,
        'is-upgraded': true,
        'is-checked': this.isChecked
      };
    },
    isChecked() {
      return this.currentValue === this.value;
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
    this.$ui.upgradeElement(this.$el, 'MaterialRadio');
    if (this.effect) {
      this.$ui.upgradeElement(this.$el, 'MaterialRipple');
    }
  }
};
</script>
