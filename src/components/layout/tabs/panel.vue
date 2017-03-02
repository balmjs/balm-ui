<template>
  <div :class="className">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ui-panel',
  props: {
    tab: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      currentIndex: -1
    };
  },
  computed: {
    className() {
      return {
        'mdl-tabs__panel': true,
        'is-active': this.$parent.isActive(this.currentIndex)
      };
    }
  },
  watch: {
    tab(val) {
      this.$parent.updateTab(this.currentIndex, val);
    }
  },
  beforeUpdate() {
    let currentTab = this.$parent.tabs.find(tab => tab.name === this.tab);
    if (currentTab) {
      this.currentIndex = currentTab.index;
    }
  }
};
</script>
