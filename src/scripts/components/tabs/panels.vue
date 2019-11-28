<template>
  <div class="mdc-panels">
    <slot></slot>
  </div>
</template>

<script>
// Define tab panels constants
const CLASSNAME_ACTIVE = 'active';

export default {
  name: 'ui-panels',
  model: {
    prop: 'active',
    event: 'change'
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
            !panel.classList.contains(CLASSNAME_ACTIVE)
          ) {
            panel.classList.add(CLASSNAME_ACTIVE);
          } else {
            panel.classList.remove(CLASSNAME_ACTIVE);
          }
        });
      }
    }
  }
};
</script>
