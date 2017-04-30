<template>
  <div class="mdc-layout-grid">
    <slot></slot>
  </div>
</template>

<script>
const DEFAULT_VALUE = '16px';

export default {
  name: 'ui-grid',
  props: {
    margin: {
      type: String,
      default: DEFAULT_VALUE
    },
    gutter: {
      type: String,
      default: DEFAULT_VALUE
    }
  },
  methods: {
    setMargin() {
      this.$el.style.setProperty('--mdc-layout-grid-margin', this.margin);
    },
    setGutter() {
      this.$el.style.setProperty('--mdc-layout-grid-gutter', this.gutter);
    }
  },
  mounted() {
    if (this.margin !== DEFAULT_VALUE) {
      this.setMargin();
    }
    if (this.gutter !== DEFAULT_VALUE) {
      this.setGutter();
    }
  }
};
</script>
