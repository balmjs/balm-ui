<template>
  <div :class="className" ref="tabs">
    <div class="mdl-tabs__tab-bar">
      <ui-tab v-for="tab in tabs" :tab="tab"></ui-tab>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import UiTab from './tab';

const CALLBACK_SWITCHED = 'switched';

export default {
  name: 'ui-tabs',
  components: {
    UiTab
  },
  props: {
    active: {
      type: [Number, String],
      default: 0
    },
    // Applies ripple click effect
    effect: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      tabs: [],
      currentActive: this.active
    };
  },
  computed: {
    className() {
      return {
        'mdl-tabs': true,
        'is-upgraded': true, // manual for effect
      };
    }
  },
  methods: {
    isActive(index) {
      return index === this.currentActive;
    },
    switchTab(index) {
      this.$emit(CALLBACK_SWITCHED, index);
    }
  },
  watch: {
    active(val) {
      this.currentActive = val;
    }
  },
  mounted() {
    this.tabs = this.$children.map((value, index) => {
      return {
        index: index,
        name: value.tab
      };
    });
  }
};
</script>
