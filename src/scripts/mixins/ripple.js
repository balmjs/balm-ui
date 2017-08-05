import {MDCRipple} from '../../material-components-web/ripple';

export default {
  methods: {
    initRipple(element) {
      MDCRipple.attachTo(element);
    }
  }
};
