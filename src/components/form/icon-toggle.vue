<template>
  <label :class="className" :for="id">
    <input type="checkbox" class="mdl-icon-toggle__input"
      :id="id"
      :name="name"
      :value="value"
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

const CLASSNAME_ICON = 'material-icons';
const CALLBACK_CHANGE = 'change';

/**
 * @example
 * <ui-icon-toggle name="icons[]" value="a" :model="formData.icons" @input="chooseIcon">Icon A</ui-icon-toggle>
 * <ui-icon-toggle name="icons[]" value="b" :model="formData.icons" @input="chooseIcon">Icon B</ui-icon-toggle>
 * <ui-icon-toggle name="icons[]" value="c" :model="formData.icons" @input="chooseIcon">Icon C</ui-icon-toggle>
 */
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
    }
  },
  data() {
    return {
      currentValue: Array.isArray(this.model) ? this.model : [this.model],
      iconClassName: CLASSNAME_ICON
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
    }
  },
  methods: {
    handleChange() {
      this.$emit(CALLBACK_CHANGE, this.currentValue);
    }
  },
  mounted() {
    this.$ui.upgradeElement(this.$el);
  }
};
</script>
