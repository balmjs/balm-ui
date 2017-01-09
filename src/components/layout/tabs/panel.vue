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
      currentActive: 0,
      currentIndex: -1,
      isActive: false
    };
  },
  computed: {
    className() {
      return {
        'mdl-tabs__panel': true,
        'is-active': this.isActive
      };
    }
  },
  watch: {
    currentActive(val) {
      this.isActive = this.currentIndex === val;
    }
  },
  updated() {
    this.currentActive = this.$parent.currentActive;

    let tabs = this.$parent.tabs;
    let currentTab = ''; // this.$parent.tabs.find(value => value.name === this.tab)
    for (let i = 0, len = tabs.length; i < len; i++) {
      if (tabs[i].name === this.tab) {
        currentTab = tabs[i];
        break;
      }
    }

    if (currentTab) {
      this.currentIndex = currentTab.index;
      if (this.$parent.isActive(this.currentIndex)) {
        this.isActive = true;
      }
    }
  }
};
</script>
