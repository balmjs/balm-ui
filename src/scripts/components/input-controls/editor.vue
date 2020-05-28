<template>
  <div class="mdc-editor-container">
    <slot name="toolbar"></slot>
    <div ref="editor" class="mdc-editor"></div>
  </div>
</template>

<script>
import Editor from './editor-extension';
import getType from '../../utils/typeof';

// Define editor constants
const UI_EDITOR = {
  EVENT: {
    CHANGE: 'change'
  },
  BLANK: '<p><br></p>',
  toolbarOptions: [
    [{ font: [] }, { size: ['small', false, 'large', 'huge'] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ color: [] }, { background: [] }],
    [{ script: 'sub' }, { script: 'super' }],
    [{ header: 1 }, { header: 2 }, 'blockquote', 'code-block'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' }
    ],
    [{ direction: 'rtl' }, { align: [] }],
    ['link', 'image', 'video'], // NOTE: 'formula' - requires `KaTex`
    ['clean']
  ]
};

export default {
  name: 'ui-editor',
  model: {
    prop: 'content',
    event: UI_EDITOR.EVENT.CHANGE
  },
  props: {
    // States
    content: {
      type: String,
      default: ''
    },
    options: {
      type: Object,
      default() {
        return {};
      }
    },
    // UI attributes
    toolbar: [Array, String],
    placeholder: String,
    theme: String,
    // TODO: extension
    uploadImageUrl: String,
    emotions: {
      type: Array,
      default() {
        return []; // format: [{ type, title, content: { name, code } }]
      }
    },
    extensions: {
      type: Array,
      default() {
        return [];
      }
    },
    extensionHandlers: Object
  },
  data() {
    return {
      $editor: null,
      htmlContent: ''
    };
  },
  watch: {
    content(val) {
      if (val) {
        if (this.htmlContent !== val) {
          this.$editor.pasteHTML(val);
          this.$editor.blur();
        }
      } else {
        this.setHTML('');
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$editor = Editor.create(this.$refs.editor, {
        options: this.getOptions(),
        emotions: this.emotions,
        extensions: this.extensions
      });

      if (this.content) {
        this.setHTML(this.content);
      }

      this.$editor.on('text-change', (delta, oldDelta, source) => {
        let html = this.getHTML();
        if (html === UI_EDITOR.BLANK) {
          html = '';
        }

        this.htmlContent = html;
        this.$emit(UI_EDITOR.EVENT.CHANGE, html);
      });

      if (getType(this.extensionHandlers) === 'object') {
        const toolbar = this.$editor.getModule('toolbar');
        Object.keys(this.extensionHandlers).forEach((customEvent) =>
          toolbar.addHandler(customEvent, this.extensionHandlers[customEvent])
        );
      }
    });
  },
  beforeDestroy() {
    Editor.destroy();
  },
  methods: {
    getOptions() {
      const defaultOptions = {
        modules: {},
        placeholder: this.placeholder,
        theme: this.theme
      };
      let options = Object.assign(defaultOptions, this.options);

      options.modules.toolbar =
        this.toolbar === 'full' ? UI_EDITOR.toolbarOptions : this.toolbar;

      // Custom extensions
      options.modules['emoji-toolbar'] = true;

      return options;
    },
    getHTML() {
      return this.$editor.root.innerHTML;
    },
    setHTML(html) {
      this.$editor.root.innerHTML = html;
    },
    paste(html) {
      const selection = this.$editor.getSelection();
      this.$editor.clipboard.dangerouslyPasteHTML(
        selection ? selection.index : 0,
        html
      );
    }
  }
};
</script>
