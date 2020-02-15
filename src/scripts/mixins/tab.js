import typeMixin from './type';
import { UI_TAB } from '../components/tabs/constants';

export default {
  mixins: [typeMixin],
  props: {
    // UI variants
    type: {
      type: [String, Number],
      default: 0
    },
    // UI attributes
    stacked: {
      type: Boolean,
      default: false
    },
    minWidth: {
      type: Boolean,
      default: false
    },
    contentIndicator: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isTextWithIcon() {
      return this.checkType(UI_TAB.TYPES, 'textWithIcon');
    },
    isIconOnly() {
      return this.checkType(UI_TAB.TYPES, 'iconOnly');
    },
    isStacked() {
      return this.stacked;
    },
    isMinWidth() {
      return this.minWidth;
    },
    withIndicator() {
      return this.contentIndicator;
    }
  }
};
