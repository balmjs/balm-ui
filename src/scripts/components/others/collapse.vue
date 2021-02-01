<template>
  <div :class="className" :aria-expanded="isExpanded">
    <div v-ripple="ripple" class="mdc-collapse__header" @click="handleToggle">
      <template v-if="isExpanded">
        <slot name="expand-more-icon" :iconClass="UI_COLLAPSE.cssClasses.icon">
          <i
            v-if="withIcon"
            :class="[UI_GLOBAL.cssClasses.icon, UI_COLLAPSE.cssClasses.icon]"
            aria-hidden="true"
          >
            expand_more
          </i>
        </slot>
      </template>
      <template v-else>
        <slot name="expand-less-icon" :iconClass="UI_COLLAPSE.cssClasses.icon">
          <i
            v-if="withIcon"
            :class="[UI_GLOBAL.cssClasses.icon, UI_COLLAPSE.cssClasses.icon]"
            aria-hidden="true"
          >
            chevron_right
          </i>
        </slot>
      </template>
      <div class="mdc-collapse__title">
        <slot name="toggle"></slot>
      </div>
    </div>
    <div v-show="isExpanded" class="mdc-collapse__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import UI_GLOBAL from '../../config/constants';

// Define collapse constants
const UI_COLLAPSE = {
  EVENT: {
    CHANGE: 'change'
  },
  cssClasses: {
    icon: 'mdc-collapse__icon'
  }
};

export default {
  name: 'UiCollapse',
  model: {
    prop: 'expanded',
    event: UI_COLLAPSE.EVENT.CHANGE
  },
  props: {
    // States
    expanded: {
      type: Boolean,
      default: false
    },
    // UI attributes
    withIcon: {
      type: Boolean,
      default: false
    },
    ripple: {
      type: [Boolean, Number],
      default: false
    }
  },
  data() {
    return {
      UI_GLOBAL,
      UI_COLLAPSE,
      isExpanded: this.expanded
    };
  },
  computed: {
    className() {
      return {
        'mdc-collapse': true,
        'mdc-collapse--expanded': this.isExpanded,
        'mdc-collapse--with-icon': this.withIcon
      };
    }
  },
  watch: {
    expanded(val) {
      this.isExpanded = val;
    }
  },
  methods: {
    handleToggle() {
      this.isExpanded = !this.isExpanded;

      this.$emit(UI_COLLAPSE.EVENT.CHANGE, this.isExpanded);
    }
  }
};
</script>
