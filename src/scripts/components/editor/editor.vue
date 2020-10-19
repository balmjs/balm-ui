<template>
  <div class="mdc-editor-container">
    <slot name="toolbar"></slot>
    <div ref="editor" class="mdc-editor"></div>
    <template v-if="customImageHandler">
      <input ref="file" type="file" hidden @change="onFileChange" />
    </template>
  </div>
</template>

<script>
import Emotion from './editor-extension/emotion';
import getType from '../../utils/typeof';

// Define editor constants
const UI_EDITOR = {
  EVENT: {
    TEXT_CHANGE: 'update:modelValue',
    FILE_CHANGE: 'file-change'
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
  name: 'UiEditor',
  props: {
    // States
    modelValue: {
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
  emits: [UI_EDITOR.EVENT.TEXT_CHANGE, UI_EDITOR.EVENT.FILE_CHANGE],
  data() {
    return {
      Editor: {},
      $editor: null,
      htmlContent: ''
    };
  },
  watch: {
    modelValue(val) {
      if (val) {
        if (this.htmlContent !== val) {
          this.setHTML(val);
          this.$editor.blur();
        }
      } else {
        this.setHTML('');
      }
    }
  },
  mounted() {
    this.Editor = require('./editor-extension').default; // NOTE: For SSR

    this.$nextTick(() => {
      this.$editor = this.Editor.create(this.$refs.editor, {
        options: this.getOptions(),
        emotions: this.emotions,
        extension: this.extension
      });

      if (this.modelValue) {
        this.setHTML(this.modelValue);
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
  unmounted() {
    this.Editor.destroy();
  },
  methods: {
    getOptions() {
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
                this.Editor.insert(customFormat, value);
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
        this.Editor.insert('image', url);
      };

      this.$emit(UI_EDITOR.EVENT.FILE_CHANGE, file, insert);
      event.target.value = '';
    }
  }
};
</script>
