<template>
  <section :class="className">
    <slot><!-- toolbar icon + title --></slot>
  </section>
</template>

<script>
export default {
  name: 'ui-toolbar-section',
  props: {
    // ui attributes
    align: {
      type: String,
      default: ''
    },
    fit: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return {
        'mdc-toolbar__section': true,
        'mdc-toolbar__section--align-start': this.align.toLowerCase() === 'start',
        'mdc-toolbar__section--align-end': this.align.toLowerCase() === 'end',
        'mdc-toolbar__section--shrink-to-fit': this.fit
      };
    }
  }
};
</script>
