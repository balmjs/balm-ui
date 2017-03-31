<template>
  <a :class="className" @click.stop="$parent.switchTab(tab.index)">
    <template v-if="icon">
      <i :class="iconClassName">{{ noIconText ? '' : tab.name }}</i>
    </template>
    <template v-else>
      <span>{{ tab.name }}</span>
    </template>
    <span ref="ripple"
      v-if="$parent.effect"
      class="mdl-tabs__ripple-container mdl-js-ripple-effect">
      <span class="mdl-ripple"></span>
    </span>
  </a>
</template>

<script>
import {isString} from '../../utils/helper';

export default {
  name: 'ui-tab',
  props: {
    tab: {
      type: Object,
      required: true
    },
    icon: {
      type: [Boolean, String],
      default: false
    },
    iconPrefix: {
      type: String,
      default: ''
    },
    noIconText: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return {
        'mdl-tabs__tab': true,
        'is-active': this.$parent.isActive(this.tab.index)
      };
    },
    iconClassName() {
      let result = [];

      if (isString(this.icon)) {
        result.push(this.icon);
      }

      if (this.iconPrefix) {
        result.push(`${this.iconPrefix}-${this.tab.name}`);
      }

      return result.join(' ');
    }
  },
  mounted() {
    if (this.$parent.effect) {
      this.$ui.upgradeElement(this.$refs.ripple, 'MaterialRipple');
    }
  }
};
</script>
