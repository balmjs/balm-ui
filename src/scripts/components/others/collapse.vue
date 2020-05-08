<template>
  <div class="mdc-collapse" :aria-expanded="expanded">
    <div class="mdc-collapse__header" @click="handleToggle">
      <slot name="toggle"></slot>
    </div>
    <div v-show="expanded" class="mdc-collapse__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
// Define collapse constants
const UI_COLLAPSE = {
  EVENT: {
    CHANGE: 'change'
  }
};

export default {
  name: 'ui-collapse',
  model: {
    prop: 'expanded',
    event: UI_COLLAPSE.EVENT.CHANGE
  },
  props: {
    expanded: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleToggle() {
      this.$emit(UI_COLLAPSE.EVENT.CHANGE, !this.expanded);
    }
  }
};
</script>
