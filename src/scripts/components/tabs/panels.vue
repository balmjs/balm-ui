<template>
  <div class="mdc-panels">
    <slot></slot>
  </div>
</template>

<script>
import domMixin from '../../mixins/dom';

// Define tab panel constants
const UI_PANEL = {
  cssClasses: {
    active: 'active'
  },
  EVENT: {
    CHANGE: 'update:modelValue'
  }
};

export default {
  name: 'UiPanels',
  mixins: [domMixin],
  props: {
    // States
    modelValue: {
      type: Number,
      default: 0
    }
  },
  watch: {
    modelValue(val) {
      this.updatePanel(val);
    }
  },
  mounted() {
    this.updatePanel(this.modelValue);
  },
  methods: {
    updatePanel(activeIndex) {
      const panels = this.el.querySelectorAll('.mdc-panel');
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
