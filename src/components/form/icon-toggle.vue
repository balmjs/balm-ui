<template>
  <label :class="className">
    <input type="checkbox"
      class="mdl-icon-toggle__input"
      :id="id"
      :name="name"
      :value="value"
      :disabled="disabled"
      v-model="currentValue"
      @change="handleChange">
    <span class="mdl-icon-toggle__label">
      <slot :className="iconClassName">
        <i :class="iconClassName">icon</i>
      </slot>
    </span>
  </label>
</template>

<script>
import '../../material-design-lite/icon-toggle/icon-toggle';
import '../../material-design-lite/ripple/ripple';
import {isArray} from '../utils/helper';

const CLASSNAME_ICON = 'material-icons';
const EVENT_CHANGE = 'change';

export default {
  name: 'ui-icon-toggle',
  props: {
    id: String,
    name: String,
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
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentValue: isArray(this.model) ? this.model : [this.model],
      iconClassName: CLASSNAME_ICON
    };
  },
  computed: {
    className() {
      return {
        'mdl-icon-toggle': true,
        'mdl-js-icon-toggle': true,
        'mdl-js-ripple-effect': this.effect,
        'mdl-icon-toggle--disabled': this.disabled,
        'is-upgraded': true,
        'is-checked': this.isChecked
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
    this.$ui.upgradeElement(this.$el, 'MaterialIconToggle');
    if (this.effect) {
      this.$ui.upgradeElement(this.$el, 'MaterialRipple');
    }
  }
};
</script>
