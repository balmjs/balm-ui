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
    active: {
      type: [Number, String],
      default: 0
    }
  },
  methods: {
    updatePanel(activeIndex) {
      let panels = this.$el.querySelectorAll(`.${CLASSNAME_PANEL}`);
      if (panels.length) {
        panels.forEach((panel, index) => {
          if (index === activeIndex && !panel.classList.contains(CLASSNAME_ACTIVE)) {
            panel.classList.add(CLASSNAME_ACTIVE);
          } else {
            panel.classList.remove(CLASSNAME_ACTIVE);
          }
        });
      }
    }
  },
  watch: {
    active(val) {
      this.updatePanel(val);
    }
  },
  mounted() {
    this.updatePanel(this.active);
  }
};
</script>
