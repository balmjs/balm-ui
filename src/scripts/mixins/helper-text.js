import domMixin from './dom';
import getType from '../utils/typeof';

export default {
  mixins: [domMixin],
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
  emits: ['update:validMsg'], // NOTE: just for `@blur` event of the `<ui-textfield>`
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
      // TODO: find dom
      // const textfield = this.$parent.$slots
      //   .default()
      //   .find(
      //     (vm) =>
      //       getType(vm.type) === 'object' && vm.type.name === 'UiTextfield'
      //   );
      // console.log(textfield);
      // const prevEl = this.el.previousElementSibling;
      // console.log('updatePrevEl', prevEl);
      // if (prevEl && prevEl.classList.contains(className)) {
      //   const prevElClasses = prevEl.classList;
      //   if (
      //     this.hasValidMsg &&
      //     !prevElClasses.contains(`${className}--invalid`)
      //   ) {
      //     prevElClasses.add(`${className}--invalid`);
      //   } else {
      //     prevElClasses.remove(`${className}--invalid`);
      //   }
      // }
    }
  }
};
