<template>
  <span :class="className"
        role="button"
        tabindex="0"
        :aria-pressed="model"
        :aria-label="label"
        :aria-disabled="disabled"
        :data-icon-inner-selector="iconInnerSelector"
        :data-toggle-on="toggleOn"
        :data-toggle-off="toggleOff">
    <slot></slot>
  </span>
</template>

<script>
import {MDCIconToggle} from '../../material-components-web/icon-toggle';

const DMC_EVENT_CHANGE = 'MDCIconToggle:change';
const UI_EVENT_CHANGE = 'change';

export default {
  name: 'ui-icon-toggle',
  props: {
    // mdc
    label: String,
    icon: String,
    on: Object,
    off: Object,
    value: {
      type: [Boolean, Number, String],
      default: false
    },
    primary: {
      type: Boolean,
      default: false
    },
    accent: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      $iconToggle: null,
      model: this.value
    };
  },
  computed: {
    className() {
      return {
        'material-icons': !this.icon,
        'mdc-icon-toggle': true,
        'mdc-icon-toggle--primary': this.primary,
        'mdc-icon-toggle--accent': this.accent,
        'mdc-icon-toggle--disabled': this.disabled
      };
    },
    iconInnerSelector() {
      return this.icon ? `.${this.icon}` : false;
    },
    toggleOn() {
      return JSON.stringify(this.on);
    },
    toggleOff() {
      return JSON.stringify(this.off);
    }
  },
  methods: {
    updateState(key, value) {
      if (this.$iconToggle) {
        this.$iconToggle[key] = value;
      }
    }
  },
  watch: {
    value(val) {
      if (!this.disabled) {
        this.model = val;
        this.updateState('on', val);
      }
    },
    disabled(val) {
      this.updateState('disabled', val);
    }
  },
  mounted() {
    if (!this.$iconToggle) {
      this.$iconToggle = new MDCIconToggle(this.$el);

      this.$iconToggle.listen(DMC_EVENT_CHANGE, ({detail}) => {
        this.$emit(UI_EVENT_CHANGE, detail.isOn);
      });

      this.updateState('on', this.model);
      this.updateState('disabled', this.disabled);
    }
  }
};
</script>
