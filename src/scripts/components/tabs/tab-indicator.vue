<template>
  <span :class="className">
    <span :class="innerClassName">
      <template v-if="type === UI_TAB_INDICATOR.ICON">
        <slot></slot>
      </template>
    </span>
  </span>
</template>

<script>
// Define constants
const UI_TAB_INDICATOR = {
  UNDERLINE: 'underline',
  ICON: 'icon'
};

export default {
  name: 'ui-tab-indicator',
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
      return {
        'mdc-tab-indicator': true,
        'mdc-tab-indicator--active': this.$parent.active,
        'mdc-tab-indicator--fade': this.fade
      };
    },
    innerClassName() {
      let result = [
        'mdc-tab-indicator__content',
        `mdc-tab-indicator__content--${this.type}`
      ];
      if (this.type === UI_TAB_INDICATOR.ICON) {
        result.push('material-icons');
      }
      return result.join(' ');
    }
  },
  created() {
    if (!Object.values(UI_TAB_INDICATOR).includes(this.type)) {
      console.warn('Invalid tab indicator type.');
    }
  }
};
</script>
