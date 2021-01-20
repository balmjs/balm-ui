<template>
  <div class="mdc-editor-container">
    <slot name="toolbar"></slot>
    <div class="mdc-editor-content">
      <pre v-if="editSourceCode" class="mdc-editor-code" contenteditable>{{
        htmlContent
      }}</pre>
      <div v-else ref="editor" class="mdc-editor"></div>
    </div>
    <div v-if="withCounter" ref="counter" class="mdc-editor-counter"></div>
    <template v-if="customImageHandler">
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
    <slot></slot>
  </div>
</template>

<script>
import { createEditor, Emotion } from './quill';
import { onBlurEmojiHandler } from './extensions/emoji/module';
import UI_EDITOR from './constants';
import handleFileChange from '../../utils/file';
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
    toolbarIcons: {
      type: Object,
      default() {
        return {};
      }
    },
    toolbarTips: {
      type: Object,
      default() {
        return {};
      }
    },
    toolbarOptions: {
      type: Object,
      default() {
        return {};
      }
    },
    toolbarHandlers: {
      type: Object,
      default() {
        return {};
      }
    },
    customImageHandler: {
      type: Boolean,
      default: false
    },
    emotions: {
      type: Array,
      default() {
        return []; // format: [{ type, title, content: { name, value, src } }]
      }
    },
    withCounter: {
      type: Boolean,
      default: false
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
      htmlContent: '',
      editSourceCode: false // TODO
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
        toolbarIcons: Object.assign(UI_EDITOR.toolbarIcons, this.toolbarIcons),
        toolbarTips: this.toolbarTips,
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

    document.addEventListener('click', onBlurEmojiHandler);
  },
  beforeDestroy() {
    Emotion.clear();

    document.removeEventListener('click', onBlurEmojiHandler);
  },
  methods: {
    setToolbarOption(toolbar, key, value) {
      for (let format of toolbar) {
        if (
          getType(format) === 'object' &&
          getType(format[key]) === 'array' &&
          format[key].length === 0
        ) {
          format[key] = [false, ...value];
        } else if (getType(format) === 'array') {
          this.setToolbarOption(format, key, value);
        }
      }
    },
    getToolbar() {
      let customToolbar = this.toolbar;

      if (getType(customToolbar) === 'array') {
        Object.keys(this.toolbarOptions).forEach((format) => {
          let value = this.toolbarOptions[format];
          if (value.length) {
            this.setToolbarOption(
              customToolbar,
              format,
              this.toolbarOptions[format]
            );
          }
        });
      }

      return this.toolbar === 'full' ? UI_EDITOR.defaultToolbar : customToolbar;
    },
    getOptions(counterEl) {
      const defaultOptions = {
        modules: {},
        placeholder: this.placeholder,
        readOnly: this.readonly,
        theme: this.theme
      };
      let options = Object.assign(defaultOptions, this.options);

      options.modules.toolbar = {
        container: this.getToolbar(),
        handlers: {}
      };

      if (this.withCounter) {
        options.modules.counter = {
          container: counterEl
          // unit: 'word'
        };
      }

      // Custom event handlers
      const toolbarHandlers = options.modules.toolbar.handlers;

      if (this.customImageHandler) {
        toolbarHandlers.image = () => {
          this.$refs.file.click();
        };
      }

      Object.keys(this.toolbarHandlers).forEach((format) => {
        toolbarHandlers[format] = (value) => {
          this.toolbarHandlers[format](this.$editor, value);
        };
      });

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
