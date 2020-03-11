import { isMiniprogram } from '../config/env';
import { cssClasses } from '../../material-components-web/drawer/constants';

export default {
  methods: {
    mpHandler(open) {
      if (isMiniprogram) {
        let classList = this.$el.classList;

        if (open) {
          classList.add(cssClasses.OPEN, cssClasses.ANIMATE);
          setTimeout(() => {
            classList.add(cssClasses.OPENING);
          }, 0);

          setTimeout(() => {
            classList.remove(cssClasses.ANIMATE, cssClasses.OPENING);
          }, 250);
        } else {
          classList.add(cssClasses.CLOSING);

          setTimeout(() => {
            classList.remove(cssClasses.OPEN, cssClasses.CLOSING);
          }, 200);
        }
      }
    }
  }
};
