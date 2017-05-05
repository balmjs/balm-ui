<template>
  <ui-form-field :alignEnd="alignEnd" :dark="dark">
    <slot name="before"></slot>
    <div ref="checkbox" :class="className">
      <input type="checkbox"
             class="mdc-checkbox__native-control"
             :id="id"
             :name="name"
             :disabled="disabled"
             v-model="model"
             @change="handleChange">
      <div class="mdc-checkbox__background">
        <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
          <path class="mdc-checkbox__checkmark__path"
                fill="none"
                stroke="white"
                d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
        </svg>
        <div class="mdc-checkbox__mixedmark"></div>
      </div>
    </div>
    <label :for="id">
      <slot>{{ label }}</slot>
    </label>
    <slot name="after"></slot>
  </ui-form-field>
</template>

<script>
import {MDCCheckbox} from '../../material-components-web/checkbox';
import UiFormField from './form-field';

const UI_EVENT_CHANGE = 'change';

export default {
  name: 'ui-checkbox',
  components: {
    UiFormField
  },
  props: {
    // attribute
    id: String,
    name: String,
    disabled: {
      type: Boolean,
      default: false
    },
    value: [Boolean, Array],
    // mdc
    label: String,
    cssOnly: {
      type: Boolean,
      default: false
    },
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
      $checkbox: null,
      model: this.value
    };
  },
  computed: {
    className() {
      return {
        'mdc-checkbox': true,
        'mdc-checkbox--disabled': this.disabled,
        'mdc-checkbox--theme-dark': this.dark
      };
    }
  },
  watch: {
    value(val) {
      this.model = val;
    },
    disabled(val) {
      if (this.$checkbox && val) {
        this.$checkbox.indeterminate = val;
      }
    }
  },
  methods: {
    handleChange() {
      this.$emit(UI_EVENT_CHANGE, this.model);
    }
  },
  mounted() {
    if (!this.$checkbox && !this.cssOnly) {
      this.$checkbox = new MDCCheckbox(this.$refs.checkbox);
      this.$checkbox.indeterminate = this.disabled;
    }
  }
};
</script>
