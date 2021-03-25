import { MDCRipple } from '../../material-components-web/ripple';

export default {
  methods: {
    initRipple(element: HTMLElement | null): any {
      return new MDCRipple(element);
    }
  }
};
