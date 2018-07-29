// Define constants
const UI_SELECT = {
  EVENT: {
    CHANGE: 'change',
    SELECTED: 'selected'
  }
};

export default {
  model: {
    prop: 'model',
    event: UI_SELECT.EVENT.CHANGE
  },
  props: {
    // States
    model: [String, Number],
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    optionLabel: {
      type: String,
      default: 'label'
    },
    optionValue: {
      type: String,
      default: 'value'
    },
    selectedIndex: {
      type: Number,
      default: -1
    },
    defaultLabel: String,
    defaultValue: {
      type: [String, Number],
      default: ''
    },
    // Element attributes
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      selectedValue: this.model
    };
  },
  watch: {
    model(val) {
      this.selectedValue = val;

      let selectedIndex = this.options.findIndex(
        option => option[this.optionValue] === val
      );
      this.$emit(UI_SELECT.EVENT.SELECTED, {
        value: val,
        index: this.defaultLabel ? selectedIndex + 1 : selectedIndex
      });
    }
  }
};
