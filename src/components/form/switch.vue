<template>
  <label :class="className" :for="id">
    <input type="checkbox" class="mdl-switch__input"
      :id="id"
      :name="name"
      :value="value"
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

const CALLBACK_CHANGE = 'change';

/**
 * @example
 * <ui-switch name="open" :model="formData.open" @input="changeSwitch">On/Off</ui-switch>
 */
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
    }
  },
  methods: {
    handleChange() {
      this.$emit(CALLBACK_CHANGE, this.currentValue);
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
