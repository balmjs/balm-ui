<template>
  <div :class="className.outer">
    <div :class="className.inner">
      <ui-tab v-for="(tab, index) in tabs"
        :key="index"
        :tab="tab"
        :icon="icon"
        :iconPrefix="iconPrefix"
        :noIconText="noIconText"></ui-tab>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import UiTab from './tab';

const POSITION_LEFT = 'left';
const POSITION_RIGHT = 'right';
const EVENT_SWITCHED = 'switched';

export default {
  name: 'ui-tabs',
  components: {
    UiTab
  },
  props: {
    active: {
      type: Number,
      default: 0
    },
    // Applies ripple click effect
    effect: {
      type: Boolean,
      default: false
    },
    position: String,
    fixedTabs: {
      type: Boolean,
      default: false
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
  data() {
    return {
      tabs: [],
      currentActive: this.active
    };
  },
  computed: {
    className() {
      return {
        outer: {
          'mdl-tabs': true,
          'is-upgraded': true, // manual for effect
          'mdl-tabs--fixed-tabs': this.fixedTabs
        },
        inner: {
          'mdl-tabs__tab-bar': true,
          'mdl-tabs--tab-left': this.position && this.position.toLowerCase() === POSITION_LEFT,
          'mdl-tabs--tab-right': this.position && this.position.toLowerCase() === POSITION_RIGHT
        }
      };
    }
  },
  methods: {
    isActive(index) {
      return index === this.currentActive;
    },
    switchTab(index) {
      this.$emit(EVENT_SWITCHED, index);
    },
    updateTab(index, name) {
      this.tabs = this.tabs.map(tab => {
        return (tab.index === index) ? {index, name} : tab;
      });
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
