<template>
  <span role="button"
        :class="className"
        :aria-pressed="currentValue"
        :aria-label="currentValue ? toggleOnData.label : toggleOffData.label"
        :tabindex="tabindex"
        :aria-disabled="disabled"
        :data-icon-inner-selector="iconInnerSelector"
        :data-toggle-on="toggleOnData"
        :data-toggle-off="toggleOffData">
    <slot><!-- Prevent FOUC by putting the initial content in --></slot>
  </span>
</template>

<script>
import { MDCIconToggle } from '../../../material-components-web/icon-toggle';
import getType from '../../helpers/typeof';

const DMC_EVENT_CHANGE = 'MDCIconToggle:change';
const UI_EVENT_CHANGE = 'change';
const MDCIconToggle_on = 'on';
const MDCIconToggle_disabled = 'disabled';
const MDCIconToggle_states = ['label', 'content', 'cssClass'];

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
    // UI attributes
    tabindex: {
      type: [Number, String],
      default: 0
    },
    icon: String,
    disabled: {
      type: Boolean,
      default: false
    },
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
    iconInnerSelector() {
      return this.icon ? `.${this.icon}` : false;
    },
    toggleOnData() {
      return this.getToggleData(this.on);
    },
    toggleOffData() {
      return this.getToggleData(this.off);
    }
  },
  watch: {
    model(val) {
      if (!this.disabled) {
        this.currentValue = val;
        this.updateState(MDCIconToggle_on, val);
      }
    },
    disabled(val) {
      this.updateState(MDCIconToggle_disabled, val);
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

      this.$iconToggle.listen(DMC_EVENT_CHANGE, ({ detail }) => {
        this.$emit(UI_EVENT_CHANGE, detail.isOn);
      });

      this.updateState(MDCIconToggle_on, this.currentValue);
      this.updateState(MDCIconToggle_disabled, this.disabled);
    }
  },
  methods: {
    isValidToggleData(value) {
      return value
        ? Object.keys(value).some(currentValue =>
            MDCIconToggle_states.includes(currentValue)
          )
        : false;
    },
    getToggleData(value) {
      return getType(value) === 'object' ? JSON.stringify(value) : {};
    },
    updateState(key, value) {
      if (this.$iconToggle) {
        this.$iconToggle[key] = value;
      }
    }
  }
};
</script>
