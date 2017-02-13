<template>
  <label :class="className">
    <input type="radio"
      class="mdl-radio__button"
      :id="id"
      :name="name"
      :value="value"
      :disabled="disabled"
      v-model="currentValue"
      @change="handleChange">
    <span v-if="!hideLabel" class="mdl-radio__label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script>
import '../../material-design-lite/radio/radio';
import '../../material-design-lite/ripple/ripple';

const EVENT_CHANGE = 'change';

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
    },
    disabled: {
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
        'mdl-radio--disabled': this.disabled,
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
