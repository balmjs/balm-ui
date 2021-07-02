<template>
  <!-- Container -->
  <button type="button" :class="className" @click="handleClick">
    <div class="mdc-icon-button__ripple"></div>
    <!-- Icon -->
    <template v-if="toggleButton">
      <i
        :class="getIconClassName(UI_ICON_BUTTON.cssClasses.off)"
        v-text="toggle.off"
      ></i>
      <i
        :class="getIconClassName(UI_ICON_BUTTON.cssClasses.on)"
        v-text="toggle.on"
      ></i>
    </template>
    <template v-else>
      <slot
        :onClass="UI_ICON_BUTTON.cssClasses.on"
        :offClass="UI_ICON_BUTTON.cssClasses.off"
      >
        {{ icon }}
      </slot>
    </template>
  </button>
</template>

<script>
import { MDCIconButtonToggle } from '../../../material-components-web/icon-button';
import { strings } from '../../../material-components-web/icon-button/constants';
import domMixin from '../../mixins/dom';
import materialIconMixin from '../../mixins/material-icon';
import cardActionMixin from '../../mixins/card-action';

// Define icon/toggle button constants
const UI_ICON_BUTTON = {
  cssClasses: {
    off: 'mdc-icon-button__icon',
    on: 'mdc-icon-button__icon mdc-icon-button__icon--on'
  },
  EVENT: {
    CLICK: 'click',
    CHANGE: 'update:modelValue'
  }
};

export default {
  name: 'UiIconButton',
  mixins: [domMixin, materialIconMixin, cardActionMixin],
  props: {
    // States
    modelValue: {
      type: Boolean,
      default: false
    },
    // UI attributes
    toggle: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  emits: [UI_ICON_BUTTON.EVENT.CLICK, UI_ICON_BUTTON.EVENT.CHANGE],
  data() {
    return {
      UI_ICON_BUTTON,
      $iconButton: null
    };
  },
  computed: {
    toggleButton() {
      return this.toggle.on && this.toggle.off;
    },
    className() {
      return [
        {
          'mdc-icon-button': true,
          'material-icons': !this.toggleButton
        },
        this.cardActionClassName
      ];
    }
  },
  watch: {
    modelValue(val) {
      this.$iconButton.on = val;
    }
  },
  mounted() {
    this.$iconButton = new MDCIconButtonToggle(this.el);

    // For default and custom icon button
    this.$iconButton.listen(strings.CHANGE_EVENT, ({ detail }) => {
      this.$emit(UI_ICON_BUTTON.EVENT.CHANGE, detail.isOn);
    });

    // Init
    this.$iconButton.on = this.modelValue;
  },
  methods: {
    handleClick(event) {
      this.$emit(UI_ICON_BUTTON.EVENT.CLICK, event);
    }
  }
};
</script>
