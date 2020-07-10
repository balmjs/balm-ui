import getType from '../utils/typeof';

export default {
  model: {
    prop: 'validMsg',
    event: 'change' // NOTE: just for `@blur` event of the `<ui-textfield>`
  },
  props: {
    // States
    validMsg: {
      type: [String, Boolean],
      default: false
    },
    // Element attributes
    id: {
      type: [String, null],
      default: null
    },
    // UI attributes
    visible: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    hasValidMsg() {
      return !!this.validMsg;
    },
    validationMsg() {
      return getType(this.validMsg) === 'string' ? this.validMsg : '';
    }
  },
  methods: {
    updatePrevEl(className) {
      const prevEl = this.$el.previousElementSibling;

      if (prevEl && prevEl.classList.contains(className)) {
        const prevElClasses = prevEl.classList;

        if (
          this.hasValidMsg &&
          !prevElClasses.contains(`${className}--invalid`)
        ) {
          prevElClasses.add(`${className}--invalid`);
        } else {
          prevElClasses.remove(`${className}--invalid`);
        }
      }
    }
  }
};
