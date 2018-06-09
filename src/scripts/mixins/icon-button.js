import { MDCIconButtonToggle } from '../../material-components-web/icon-button';
import cardButtonMixin from './card-button';
import getType from '../helpers/typeof';

// Define constants
const UI_ICONBUTTON = {
  EVENT: {
    CLICK: 'click',
    CHANGE: 'change'
  }
};
const MDC_ICONBUTTON = {
  TOGGLE_STATES: ['label', 'content', 'class'],
  TOGGLE_STATUS: {
    ON: 'on'
  },
  EVENT: {
    CHANGE: `MDCIconButtonToggle:${UI_ICONBUTTON.EVENT.CHANGE}`
  }
};

export default {
  mixins: [cardButtonMixin],
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
      canRendering: false,
      currentValue: this.model
    };
  },
  computed: {
    className() {
      return {
        'mdc-icon-button': true,
        'material-icons': !this.iconInnerSelector
      };
    }
  },
  watch: {
    model(val) {
      if (this.isToggleButton()) {
        this.currentValue = val;
        this.updateStatus(MDC_ICONBUTTON.TOGGLE_STATUS.ON, val);
      }
    }
  },
  created() {
    if (this.isToggleButton()) {
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
      if (this.isToggleButton()) {
        this.initToggleState('on');
        this.initToggleState('off');

        this.$iconButton = new MDCIconButtonToggle(this.$el);

        this.$iconButton.listen(MDC_ICONBUTTON.EVENT.CHANGE, ({ detail }) => {
          this.$emit(UI_ICONBUTTON.EVENT.CHANGE, detail.isOn);
        });

        this.updateStatus(MDC_ICONBUTTON.TOGGLE_STATUS.ON, this.currentValue);
      } else {
        new MDCIconButtonToggle(this.$el);
      }
    }
  },
  methods: {
    isToggleButton() {
      return this.on && this.off;
    },
    isValidToggleState(value) {
      return value
        ? Object.keys(value).some(currentValue =>
            MDC_ICONBUTTON.TOGGLE_STATES.includes(currentValue)
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
    },
    handleClick(event) {
      if (!this.isToggleButton()) {
        this.$emit(UI_ICONBUTTON.EVENT.CLICK, event);
      }
    }
  }
};
