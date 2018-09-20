import { MDCIconButtonToggle } from '../../material-components-web/icon-button';
import cardButtonMixin from './card-button';
import UI_ICONBUTTON from '../components/button/icon-constants';

export default {
  mixins: [cardButtonMixin],
  model: {
    prop: 'model',
    event: UI_ICONBUTTON.EVENT.CHANGE
  },
  props: {
    // States
    model: {
      type: Boolean,
      default: false
    },
    icon: String,
    toggle: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      $iconButton: null
    };
  },
  computed: {
    isToggleButton() {
      return this.toggle.on && this.toggle.off;
    },
    className() {
      return {
        'mdc-icon-button': true,
        'material-icons': !this.isToggleButton && this.icon
      };
    }
  },
  watch: {
    model(val) {
      this.$iconButton.on = val;
    }
  },
  mounted() {
    this.$iconButton = new MDCIconButtonToggle(this.$el);

    if (this.isToggleButton) {
      this.$iconButton.listen(
        `MDCIconButtonToggle:${UI_ICONBUTTON.EVENT.CHANGE}`,
        ({ detail }) => {
          this.$emit(UI_ICONBUTTON.EVENT.CHANGE, detail.isOn);
        }
      );

      this.$iconButton.on = this.model;
    }
  }
};
