import { MDCRipple } from '../../material-components-web/ripple';

export default {
  methods: {
    initRipple(element) {
      return new MDCRipple(element);
    }
  }
};
