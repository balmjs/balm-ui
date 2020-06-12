<template>
  <div class="mdc-panels">
    <slot></slot>
  </div>
</template>

<script>
// Define tab panel constants
const UI_PANEL = {
  cssClasses: {
    active: 'active'
  },
  EVENT: {
    CHANGE: 'change'
  }
};

export default {
  name: 'UiPanels',
  model: {
    prop: 'active',
    event: UI_PANEL.EVENT.CHANGE
  },
  props: {
    // States
    active: {
      type: Number,
      default: 0
    }
  },
  watch: {
    active(val) {
      this.updatePanel(val);
    }
  },
  mounted() {
    this.updatePanel(this.active);
  },
  methods: {
    updatePanel(activeIndex) {
      let panels = this.$el.querySelectorAll('.mdc-panel');
      if (panels.length) {
        panels.forEach((panel, index) => {
          if (
            index === activeIndex &&
            !panel.classList.contains(UI_PANEL.cssClasses.active)
          ) {
            panel.classList.add(UI_PANEL.cssClasses.active);
          } else {
            panel.classList.remove(UI_PANEL.cssClasses.active);
          }
        });
      }
    }
  }
};
</script>
