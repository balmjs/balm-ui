import { MDCRipple } from '@material/ripple';

export default {
  methods: {
    initRipple(element) {
      return new MDCRipple(element);
    }
  }
};
