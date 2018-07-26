export default {
  model: {
    prop: 'model',
    event: 'change'
  },
  props: {
    // States
    model: [String, Number],
    options: {
      type: Array,
      default () {
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
      default: 0
    },
    defaultLabel: String,
    defaultValue: {
      type: String,
      default: ''
    },
    // Element attributes
    disabled: {
      type: Boolean,
      default: false
    }
  }
};
