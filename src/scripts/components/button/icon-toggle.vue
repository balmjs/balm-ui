<template>
  <span role="button"
        :class="className"
        :tabindex="currentTabindex"
        :aria-pressed="currentValue"
        :aria-disabled="disabled"
        :data-icon-inner-selector="iconInnerSelector"
        :data-toggle-on="toggleOnState"
        :data-toggle-off="toggleOffState">
    <slot></slot>
  </span>
</template>

<script>
import { MDCIconToggle } from '../../../material-components-web/icon-toggle';
import getType from '../../helpers/typeof';

// Define constants
const UI_ICONTOGGLE = {
  EVENT: {
    CHANGE: 'change'
  }
};
const MDC_ICONTOGGLE = {
  EVENT: {
    CHANGE: `MDCIconToggle:${UI_ICONTOGGLE.EVENT.CHANGE}`
  },
  STATUS: {
    ON: 'on',
    DISABLED: 'disabled'
  },
  DATA_STATES: ['label', 'content', 'cssClass']
};

export default {
  name: 'ui-icon-toggle',
  props: {
    // States
    model: {
      type: Boolean,
      default: false
    },
    on: Object,
    off: Object,
    // Element attributes
    tabindex: {
      type: [Number, String],
      default: 0
    },
    disabled: {
      type: Boolean,
      default: false
    },
    // UI attributes
    icon: String,
    // Card attributes
    cardIcon: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      $iconToggle: null,
      canRendering: false,
      currentValue: this.model
    };
  },
  computed: {
    className() {
      return {
        'material-icons': !this.icon,
        'mdc-icon-toggle': true,
        'mdc-icon-toggle--disabled': this.disabled,
        'mdc-card__action': this.cardIcon,
        'mdc-card__action--icon': this.cardIcon
      };
    },
    currentTabindex() {
      return this.disabled ? -1 : this.tabindex;
    },
    iconInnerSelector() {
      return this.icon ? `.${this.icon}` : false;
    },
    toggleOnState() {
      return this.getToggleState(this.on);
    },
    toggleOffState() {
      return this.getToggleState(this.off);
    }
  },
  watch: {
    model(val) {
      if (!this.disabled) {
        this.currentValue = val;
        this.updateStatus(MDC_ICONTOGGLE.STATUS.ON, val);
      }
    },
    disabled(val) {
      this.updateStatus(MDC_ICONTOGGLE.STATUS.DISABLED, val);
    }
  },
  created() {
    if (this.isValidToggleData(this.on) && this.isValidToggleData(this.off)) {
      this.canRendering = true;
    } else {
      console.warn(
        'You must be configuring the icon toggle states by `on` and `off` props: `{ label: "Some label", content: "Some content", cssClass: "Some css class" }`'
      );
    }
  },
  mounted() {
    if (this.canRendering && !this.$iconToggle) {
      this.$iconToggle = new MDCIconToggle(this.$el);

      this.$iconToggle.listen(MDC_ICONTOGGLE.EVENT.CHANGE, ({ detail }) => {
        this.$emit(UI_ICONTOGGLE.EVENT.CHANGE, detail.isOn);
      });

      this.updateStatus(MDC_ICONTOGGLE.STATUS.ON, this.currentValue);
      this.updateStatus(MDC_ICONTOGGLE.STATUS.DISABLED, this.disabled);
    }
  },
  methods: {
    isValidToggleData(value) {
      return value
        ? Object.keys(value).some(currentValue =>
            MDC_ICONTOGGLE.DATA_STATES.includes(currentValue)
          )
        : false;
    },
    getToggleState(value) {
      return getType(value) === 'object' ? JSON.stringify(value) : {};
    },
    updateStatus(key, value) {
      if (this.$iconToggle) {
        this.$iconToggle[key] = value;
      }
    }
  }
};
</script>
