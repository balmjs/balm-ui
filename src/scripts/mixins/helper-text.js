import getType from '../utils/typeof';

export default {
  props: {
    // Element attributes
    id: {
      type: [String, null],
      default: null
    },
    // UI attributes
    visible: {
      type: Boolean,
      default: false
    },
    validMsg: {
      type: [Boolean, null],
      default: null
    }
  },
  computed: {
    hasValidMsg() {
      return getType(this.validMsg) === 'boolean';
    }
  },
  methods: {
    updatePrevEl(className, val) {
      const prevEl = this.$el.previousElementSibling;

      if (this.hasValidMsg && prevEl && prevEl.classList.contains(className)) {
        const prevElClasses = prevEl.classList;

        if (val && !prevElClasses.contains(`${className}--invalid`)) {
          prevElClasses.add(`${className}--invalid`, 'abc');
        } else {
          prevElClasses.remove(`${className}--invalid`);
        }
      }
    }
  }
};
