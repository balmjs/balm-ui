<template>
  <div class="mdc-editor">
    <div class="mdc-editor__toolbar">
      <template #toolbar></template>
    </div>
    <div class="mdc-editor__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Quill from 'quill';

// Define editor constants
const UI_EDITOR = {
  EVENT: {
    CHANGE: 'change'
  }
};

export default {
  name: 'ui-editor',
  model: {
    prop: 'content',
    event: UI_EDITOR.EVENT.CHANGE
  },
  props: {
    content: {
      type: String,
      default: ''
    },
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      $editor: null
    };
  },
  mounted() {
    const editorConfig = Object.assign({}, this.options);

    this.$editor = new Quill('.mdc-editor', editorConfig);

    this.$editor.on('text-change', (delta, oldDelta, source) => {
      if (source == 'api') {
        console.log('An API call triggered this change.');
      } else if (source == 'user') {
        console.log('A user action triggered this change.');
      }
    });
  }
};
</script>
