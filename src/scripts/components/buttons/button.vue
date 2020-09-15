<template>
  <!-- Container -->
  <button
    type="button"
    :class="[className, cardActionClassName]"
    @click="$emit(UI_BUTTON.EVENT.CLICK, $event)"
  >
    <div class="mdc-button__ripple"></div>
    <!-- Icon (optional) -->
    <slot name="before" :iconClass="UI_BUTTON.cssClasses.icon">
      <i
        v-if="materialIcon"
        :class="[UI_GLOBAL.cssClasses.icon, UI_BUTTON.cssClasses.icon]"
        aria-hidden="true"
        v-text="materialIcon"
      ></i>
    </slot>
    <!-- Text label -->
    <span :class="UI_BUTTON.cssClasses.label">
      <slot></slot>
    </span>
    <!-- Icon (optional) -->
    <slot name="after" :iconClass="UI_BUTTON.cssClasses.icon"></slot>
  </button>
</template>

<script>
import typeMixin from '../../mixins/type';
import rippleMixin from '../../mixins/ripple';
import materialIconMixin from '../../mixins/material-icon';
import cardActionMixin from '../../mixins/card-action';
import UI_GLOBAL from '../../config/constants';
import UI_BUTTON from './constants';

export default {
  name: 'UiButton',
  mixins: [typeMixin, rippleMixin, materialIconMixin, cardActionMixin],
  props: {
    // UI variants
    type: {
      type: [String, Number],
      default: 0
    },
    outlined: {
      type: Boolean,
      default: false
    },
    raised: {
      type: Boolean,
      default: false
    },
    unelevated: {
      type: Boolean,
      default: false
    }
  },
  emits: [UI_BUTTON.EVENT.CLICK],
  data() {
    return {
      UI_GLOBAL,
      UI_BUTTON,
      el: null
    };
  },
  computed: {
    isOutlined() {
      return this.checkType(UI_BUTTON.TYPES, 'outlined');
    },
    isRaised() {
      return this.checkType(UI_BUTTON.TYPES, 'raised');
    },
    isUnelevated() {
      return this.checkType(UI_BUTTON.TYPES, 'unelevated');
    },
    className() {
      const isAccessible =
        this.el && this.el.classList.contains(UI_BUTTON.cssClasses.touch);

      return {
        // Text button
        'mdc-button': true,
        // Outlined button
        'mdc-button--outlined': this.isOutlined,
        // Contained button
        'mdc-button--raised': this.isRaised,
        'mdc-button--unelevated': this.isUnelevated,
        // Accessibility
        'mdc-button--touch': isAccessible
      };
    }
  },
  watch: {
    type() {
      this.init();
    }
  },
  mounted() {
    this.el = document.querySelector('.mdc-button');

    this.init();
  },
  methods: {
    init() {
      this.initRipple(this.el);
    }
  }
};
</script>
