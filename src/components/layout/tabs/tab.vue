<template>
  <a :class="className.outer" @click.stop="$parent.switchTab(tab.index)">
    <i v-if="icon" :class="className.inner">{{ tab.name }}</i>
    <span v-if="!icon">{{ tab.name }}</span>
    <span class="mdl-tabs__ripple-container mdl-js-ripple-effect" ref="ripple" v-if="$parent.effect">
      <span class="mdl-ripple"></span>
    </span>
  </a>
</template>

<script>
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
    }
  },
  computed: {
    className() {
      return {
        outer: {
          'mdl-tabs__tab': true,
          'is-active': this.$parent.isActive(this.tab.index)
        },
        inner: this.iconPrefix
          ? `${this.icon} ${this.iconPrefix}-${this.tab.name}`
          : `${this.icon}`
      };
    }
  },
  mounted() {
    if (this.$parent.effect) {
      this.$ui.upgradeElement(this.$refs.ripple, 'MaterialRipple');
    }
  }
};
</script>
