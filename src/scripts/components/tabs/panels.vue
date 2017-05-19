<template>
  <div class="mdc-panels">
    <slot></slot>
  </div>
</template>

<script>
import {CLASSNAME_PANEL, CLASSNAME_ACTIVE} from './constants';

export default {
  name: 'ui-panels',
  props: {
    activeIndex: {
      type: [Number, String],
      default: 0
    }
  },
  methods: {
    updatePanel(index) {
      let activePanel = this.$el.querySelector(`.${CLASSNAME_PANEL}.${CLASSNAME_ACTIVE}`);
      if (activePanel) {
        activePanel.classList.remove(CLASSNAME_ACTIVE);
      }
      let n = index + 1;
      let newActivePanel = this.$el.querySelector(`.${CLASSNAME_PANEL}:nth-child(${n})`);
      if (newActivePanel) {
        newActivePanel.classList.add(CLASSNAME_ACTIVE);
      }
    }
  },
  watch: {
    activeIndex(val) {
      this.updatePanel(this.activeIndex);
    }
  },
  mounted() {
    this.updatePanel(this.activeIndex);
  }
};
</script>
