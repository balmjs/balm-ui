```html
<ui-editor
  ref="editor"
  v-model="decodeContent"
  placeholder="Compose an epic..."
  :toolbar="toolbar"
  :toolbar-handlers="toolbarHandlers"
  custom-image-handler
  @file-change="onFileChange"
></ui-editor>

<!-- Custom editor content preview -->
<ui-dialog v-model="preview.show" class="preview-dialog">
  <ui-dialog-title>
    Preview
    <ui-icon-button
      class="close"
      icon="close"
      @click="$balmUI.onClose('preview.show')"
    ></ui-icon-button>
  </ui-dialog-title>
  <ui-dialog-content>
    <ui-tabs
      v-model="preview.type"
      :type="2"
      :items="[
        {
          text: 'Desktop',
          icon: 'desktop_windows'
        },
        {
          text: 'Tablet',
          icon: 'tablet'
        },
        {
          text: 'Mobile',
          icon: 'phone_iphone'
        }
      ]"
    ></ui-tabs>
    <div
      v-shadow="4"
      class="preview-content"
      :style="previewStyle"
      v-html="preview.content"
    ></div>
  </ui-dialog-content>
</ui-dialog>
```

```js
const toolbar = [
  [
    { header: [false, 1, 2, 3, 4, 5, 6] },
    { font: [] },
    { size: [] },
    { lineheight: [] }
  ],
  ['bold', 'italic', 'underline', { color: [] }, { background: [] }],
  [
    { align: '' },
    { align: 'center' },
    { align: 'right' },
    { align: 'justify' }
  ],
  [
    { list: 'ordered' },
    { list: 'bullet' },
    { indent: '+1' },
    { indent: '-1' },
    'blockquote',
    'emoji'
  ],
  ['link', 'image', 'video'],
  ['strike', { script: 'super' }, { script: 'sub' }, 'divider'],
  ['clean', 'undo', 'redo'],
  ['preview'] // custom
];

export default {
  data() {
    return {
      toolbar,
      encodeContent: '',
      decodeContent: '',
      toolbarHandlers: {
        preview: (quill, value) => {
          this.preview.show = true;
          this.preview.content = this.decodeContent;
        }
      },
      preview: {
        show: false,
        type: 0,
        content: ''
      }
    };
  },
  computed: {
    previewStyle() {
      let width;

      switch (this.preview.type) {
        case 1:
          width = '768px';
          break;
        case 2:
          width = '375px';
          break;
        default:
          width = '960px';
      }

      return { width };
    }
  },
  mounted() {
    setTimeout(() => {
      if (this.$refs.editor) {
        this.decodeContent = this.$refs.editor.decodeEmoji(
          '<p>Hello BalmUI [oo] and BalmJS :smile: !</p>'
        );
      }
    }, 1);
  },
  methods: {
    async onFileChange(file, insert) {
      let { url } = await this.$http.post('/api/upload', { file });
      insert(url);
    },
    onSubmit() {
      this.encodeContent = this.$refs.editor.encodeEmoji(this.decodeContent);
      // submit action...
    }
  }
};
```
