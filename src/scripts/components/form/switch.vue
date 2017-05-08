<template>
  <ui-form-field :alignEnd="alignEnd" :dark="dark">
    <slot name="before"></slot>
    <div :class="className">
      <input type="checkbox"
             class="mdc-switch__native-control"
             :id="id"
             :name="name"
             :disabled="disabled"
             v-model="currentValue"
             @change="handleChange">
      <div class="mdc-switch__background">
        <div class="mdc-switch__knob"></div>
      </div>
    </div>
    <label class="mdc-switch-label" :for="id">
      <slot>{{ label }}</slot>
    </label>
    <slot name="after"></slot>
  </ui-form-field>
</template>

<script>
const UI_EVENT_CHANGE = 'change';

export default {
  name: 'ui-switch',
  props: {
    // attribute
    id: String,
    name: String,
    disabled: {
      type: Boolean,
      default: false
    },
    model: [Boolean, Number, String],
    // mdc
    label: String,
    // form field
    alignEnd: {
      type: Boolean,
      default: false
    },
    dark: {
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
        'mdc-switch': true,
        'mdc-switch--disabled': this.disabled
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
      this.$emit(UI_EVENT_CHANGE, this.currentValue);
    }
  }
};
</script>
