<template>
  <div :class="className">
    <input
      :id="id"
      v-model="checkedValue"
      type="checkbox"
      class="mdc-checkbox__native-control"
      :name="name"
      :value="value"
      :disabled="disabled"
      :data-indeterminate="indeterminate"
      v-bind="attrs"
      @change="handleChange"
    />
    <div class="mdc-checkbox__background">
      <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
        <path
          class="mdc-checkbox__checkmark-path"
          fill="none"
          d="M1.73,12.91 8.1,19.28 22.79,4.59"
        ></path>
      </svg>
      <div class="mdc-checkbox__mixedmark"></div>
    </div>
    <div class="mdc-checkbox__ripple"></div>
  </div>
</template>

<script>
import { MDCCheckbox } from '../../../material-components-web/checkbox';
import elementMixin from '../../mixins/element';
import getType from '../../utils/typeof';

// Define checkbox constants
const UI_CHECKBOX = {
  cssClasses: {
    touch: 'mdc-checkbox--touch'
  },
  EVENT: {
    CHANGE: 'change'
  }
};

export default {
  name: 'ui-checkbox',
  mixins: [elementMixin],
  model: {
    prop: 'model',
    event: UI_CHECKBOX.EVENT.CHANGE
  },
  props: {
    // States
    model: {
      type: null, // NOTE: [Boolean, Array] only
      default: false
    },
    indeterminate: {
      type: Boolean,
      default: false
    },
    // Element attributes
    name: String,
    value: [String, Number],
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      $checkbox: null,
      checkedValue: this._setCheckedValue(this.model)
    };
  },
  computed: {
    className() {
      const isTouch =
        this.$el && this.$el.classList.contains(UI_CHECKBOX.cssClasses.touch);

      return {
        'mdc-checkbox': true,
        'mdc-checkbox--disabled': this.disabled,
        // Accessibility
        'mdc-checkbox--touch': isTouch
      };
    }
  },
  watch: {
    model(val) {
      this.checkedValue = this._setCheckedValue(val);
    },
    indeterminate(val) {
      this.$checkbox.indeterminate = val;
    }
  },
  mounted() {
    this.$checkbox = new MDCCheckbox(this.$el);
    this.$checkbox.indeterminate = this.indeterminate;

    this.$nextTick(() => {
      if (this.$parent.$formField) {
        this.$parent.$formField.input = this.$checkbox;
      }
    });
  },
  methods: {
    _setCheckedValue(value) {
      return getType(value) === 'array' ? [...value] : !!value;
    },
    handleChange() {
      this.$emit(UI_CHECKBOX.EVENT.CHANGE, this.checkedValue);
    }
  }
};
</script>
