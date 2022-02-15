import { deprecatedListClassNameMap } from '../components/list/constants';

export default {
  data() {
    return {
      deprecatedListClassNameMap
    };
  },
  computed: {
    hasRipple() {
      const parent = this.getListTag(this);
      return !parent.nonInteractive;
    }
  },
  methods: {
    getListTag(self) {
      const parent = self.$parent;
      const tagName = parent?.$vnode?.tag;
      return tagName
        ? /(UiNav|UiList)$/.test(tagName)
          ? parent
          : this.getListTag(parent)
        : {};
    },
    getDeprecatedItemClasses({ disabled, selected, activated }) {
      let result = [];

      if (disabled) {
        result.push(deprecatedListClassNameMap['mdc-list-item--disabled']);
      }
      if (selected) {
        result.push(deprecatedListClassNameMap['mdc-list-item--selected']);
      }
      if (activated) {
        result.push(deprecatedListClassNameMap['mdc-list-item--activated']);
      }

      return result;
    }
  }
};
