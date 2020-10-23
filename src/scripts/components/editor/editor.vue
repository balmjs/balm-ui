<template>
  <div class="mdc-editor-container">
    <slot name="toolbar"></slot>
    <div class="mdc-editor-content">
      <div ref="editor" class="mdc-editor"></div>
      <pre class="mdc-editor-code" contenteditable>{{ htmlContent }}</pre>
    </div>
    <template v-if="customImageHandler">
      <input ref="file" type="file" hidden @change="onFileChange" />
    </template>
    <div ref="counter" class="mdc-editor-counter"></div>
  </div>
</template>

<script>
import { createEditor, Emotion } from './quill';
import UI_EDITOR from './constants';
import getType from '../../utils/typeof';

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
    customImageHandler: {
      type: Boolean,
      default: false
    },
    toolbarCustomHandlers: {
      type: Object,
      default() {
        return {};
      }
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

      options.modules.toolbar =
        this.toolbar === 'full' ? UI_EDITOR.toolbarOptions : this.toolbar;

      if (
        this.customImageHandler ||
        getType(this.toolbarCustomHandlers) === 'object'
      ) {
        let customHandlers = this.customImageHandler
          ? {
              image: () => {
                this.$refs.file.click();
              }
            }
          : {};

        Object.keys(this.toolbarCustomHandlers).forEach((customFormat) => {
          customHandlers[customFormat] = (formatValue) => {
            if (formatValue) {
              const insert = (value = 'null') => {
                this.$editor.insert(customFormat, value);
              };

              this.toolbarCustomHandlers[customFormat](this.$editor, insert);
            } else {
              this.$editor.format(customFormat, false);
            }
          };
        });

        options.modules.toolbar = {
          container: options.modules.toolbar,
          handlers: customHandlers
        };

        options.modules.counter = {
          container: counterEl
          // unit: 'word'
        };
      }

      return options;
    },
    getHTML() {
      return this.$editor.root.innerHTML;
    },
    setHTML(html) {
      this.$editor.root.innerHTML = html;
    },
    encodeEmoji(html) {
      return Emotion.encode(html); // output: content
    },
    decodeEmoji(content) {
      return Emotion.decode(content); // output: html
    },
    onFileChange(event) {
      const file = event.target.files[0];
      const insert = (url) => {
        this.$editor.insert('image', url);
      };

      this.$emit(UI_EDITOR.EVENT.FILE_CHANGE, file, insert);
      event.target.value = '';
    }
  }
};
</script>
