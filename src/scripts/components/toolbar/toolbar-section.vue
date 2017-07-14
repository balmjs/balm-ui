<template>
  <section :class="className">
    <slot><!-- toolbar icon + title --></slot>
  </section>
</template>

<script>
const ALIGNMENT = ['start', 'end'];

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
      let result = ['mdc-toolbar__section'];

      let currentAlign = this.align ? this.align.toLowerCase() : '';
      if (ALIGNMENT.indexOf(currentAlign) > -1) {
        result.push(`mdc-toolbar__section--align-${currentAlign}`);
      }

      if (this.fit) {
        result.push('mdc-toolbar__section--shrink-to-fit');
      }

      return result;
    }
  }
};
</script>
