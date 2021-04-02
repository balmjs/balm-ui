<template>
  <!-- Active tab indicator -->
  <span :class="className">
    <span :class="innerClassName">
      <template v-if="type === UI_TAB_INDICATOR.ICON">
        <slot></slot>
      </template>
    </span>
  </span>
</template>

<script>
import UI_GLOBAL from '../icon/constants';
import { UI_TAB_INDICATOR } from './constants';

export default {
  name: 'UiTabIndicator',
  props: {
    // UI attributes
    type: {
      type: String,
      default: UI_TAB_INDICATOR.UNDERLINE
    },
    fade: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      UI_TAB_INDICATOR
    };
  },
  computed: {
    className() {
      const isActive = this.$parent && this.$parent.$data.modelValue;

      return {
        'mdc-tab-indicator': true,
        'mdc-tab-indicator--active': isActive,
        'mdc-tab-indicator--fade': this.fade
      };
    },
    innerClassName() {
      let result = [
        'mdc-tab-indicator__content',
        `mdc-tab-indicator__content--${this.type}`
      ];
      if (this.type === UI_TAB_INDICATOR.ICON) {
        result.push(UI_GLOBAL.cssClasses.icon);
      }
      return result.join(' ');
    }
  },
  created() {
    if (!Object.values(UI_TAB_INDICATOR).includes(this.type)) {
      console.warn('[UiTabIndicator]', 'Invalid tab indicator type');
    }
  }
};
</script>
