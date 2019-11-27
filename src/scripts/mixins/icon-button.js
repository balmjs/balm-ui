import cardButtonMixin from './card-button';
import { MDCIconButtonToggle } from '../../material-components-web/icon-button';
import UI_ICON_BUTTON from '../components/button/toggle-constants';

export default {
  mixins: [cardButtonMixin],
  model: {
    prop: 'model',
    event: UI_ICON_BUTTON.EVENT.CHANGE
  },
  props: {
    // States
    model: {
      type: Boolean,
      default: false
    },
    // UI attributes
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
    toggleButton() {
      return this.toggle.on && this.toggle.off;
    },
    className() {
      return {
        'mdc-icon-button': true,
        'material-icons': this.icon && !this.toggleButton
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

    // For default and custom icon button
    this.$iconButton.listen(
      `MDCIconButtonToggle:${UI_ICON_BUTTON.EVENT.CHANGE}`,
      ({ detail }) => {
        this.$emit(UI_ICON_BUTTON.EVENT.CHANGE, detail.isOn);
      }
    );

    // Init
    this.$iconButton.on = this.model;
  }
};
