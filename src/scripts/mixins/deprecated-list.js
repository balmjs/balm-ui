import { deprecatedListClassNameMap } from '../components/list/constants';

export default {
  data() {
    return {
      deprecatedListClassNameMap
    };
  },
  methods: {
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
