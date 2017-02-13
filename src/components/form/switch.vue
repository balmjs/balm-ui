<template>
  <label :class="className">
    <input type="checkbox"
      class="mdl-switch__input"
      :id="id"
      :name="name"
      :value="value"
      :disabled="disabled"
      v-model="currentValue"
      @change="handleChange">
    <span class="mdl-switch__label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script>
import '../../material-design-lite/switch/switch';
import '../../material-design-lite/ripple/ripple';

const EVENT_CHANGE = 'change';

export default {
  name: 'ui-switch',
  props: {
    id: String,
    name: String,
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
        'mdl-switch': true,
        'mdl-js-switch': true,
        'mdl-js-ripple-effect': this.effect,
        'mdl-switch--disabled': this.disabled,
        'is-upgraded': true,
        'is-checked': this.isChecked
      };
    },
    isChecked() {
      return this.currentValue === this.value || this.currentValue === true;
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
    this.$ui.upgradeElement(this.$el, 'MaterialSwitch');
    if (this.effect) {
      this.$ui.upgradeElement(this.$el, 'MaterialRipple');
    }
  }
};
</script>
