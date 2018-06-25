<template>
  <section :class="className">
    <slot><!-- Toolbar icon + title --></slot>
  </section>
</template>

<script>
const ALIGNMENTS = ['start', 'end'];

export default {
  name: 'ui-toolbar-section',
  props: {
    // UI attributes
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

      if (this.align) {
        let currentAlign = this.align.toLowerCase();
        if (ALIGNMENTS.includes(currentAlign)) {
          result.push(`mdc-toolbar__section--align-${currentAlign}`);
        }
      }

      if (this.fit) {
        result.push('mdc-toolbar__section--shrink-to-fit');
      }

      return result;
    }
  }
};
</script>
