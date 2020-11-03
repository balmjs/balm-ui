<template>
  <mdc-checkbox :class="className">
    <input
      :id="inputId"
      v-model="selectedValue"
      type="checkbox"
      class="mdc-checkbox__native-control"
      :name="name"
      :value="value"
      :disabled="disabled"
      :data-indeterminate="indeterminate"
      v-bind="attrs"
      @change="handleChange"
    />
  </mdc-checkbox>
</template>

<script>
import { MDCCheckbox } from '../../../material-components-web/checkbox';
import MdcCheckbox from './mdc-checkbox';
import inputMixin from '../../mixins/input';

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
  name: 'UiCheckbox',
  components: {
    MdcCheckbox
  },
  mixins: [inputMixin],
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
    // <input type="checkbox"> attributes
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
  data() {
    return {
      $checkbox: null,
      selectedValue: this._setSelectedValue(this.model)
    };
  },
  computed: {
    className() {
      const isAccessible =
        this.$el && this.$el.classList.contains(UI_CHECKBOX.cssClasses.touch);

      return {
        'mdc-checkbox--disabled': this.disabled,
        // Accessibility
        'mdc-checkbox--touch': isAccessible
      };
    }
  },
  watch: {
    model(val) {
      this.selectedValue = this._setSelectedValue(val);
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
    _setSelectedValue(value) {
      return Array.isArray(value) ? [...value] : !!value;
    },
    handleChange() {
      this.$emit(UI_CHECKBOX.EVENT.CHANGE, this.selectedValue);
    }
  }
};
</script>
