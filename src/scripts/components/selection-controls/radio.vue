<template>
  <div :class="className">
    <input
      :id="inputId"
      v-model="selectedValue"
      class="mdc-radio__native-control"
      type="radio"
      :name="name"
      :value="value"
      :disabled="disabled"
      v-bind="attrs"
      @change="handleChange"
    />
    <div class="mdc-radio__background">
      <div class="mdc-radio__outer-circle"></div>
      <div class="mdc-radio__inner-circle"></div>
    </div>
    <div class="mdc-radio__ripple"></div>
  </div>
</template>

<script>
import { MDCRadio } from '../../../material-components-web/radio';
import domMixin from '../../mixins/dom';
import elementMixin from '../../mixins/element';

// Define radio constants
const UI_RADIO = {
  cssClasses: {
    touch: 'mdc-radio--touch'
  },
  EVENT: {
    CHANGE: 'update:modelValue'
  }
};

export default {
  name: 'UiRadio',
  mixins: [domMixin, elementMixin],
  props: {
    // States
    modelValue: {
      type: [String, Number],
      default: ''
    },
    // <input type="radio"> attributes
    name: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Number],
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: [UI_RADIO.EVENT.CHANGE],
  data() {
    return {
      $radio: null,
      selectedValue: this.modelValue
    };
  },
  computed: {
    className() {
      const isTouch =
        this.el && this.el.classList.contains(UI_RADIO.cssClasses.touch);

      return {
        'mdc-radio': true,
        'mdc-radio--disabled': this.disabled,
        // Accessibility
        'mdc-radio--touch': isTouch
      };
    }
  },
  watch: {
    modelValue(val) {
      this.selectedValue = val;
    }
  },
  mounted() {
    this.$radio = new MDCRadio(this.el);

    this.$nextTick(() => {
      if (this.$parent.$formField) {
        this.$parent.$formField.input = this.$radio;
      }
    });
  },
  methods: {
    handleChange() {
      this.$emit(UI_RADIO.EVENT.CHANGE, this.selectedValue);
    }
  }
};
</script>
