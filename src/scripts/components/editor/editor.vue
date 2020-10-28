<template>
  <div class="mdc-editor-container">
    <slot name="toolbar"></slot>
    <div class="mdc-editor-content">
      <div ref="editor" class="mdc-editor"></div>
      <pre class="mdc-editor-code" contenteditable>{{ htmlContent }}</pre>
    </div>
    <template v-if="imageCustomHandler">
      <input
        ref="file"
        type="file"
        hidden
        @change="
          handleFileChange($event, (result) => {
            $emit(UI_EDITOR.EVENT.FILE_CHANGE, result[0], insertImage);
          })
        "
      />
    </template>
    <div ref="counter" class="mdc-editor-counter"></div>
  </div>
</template>

<script>
import { createEditor, Emotion } from './quill';
import UI_EDITOR from './constants';
import getType from '../../utils/typeof';
import handleFileChange from '../../utils/file';

export default {
  name: 'UiEditor',
  model: {
    prop: 'model',
    event: UI_EDITOR.EVENT.TEXT_CHANGE
  },
  props: {
    // States
    model: {
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
    toolbar: {
      type: [Array, String, null],
      default: null
    },
    toolbarIcons: {
      type: Object,
      default() {
        return UI_EDITOR.toolbarIcons;
      }
    },
    toolbarOptions: {
      type: Object,
      default() {
        return {};
      }
    },
    placeholder: {
      type: [String, null],
      default: null
    },
    readonly: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String,
      default: 'snow'
    },
    // Extension attributes
    imageCustomHandler: {
      type: Boolean,
      default: false
    },
    emotions: {
      type: Array,
      default() {
        return []; // format: [{ type, title, content: { name, value, src } }]
      }
    },
    extension: {
      type: [Boolean, Object],
      default: false
    }
  },
  data() {
    return {
      UI_EDITOR,
      $editor: null,
      htmlContent: ''
    };
  },
  watch: {
    model(val) {
      if (this.$editor) {
        if (val) {
          if (this.htmlContent !== val) {
            this.setHTML(val);
            this.$editor.blur();
          }
        } else {
          this.setHTML('');
        }
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$editor = createEditor(this.$refs.editor, {
        toolbarIcons: this.toolbarIcons,
        toolbarOptions: this.toolbarOptions,
        options: this.getOptions(this.$refs.counter),
        emotions: this.emotions,
        extension: this.extension
      });

      if (this.model) {
        this.setHTML(this.model);
      }

      this.$editor.on('text-change', (delta, oldDelta, source) => {
        let html = this.getHTML();
        if (html === UI_EDITOR.BLANK) {
          html = '';
        }

        this.htmlContent = html;
        this.$emit(UI_EDITOR.EVENT.TEXT_CHANGE, html);
      });
    });
  },
  beforeDestroy() {
    Emotion.clear();
  },
  methods: {
    getOptions(counterEl) {
      const defaultOptions = {
        modules: {},
        placeholder: this.placeholder,
        readOnly: this.readonly,
        theme: this.theme
      };
      let options = Object.assign(defaultOptions, this.options);

      options.modules.toolbar = {
        container:
          this.toolbar === 'full' ? UI_EDITOR.defaultToolbar : this.toolbar,
        handlers: {}
      };

      options.modules.counter = {
        container: counterEl
        // unit: 'word'
      };

      if (this.imageCustomHandler) {
        let customHandlers = this.imageCustomHandler
          ? {
              image: () => {
                this.$refs.file.click();
              }
            }
          : {};
      }

      return options;
    },
    getHTML() {
      return this.$editor.root.innerHTML;
    },
    setHTML(html) {
      this.$editor.root.innerHTML = html;
    },
    handleFileChange,
    insertImage(url) {
      this.$editor.insert('image', url);
    },
    encodeEmoji(html) {
      return Emotion.encode(html); // output: content
    },
    decodeEmoji(content) {
      return Emotion.decode(content); // output: html
    }
  }
};
</script>
