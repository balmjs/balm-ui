import { MDCIconButtonToggle } from '../../material-components-web/icon-button';
import cardButtonMixin from './card-button';
import getType from '../utils/typeof';

// Define constants
const UI_ICONBUTTON = {
  TOGGLE_STATES: ['label', 'content', 'class'],
  TOGGLE_STATUS: {
    ON: 'on'
  },
  EVENT: {
    CHANGE: 'change'
  }
};

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
    on: Object,
    off: Object,
    // UI attributes
    iconInnerSelector: String
  },
  data() {
    return {
      $iconButton: null,
      canRendering: false
    };
  },
  computed: {
    className() {
      return {
        'mdc-icon-button': true,
        'material-icons': !this.iconInnerSelector
      };
    },
    isToggleButton() {
      return !!(this.on && this.off);
    }
  },
  watch: {
    model(val) {
      if (this.isToggleButton) {
        this.updateStatus(UI_ICONBUTTON.TOGGLE_STATUS.ON, val);
      }
    }
  },
  created() {
    if (this.isToggleButton) {
      if (
        this.isValidToggleState(this.on) &&
        this.isValidToggleState(this.off)
      ) {
        this.canRendering = true;
      } else {
        console.warn(
          'You must be configuring the icon button toggle states by `on` and `off` props: `{ label: "Some label", content: "Some content", class: "Some css class" }`'
        );
      }
    } else {
      this.canRendering = true;
    }
  },
  mounted() {
    if (this.canRendering && !this.$iconButton) {
      if (this.isToggleButton) {
        this.initToggleState('on');
        this.initToggleState('off');

        this.$iconButton = new MDCIconButtonToggle(this.$el);

        this.$iconButton.listen(
          `MDCIconButtonToggle:${UI_ICONBUTTON.EVENT.CHANGE}`,
          ({ detail }) => {
            this.$emit(UI_ICONBUTTON.EVENT.CHANGE, detail.isOn);
          }
        );

        this.updateStatus(UI_ICONBUTTON.TOGGLE_STATUS.ON, this.model);
      } else {
        new MDCIconButtonToggle(this.$el);
      }
    }
  },
  methods: {
    isValidToggleState(states) {
      return states
        ? Object.keys(states).some(state =>
            UI_ICONBUTTON.TOGGLE_STATES.includes(state)
          )
        : false;
    },
    initToggleState(key) {
      let value = this[key];
      let currentToggleState =
        getType(value) === 'object' ? Object.assign({}, value) : {};

      Object.keys(currentToggleState).forEach(attribute => {
        let state = key.substring(0, 1).toUpperCase() + key.substring(1);
        let name =
          attribute.substring(0, 1).toUpperCase() + attribute.substring(1);
        this.$el.dataset[`toggle${state}${name}`] =
          currentToggleState[attribute];
      });
    },
    updateStatus(key, value) {
      if (this.$iconButton) {
        this.$iconButton[key] = value;
      }
    }
  }
};
