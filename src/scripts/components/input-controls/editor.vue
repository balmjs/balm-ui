<template>
  <div class="mdc-editor-container">
    <slot name="toolbar"></slot>
    <div ref="editor" class="mdc-editor"></div>
  </div>
</template>

<script>
import Editor from './editor-extension';
import getType from '../../utils/typeof';
import Emotion from './editor-extension/emotion';

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
          let html = Emotion.decode(val);
          console.log('watch decode html', html);
          // this.$editor.pasteHTML(html);
          this.setHTML(html);
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
        let html = Emotion.decode(this.content);
        console.log('init decode html', html);
        this.setHTML(html);
      }

      this.$editor.on('text-change', (delta, oldDelta, source) => {
        let html = this.getHTML();
        if (html === UI_EDITOR.BLANK) {
          html = '';
        }

        this.htmlContent = html;
        console.log('html', html);
        let content = Emotion.encode(html);
        console.log('encode html', html);
        this.$emit(UI_EDITOR.EVENT.CHANGE, content);
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
      options.modules.emoji = true;

      return options;
    },
    getHTML() {
      return this.$editor.root.innerHTML;
    },
    setHTML(html) {
      this.$editor.root.innerHTML = html;
    }
  }
};
</script>
