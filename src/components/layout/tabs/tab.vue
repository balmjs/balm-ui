<template>
  <a :class="className" @click.stop="$parent.switchTab(tab.index)">
    {{ tab.name }}
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
    }
  },
  computed: {
    className() {
      return {
        'mdl-tabs__tab': true,
        'is-active': this.$parent.isActive(this.tab.index)
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
