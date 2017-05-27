<template>
  <section :class="className">
    <slot name="before"></slot>
    <template v-if="noTitle">
      <slot></slot>
    </template>
    <template v-else>
      <span :class="['mdc-toolbar__title', titleClass]">
        <slot></slot>
      </span>
    </template>
    <slot name="after"></slot>
  </section>
</template>

<script>
export default {
  name: 'ui-toolbar-section',
  props: {
    // mdc
    align: {
      type: String,
      default: ''
    },
    fit: {
      type: Boolean,
      default: false
    },
    titleClass: [String, Array, Object],
    noTitle: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return {
        'mdc-toolbar__section': true,
        'mdc-toolbar__section--align-start': this.align.toLowerCase() === 'start',
        'mdc-toolbar__section--align-center': this.align.toLowerCase() === 'center', // Need custom css
        'mdc-toolbar__section--align-end': this.align.toLowerCase() === 'end',
        'mdc-toolbar__section--shrink-to-fit': this.fit
      };
    }
  }
};
</script>
