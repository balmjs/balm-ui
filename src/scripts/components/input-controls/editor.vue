<template>
  <div class="mdc-editor-container">
    <slot name="toolbar"></slot>
    <div ref="editor" class="mdc-editor"></div>
    <input
      v-if="customImageHandler"
      ref="file"
      type="file"
      @change="onFileChange"
      hidden
    />
  </div>
</template>

<script>
import Quill from 'quill';
import Editor from './editor-extension';
import getType from '../../utils/typeof';
import Emotion from './editor-extension/emotion';

// Define editor constants
const UI_EDITOR = {
  EVENT: {
    TEXT_CHANGE: 'change',
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
  name: 'ui-editor',
  model: {
    prop: 'content',
    event: UI_EDITOR.EVENT.TEXT_CHANGE
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
    theme: {
      type: String,
      default: 'snow'
    },
    customImageHandler: {
      type: Boolean,
      default: false
    },
    toolbarCustomHandlers: Object,
    emotions: {
      type: Array,
      default() {
        return []; // format: [{ type, title, content: { name, value, src } }]
      }
    },
    extension: Object
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
          this.setHTML(val);
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
        extension: this.extension
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
        this.$emit(UI_EDITOR.EVENT.TEXT_CHANGE, html);
      });
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
                Editor.insert(customFormat, value);
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
        Editor.insert('image', url);
      };

      this.$emit(UI_EDITOR.EVENT.FILE_CHANGE, file, insert);
      event.target.value = '';
    }
  }
};
</script>
